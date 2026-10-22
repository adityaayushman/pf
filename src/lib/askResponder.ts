// Keyless, local "smart FAQ" responder for the Ask-me assistant.
// No API key, no cost. Matches a question against intents by keyword overlap
// and returns a curated, accurate answer about Aditya. If an Anthropic API key
// is configured, the widget uses the real LLM instead and never calls this.

type Intent = { keywords: string[]; answer: string };

const INTENTS: Intent[] = [
  {
    keywords: ["hi", "hello", "hey", "yo", "greeting", "sup", "hii"],
    answer:
      "Hi! 👋 I'm Aditya's assistant. Ask me about his projects, skills, experience, education, or how to get in touch.",
  },
  {
    keywords: ["thank", "thanks", "cool", "awesome", "great", "nice", "helpful"],
    answer:
      "You're welcome! 😊 Anything else you'd like to know about Aditya — his projects, skills, or how to reach him?",
  },
  {
    keywords: [
      "fit", "why", "strength", "best", "hire him", "about him", "who is",
      "about aditya", "summary", "introduce", "overview", "suited", "candidate",
    ],
    answer:
      "Aditya is an AI & Machine Learning engineer (SRM, Class of 2027) who ships real, end-to-end systems — from a cloud-optimization SSRN preprint to computer-vision platforms like PCBMind AI and MedVision. He pairs strong fundamentals (300+ LeetCode problems solved) with 5 internships and hands-on YOLOv8 / PyTorch / FastAPI experience. For an ML or software role he brings genuine build-and-ship ability, not just theory. Want specifics on any project?",
  },
  {
    keywords: [
      "skill", "tech", "stack", "framework", "tool", "technolog",
      "proficient", "programming", "coding language", "language he",
    ],
    answer:
      "Aditya's core strength is AI/ML — Computer Vision (YOLOv8, OpenCV), Deep Learning (PyTorch, TensorFlow, Keras) and Reinforcement Learning with Explainable AI. He codes in Python, Java, SQL, C, C++ and JavaScript, and builds full-stack systems with FastAPI, React.js and Next.js, backed by PostgreSQL / Supabase and Docker.",
  },
  {
    keywords: ["pcb", "pcbmind", "defect", "inspection", "board"],
    answer:
      "PCBMind AI is an AI-powered PCB defect-inspection platform: it preprocesses board images (CLAHE, ORB, homography), detects defects with computer vision + deep learning, and generates exportable PDF/CSV quality reports. Built with PyTorch, YOLOv8, FastAPI, a React.js dashboard and PostgreSQL/Supabase — he built it during his AI/ML internship at Kukreja's Wastec. Live demo: https://pcbmind-ai.vercel.app/",
  },
  {
    keywords: ["medvision", "medical", "imaging", "clinical", "healthcare", "health"],
    answer:
      "MedVision is an AI medical-imaging platform for intelligent clinical decision support, using Computer Vision, Deep Learning and Explainable AI. It's the focus of Aditya's research internship at KIIT, built with Python, PyTorch, OpenCV, FastAPI and React.js.",
  },
  {
    keywords: [
      "cloud", "optimizer", "optimiser", "resource", "ssrn", "publication",
      "paper", "research", "published", "dqn", "reinforcement",
    ],
    answer:
      "The Cloud Computing Resource Optimizer is a multi-cloud resource manager using machine learning and reinforcement learning — XGBoost and Random Forest to forecast CPU/memory demand, a Deep Q-Network (DQN) for scheduling, and Explainable AI for transparency. It's an SSRN preprint (2026).",
  },
  {
    keywords: ["gridsense", "ev", "charging", "carbon", "grid", "energy"],
    answer:
      "GridSense is a carbon-aware EV charging optimizer: a linear-programming model (PuLP) schedules home charging into off-peak, low-carbon hours using real Spanish grid data, reducing grid strain and emissions. It has a full-stack dashboard built with FastAPI, PostgreSQL and React. Live demo: https://gridsense-app-drab.vercel.app/",
  },
  {
    keywords: ["road", "guardian", "safety", "crash", "helmet", "bayesian", "fleet"],
    answer:
      "Smart Road Guardian AI X is an explainable edge-AI road-safety platform for Indian roads. It predicts crash risk with causal Bayesian networks and adds live risk scoring, helmet detection, near-miss black-spot detection and fleet monitoring (Python, PyTorch, ONNX, pgmpy, Next.js, Supabase). Live demo: https://trie-dashboard.vercel.app/",
  },
  {
    keywords: ["crowd", "crowdcount", "people detection", "heatmap"],
    answer:
      "CrowdCount is a real-time, multi-zone crowd-analytics platform using YOLOv8 — live dashboards plus offline batch analytics, with centroid tracking, heatmaps and line-crossing detection over a FastAPI backend.",
  },
  {
    keywords: ["project", "built", "portfolio", "made", "showcase", "worked on"],
    answer:
      "Aditya's flagship projects are:\n• PCBMind AI — AI PCB defect-inspection SaaS (PyTorch, YOLOv8, FastAPI, React)\n• MedVision — AI medical imaging for clinical decision support\n• Cloud Computing Resource Optimizer — ML + reinforcement learning, SSRN preprint (2026)\n• GridSense — carbon-aware EV charging optimizer (linear programming, FastAPI, React)\n• Smart Road Guardian AI X — edge-AI road safety with causal Bayesian networks\nHe's also built CrowdCount (YOLOv8 crowd analytics), and Clear Pixel. Ask me about any of them!",
  },
  {
    keywords: [
      "experience", "intern", "internship", "job", "company", "worked",
      "employment", "kiit", "osswal", "kukreja", "syllogistek", "silicon",
    ],
    answer:
      "Aditya has done 5 internships:\n• KIIT — Research Intern (AI medical imaging / MedVision)\n• Osswal Infosystem, a SAP Partner — Flutter Developer Intern (Indore)\n• Kukreja's Wastec — AI/ML Intern, built PCBMind AI (Mumbai)\n• Syllogistek Systems — Summer Intern (Generative AI, Keras, PyTorch)\n• Silicon Institute of Technology — Summer Intern (Python, ML, DL)",
  },
  {
    keywords: [
      "education", "college", "university", "srm", "degree", "cgpa", "gpa",
      "study", "student", "school", "btech", "b.tech", "graduat", "academ",
    ],
    answer:
      "Aditya is pursuing a B.Tech CSE (AI & ML) at SRM Institute of Science and Technology, Class of 2027, with a CGPA of 7.5/10. He completed his schooling at DAV Public School, Bhubaneswar.",
  },
  {
    keywords: ["certif", "certificate", "nptel", "cisco", "mathworks", "course", "credential"],
    answer:
      "Aditya holds certifications in Programming in Java (NPTEL), Networking Basics (Cisco), Deep Learning Onramp (MathWorks), Data Visualisation (Tata, via Forage), and a Cybersecurity Virtual Internship (AICTE NEAT).",
  },
  {
    keywords: [
      "contact", "email", "reach", "hire", "hiring", "recruit", "touch",
      "connect", "available", "opportunit", "mail",
    ],
    answer:
      "You can reach Aditya at adityaasahoo@gmail.com. He's on GitHub (github.com/adityaayushman), LinkedIn and LeetCode — links are in the nav and footer. He's actively open to AI/ML and software roles!",
  },
  {
    keywords: ["github", "linkedin", "leetcode", "link", "social", "profile"],
    answer:
      "Find Aditya online: GitHub → github.com/adityaayushman, plus LinkedIn and LeetCode (linked in the top nav and footer). On LeetCode he's solved 300+ problems, including ~65 Hard.",
  },
  {
    keywords: ["dsa", "algorithm", "competitive", "data structure", "problems solved"],
    answer:
      "On LeetCode, Aditya has solved 300+ problems including around 65 Hard — solid data-structures-and-algorithms depth backing up his AI work.",
  },
  {
    keywords: ["leadership", "aaruush", "mun", "volunteer", "committee", "ed sheeran", "activit"],
    answer:
      "Beyond code, Aditya was Committee Head at Aaruush (SRM's national techno-management fest), is a member of the SRM MUN Society, and volunteered (via BookMyShow) at the Ed Sheeran India Tour 2025.",
  },
  {
    keywords: ["speak", "fluent", "native", "mother tongue", "hindi", "odia", "spanish", "spoken"],
    answer:
      "Aditya speaks English and Hindi (professional working proficiency), Odia (native), and some Spanish.",
  },
  {
    keywords: ["resume", "cv", "download"],
    answer:
      "You can grab Aditya's resume from the Resume button in the top navigation, or the Download Resume button near the bottom of the page.",
  },
];

const FALLBACK =
  "I can tell you about Aditya's projects (PCBMind AI, MedVision, Cloud Optimizer…), his skills, experience, education, publications, or how to reach him. What would you like to know? You can also email him directly at adityaasahoo@gmail.com.";

export function localAnswer(question: string): string {
  const q = question.toLowerCase();
  let best: Intent | null = null;
  let bestScore = 0;
  for (const intent of INTENTS) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (q.includes(kw)) score += kw.length > 4 ? 2 : 1; // weight specific terms
    }
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }
  return best && bestScore > 0 ? best.answer : FALLBACK;
}
