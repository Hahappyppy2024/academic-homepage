(() => {
  'use strict';
  // A single document listener also works over the navigation and content cards.
  document.addEventListener('pointerdown', event => {
    if (event.button !== 0 || document.hidden) return;
    if (document.querySelectorAll('.pond-ripple').length >= 10) return;
    const ring = document.createElement('span');
    ring.className = 'pond-ripple';
    ring.setAttribute('aria-hidden', 'true');
    ring.style.left = `${event.clientX}px`;
    ring.style.top = `${event.clientY}px`;
    document.body.append(ring);
    ring.addEventListener('animationend', () => ring.remove(), { once: true });
    setTimeout(() => ring.remove(), 2200);
  }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    document.documentElement.classList.toggle('pond-paused', document.hidden);
  });
})();

// Brief smiles are UI overlays; the original cat artwork stays intact.
(() => {
  const portrait = document.querySelector('.cat-portrait');
  if (!portrait) return;
  const areas = portrait.querySelector('.cat-hitareas');
  const response = document.querySelector('.cat-response');
  const cats = [
    {left:0,right:16.5,x:10,y:39}, {left:16.5,right:38.5,x:24.8,y:66.5},
    {left:38.5,right:51,x:44.5,y:49,angle:14}, {left:51,right:71,x:58.7,y:78.5},
    {left:71,right:83,x:73.95,y:58.7,angle:30}, {left:83,right:100,x:89.5,y:39.5,angle:16}
  ];
  // Tiny lights belong to the cat image, independent of click feedback.
  const glints = document.createElement('span');
  glints.className = 'cat-glints';
  glints.setAttribute('aria-hidden','true');
  const points = [[6,63],[13,53],[20,79],[26,49],[34,66],[40,72],
    [44,31],[48,61],[53,78],[61,54],[66,72],[72,69],[77,44],[83,75],[89,62],[94,44],
    [9,78],[29,77],[42,81],[57,66],[68,81],[76,78],[87,50],[92,78],[16,70],[90,72]];
  points.forEach(([x,y],i) => {
    const dot=document.createElement('i');
    dot.style.cssText=`left:${x}%;top:${y}%;--delay:${-i*1.17}s;--duration:${4.5+i%4*.7}s;--size:${i%3===0?4.5:3.5}px`;
    glints.append(dot);
  });
  portrait.append(glints);
  const observer = new IntersectionObserver(entries => {
    portrait.classList.toggle('glints-visible',entries[0].isIntersecting);
  });
  observer.observe(portrait);
  let responseTimer;
  cats.forEach((cat,index) => {
    const smile = document.createElement('span');
    smile.className = 'cat-smile';
    smile.setAttribute('aria-hidden','true');
    smile.innerHTML = `<svg viewBox="-25 -16 50 32" style="left:${cat.x}%;top:${cat.y}%;transform:translate(-50%,-50%) rotate(${cat.angle || 0}deg)"><defs><radialGradient id="muzzle-${index}"><stop stop-color="#fff5e4"/><stop offset="1" stop-color="#fff5e4" stop-opacity="0"/></radialGradient></defs><ellipse rx="22" ry="14" fill="url(#muzzle-${index})"/><ellipse cx="-17" cy="-3" rx="6" ry="3" fill="#eeb6bb" opacity=".6"/><ellipse cx="17" cy="-3" rx="6" ry="3" fill="#eeb6bb" opacity=".6"/><path d="M-14 -2 Q0 13 14 -2" fill="none" stroke="#825847" stroke-width="1.7" stroke-linecap="round"/></svg>`;
    const button = document.createElement('button');
    button.className = 'cat-pet';
    button.type = 'button';
    button.style.left = `${cat.left}%`;
    button.style.width = `${cat.right-cat.left}%`;
    button.setAttribute('aria-label',`摸摸第 ${index+1} 只猫，让它笑一下 / Pet cat ${index+1}`);
    let timer;
    button.addEventListener('click', () => {
      clearTimeout(timer);
      clearTimeout(responseTimer);
      smile.classList.add('is-smiling');
      response.innerHTML = '喵 <span class="cat-heart" aria-label="粉色小心心">&#9829;</span>~';
      timer = setTimeout(() => smile.classList.remove('is-smiling'),1600);
      responseTimer = setTimeout(() => {response.textContent='';},1800);
    });
    areas.append(button,smile);
  });
})();

// Use the same gentle glints on every decorative lotus surface.
(() => {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) entry.target.classList.toggle('lotus-glints-visible', entry.isIntersecting);
  });
  function decorate(scene, kind, count) {
    if (!scene || scene.querySelector(':scope > .lotus-starfield')) return;
    const field = document.createElement('span');
    field.className = `lotus-starfield lotus-starfield--${kind}`;
    field.setAttribute('aria-hidden', 'true');
    for (let i=0; i<count; i++) {
      const dot=document.createElement('i');
      let x=7+(i*37%87);
      const y=18+(i*23%65);
      // The cat portrait already has its own 26 lights.
      if (kind==='footer') x=i%2===0 ? 6+(i*7%18) : 77+(i*7%18);
      dot.style.cssText=`left:${x}%;top:${y}%;--delay:${-i*1.13}s;--duration:${4.6+i%5*.6}s;--size:${kind==='mark'?2:i%4===0?4:3}px`;
      field.append(dot);
    }
    scene.append(field);
    observer.observe(field);
  }
  decorate(document.querySelector('.header-scene'),'header',26);
  decorate(document.querySelector('.footer-cats'),'footer',20);
  document.querySelectorAll('.content-section + .content-section').forEach(e=>decorate(e,'divider',12));
  document.querySelectorAll('.year-heading').forEach(e=>decorate(e,'small',5));
  document.querySelectorAll('.toc hr').forEach(hr=> {
    const frame=document.createElement('div');
    frame.className='lotus-hr-glints';
    hr.before(frame);
    frame.append(hr);
    decorate(frame,'small',5);
  });
  document.querySelectorAll('h1 .en,h2 .en,.identity-name .en').forEach(e=> {
    if (getComputedStyle(e,'::after').backgroundImage.includes('lotus')) decorate(e,'mark',3);
  });
})();
