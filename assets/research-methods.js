// Editable bilingual content for research-methods.html.
window.RESEARCH_METHODS = [
  {
    id:'research-question',title:'Choosing a Research Question',titleZh:'选题与研究问题',
    intro:'Start with a concrete problem, clarify its significance, and turn it into a question that evidence can answer.',introZh:'从具体问题出发，明确研究意义，把想法转化为能够通过证据回答的研究问题。',
    steps:[
      {en:'Describe who faces the problem, when it occurs, and what remains unresolved.',zh:'说明谁在什么场景下面临问题，以及现有方法还有哪些不足。'},
      {en:'Define the research scope and express each research question clearly.',zh:'界定研究对象和范围，用清晰的句子写出每个研究问题。'},
      {en:'Specify what evidence would support or challenge the proposed answer.',zh:'提前说明哪些证据能够支持或质疑预期答案。'}
    ],
    output:'A problem statement, research questions, and evaluation criteria.',outputZh:'问题说明、研究问题与评价标准。'
  },
  {
    id:'literature-reading',title:'Reading and Organizing Literature',titleZh:'文献阅读与整理',
    intro:'Connect individual papers into a map of the research direction, its development, and its open questions.',introZh:'把单篇论文联系成知识地图，理解研究方向的发展脉络与尚未解决的问题。',
    steps:[
      {en:'Record each paper’s problem, method, data, evaluation, findings, and limitations.',zh:'记录每篇论文的问题、方法、数据、评估方式、主要发现和局限。'},
      {en:'Compare papers addressing the same question and distinguish changes in assumptions and settings.',zh:'对比回答同类问题的论文，区分研究假设、实验条件和方法的变化。'},
      {en:'Keep source links and notes that separate the authors’ claims from your own interpretation.',zh:'保留原文链接和笔记，区分作者的论断与自己的理解。'}
    ],
    output:'A literature comparison table and a map of open questions.',outputZh:'文献对照表与待解决问题清单。'
  },
  {
    id:'study-design',title:'Designing the Study',titleZh:'研究设计',
    intro:'Match the study design to the research questions and make comparisons interpretable.',introZh:'让研究设计服务于研究问题，使比较条件清晰、结果能够解释。',
    steps:[
      {en:'Choose data, methods, and metrics that address the research questions.',zh:'选择能够回答研究问题的数据、研究方法与评价指标。'},
      {en:'Define baselines, controls, inclusion criteria, and the variables that change between conditions.',zh:'明确基线、对照条件、样本纳入标准，以及各条件之间变化的因素。'},
      {en:'Identify possible confounding factors and record how they will be handled.',zh:'识别可能影响结论的混杂因素，并记录处理方式。'}
    ],
    output:'A study protocol with data, comparisons, metrics, and analysis plans.',outputZh:'包含数据、比较条件、指标与分析计划的研究方案。'
  },
  {
    id:'experiments',title:'Running and Recording Experiments',titleZh:'实验实施与记录',
    intro:'Make the experimental process traceable before interpreting its results.',introZh:'先让实验过程可追溯，再对结果作出解释。',
    steps:[
      {en:'Record code and data versions, configurations, commands, and relevant environment details.',zh:'记录代码与数据版本、配置、执行命令，以及相关环境信息。'},
      {en:'Use consistent procedures across comparison groups and retain raw outputs and logs.',zh:'在各比较组中采用一致的实验流程，保留原始输出和日志。'},
      {en:'Separate execution errors from study outcomes and document unexpected observations.',zh:'区分执行错误与研究结果，记录异常现象和处理过程。'}
    ],
    output:'Executable scripts, an experiment log, and traceable raw results.',outputZh:'可执行脚本、实验日志与可追溯的原始结果。'
  },
  {
    id:'evidence-analysis',title:'Analyzing and Interpreting Evidence',titleZh:'结果分析与证据解释',
    intro:'Answer each research question with evidence while making uncertainty and limitations visible.',introZh:'用证据逐一回答研究问题，同时明确不确定性与适用边界。',
    steps:[
      {en:'Check sample counts, missing data, and metric definitions before comparing results.',zh:'在比较结果前核对样本数量、缺失数据与指标定义。'},
      {en:'Combine quantitative results with examination of representative and failure cases.',zh:'结合定量结果与代表性案例、失败案例的具体分析。'},
      {en:'Separate observations from explanations and avoid conclusions beyond the study’s evidence.',zh:'区分观察到的事实与解释，避免得出超出研究证据的结论。'}
    ],
    output:'Evidence-backed answers, figures and tables, and an account of limitations.',outputZh:'有证据支持的研究回答、图表与局限说明。'
  },
  {
    id:'writing-reproducibility',title:'Writing and Reproducibility',titleZh:'论文写作与复现',
    intro:'Present the problem, methods, and evidence as a coherent account that others can inspect and reproduce.',introZh:'把问题、方法与证据组织成连贯的论述，让他人能够检查和复现。',
    steps:[
      {en:'Align the research questions, methods, results, and conclusions throughout the paper.',zh:'核对论文中的研究问题、方法、结果与结论是否一致。'},
      {en:'Explain data sources, experimental procedures, and the evidence behind each contribution.',zh:'说明数据来源、实验步骤，以及每项贡献对应的证据。'},
      {en:'Organize code, data instructions, and result-generation scripts, then check the reproduction steps.',zh:'整理代码、数据说明与结果生成脚本，并检查复现步骤。'}
    ],
    output:'A coherent manuscript and a documented reproduction package.',outputZh:'结构清晰的论文与附有说明的复现材料。'
  }
];
