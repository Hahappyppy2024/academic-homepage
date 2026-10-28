// Edit each course's pptUrl to add its slides link.
// Examples: 'https://example.com/slides.pptx' or 'assets/slides/ai-agents.pptx'.
// Empty links display "PPT 待添加 / Slides coming soon" and are not clickable.
window.COURSE_CATALOG = {
  foundations: [
    {id:'academic-writing',title:'Academic Writing',titleZh:'论文写作',summary:'Structuring a paper, developing an argument, and presenting research clearly.',summaryZh:'围绕论文结构、论证组织与学术表达，学习清晰呈现研究问题、方法和结果。',pptUrl:''},
    {id:'cnn',title:'CNN',titleZh:'卷积神经网络',summary:'Core concepts, model structure, and the foundations of learning visual features.',summaryZh:'理解卷积神经网络的基础概念、模型结构与视觉特征学习思路。',pptUrl:''},
    {id:'attention',title:'Attention',titleZh:'注意力机制',summary:'The basic ideas and computation of attention, with an introduction to model applications.',summaryZh:'介绍注意力机制的基本思想、计算过程及其在模型中的应用。',pptUrl:''}
  ],
  research: [
    {id:'llm',title:'LLM',titleZh:'大语言模型',summary:'Foundations, development, representative methods, and research questions.',summaryZh:'梳理大语言模型的基础知识、发展脉络、代表性方法与研究问题。',pptUrl:''},
    {id:'research-ai-agents',title:'AI Agents',titleZh:'AI 智能体',summary:'Concepts, the evolution of agent methods, and research on capabilities and evaluation.',summaryZh:'围绕智能体的基本概念、方法演进、能力构建与评估，梳理相关研究。',pptUrl:''},
    {id:'object-detection',title:'Object Detection',titleZh:'目标检测',summary:'Core tasks, the development of detection methods, and experimental evaluation.',summaryZh:'介绍目标检测的基础任务、方法发展脉络与实验评估思路。',pptUrl:''},
    {id:'secure-code-generation',title:'Secure Code Generation',titleZh:'安全代码生成',summary:'Research on generating secure code, building benchmarks, and evaluating security.',summaryZh:'围绕安全代码生成、基准构建与安全评估，介绍基础知识和研究进展。',pptUrl:''}
  ],
  original: [
    {id:'original-ai-agents',title:'AI Agents',titleZh:'AI 智能体',summary:'Connect research with industry cases through agent design, implementation, and evaluation. Materials evolve with research and practical needs.',summaryZh:'结合工业案例与科研方法，围绕智能体设计、实现和评估开展实践，随研究进展与实际需求持续更新。',pptUrl:''},
    {id:'original-ai-security',title:'AI Security',titleZh:'AI 安全',summary:'Combine research and real-world applications to explore security risks, testing, evaluation, and safeguards for large language models and agents. Cases and course materials are updated as research and practical needs evolve.',summaryZh:'结合实际应用与科研进展，围绕大模型和智能体的安全风险、测试评估与防护设计开展实践，持续更新案例与课件。',pptUrl:''}
  ]
};
