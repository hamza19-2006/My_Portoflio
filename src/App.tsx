import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowUp, Mail, Github, ExternalLink, X } from "lucide-react";

// --- Data ---
const projects = [
  {
    id: 1,
    title: "Autonomous AI Social Media & Client CRM Funnel",
    tags: ["CRM Integration", "AI Agent", "Multi-Platform"],
    brief: "A zero-touch sales funnel that converts social media DMs into qualified, logged project leads.",
    fullDetails: "This system handles Instagram, TikTok, and Facebook simultaneously. The AI agent replies instantly to DMs and comments, maintaining conversational memory. It qualifies leads by asking for project scopes, validates emails, and generates unique Order IDs. It then drafts a professional project brief and emails it to the manager with 1-click \"Accept/Reject\" buttons. Approved projects automatically trigger price entry forms, update a Google Sheets CRM, and send formatted confirmation emails to the client. Includes an automatic human-handoff protocol for complex queries.",
    image: "https://i.ibb.co/nMcxdhW9/1st-Pic.png"
  },
  {
    id: 2,
    title: "Multi-Platform Content Distribution Engine",
    tags: ["Content Automation", "Gemini AI", "ImageKit CDN"],
    brief: "Transforms a single Google Drive upload into optimized content for 6 major networks simultaneously.",
    fullDetails: "Replaces 15+ hours of manual social media management per week. The workflow monitors a Drive folder and uses Google Gemini AI to visually analyze new images/videos. It auto-generates platform-specific metadata: visual-focused captions for Instagram, viral trends for TikTok, B2B professional copy for LinkedIn, and SEO titles for YouTube Shorts. Media is hosted via ImageKit CDN for speed. The system auto-publishes to IG/YT, routes to Zapier for FB/TikTok, and sends real-time deployment receipts via WhatsApp.",
    image: "https://i.ibb.co/3yRKQ25g/2nd-Pic.png"
  },
  {
    id: 3,
    title: "Multi-Modal AI Telegram Assistant",
    tags: ["Telegram API", "Multi-modal AI", "Smart Routing"],
    brief: "An intelligent virtual assistant processing text, voice notes, images, and videos in real-time.",
    fullDetails: "This bot features a conversational memory buffer (remembering the last 5 user exchanges for deep context). It handles audio transcription for voice notes, visual analysis for images, and content summarization for videos. It utilizes Smart Routing to switch between Google Gemini and OpenAI depending on the media type for optimal cost/performance. Additional capabilities include URL web-scraping for instant article summaries and a direct Gmail integration to email critical notes to the user securely.",
    image: "https://i.ibb.co/VYCgb204/3rd-Pi-c.png"
  },
  {
    id: 4,
    title: "Auto-SEO YouTube & Instagram Publishing Pipeline",
    tags: ["Video SEO", "Auto-Publish", "Webhooks"],
    brief: "A dual-path automation that formats, tags, and publishes video content with zero manual intervention.",
    fullDetails: "Operates two independent data streams. Path 1 catches YouTube Shorts, sending the raw video to Gemini AI to extract context, generate a 4-word SEO title, and write a targeted description, before pushing via the YouTube API. Path 2 handles Instagram Reels and images, utilizing ImgBB for image hosting and base64 conversion. It generates 5-10 word engaging hooks and 10 highly-researched SEO hashtags, validates media types, and publishes directly to the creator's Instagram Grid.",
    image: "https://i.ibb.co/xKWmtgmb/4th-Pic.png"
  },
  {
    id: 5,
    title: "AI Study Assistant & EdTech Platform",
    tags: ["EdTech", "Document Processing", "Socratic AI"],
    brief: "An educational platform that ingests PDFs, audio, and video to generate interactive study material.",
    fullDetails: "Designed with four intelligent routing modes. 'Normal Mode' generates summaries, flashcards, and MCQs. 'Test Mode' acts as a strict examiner, withholding answers to enforce knowledge recall. 'Deep Study Mode' acts as a Socratic mentor, refusing to give direct answers and instead asking follow-up questions to develop critical thinking. 'Chat Mode' handles open-ended life/career advice. The system supports full PDF export of all generated materials and integrates WhatsApp feedback loops.",
    image: "https://i.ibb.co/ZzL5Zq3j/5th-Pic.png"
  },
  {
    id: 6,
    title: "Automated Weekly Performance Analytics",
    tags: ["Data Aggregation", "Analytics", "WhatsApp API"],
    brief: "A scheduled CRON-job system that scrapes, analyzes, and reports social media metrics.",
    fullDetails: "Triggered every Monday at 9:00 AM. The system pulls data arrays from Instagram, YouTube, and Facebook APIs, gathering views, reach, comments, and engagement rates for the last 7 days. AI evaluates the data sets to identify top-performing content themes and generates 3 actionable strategy recommendations. The final output is parsed into a clean, highly readable Markdown format and delivered directly to the manager's WhatsApp as a weekly briefing.",
    image: "https://i.ibb.co/MkgjJGgD/6th-Pic.png"
  },
  {
    id: 7,
    title: "Material Request & Inventory Web Scraper",
    tags: ["Web Scraping", "Inventory", "Security Tokens"],
    brief: "An approval workflow with real-time stock validation and secure manager tokens.",
    fullDetails: "Detects new inventory requests via Google Sheets. Generates secure, single-use cryptographic tokens and emails them to management as Approve/Reject links. If approved, the system triggers a web scraper to hit supplier product pages, verifying real-time pricing and stock status. If the item is in stock, it updates the financial ledger and notifies the requester. If out of stock, it alerts management to find an alternative.",
    image: "https://i.ibb.co/DffSJqn5/7th-Pic.png"
  },
  {
    id: 8,
    title: "Multi-Tenant GoHighLevel CRM Sync",
    tags: ["GoHighLevel", "Webhooks", "Deduplication"],
    brief: "An enterprise webhook router that deduplicates and syncs contacts across multiple business tenants.",
    fullDetails: "Built for SaaS/Agency scalability. Receives incoming webhooks, validates security secrets, and looks up the correct tenant configuration via a Google Sheets registry. It features an advanced deduplication engine that halts redundant processing within a 7-day window. It executes smart contact matching (searching the CRM by email first, then phone fallback) before creating or updating the GoHighLevel record. Maintains comprehensive success/error logs for strict audit trails.",
    image: "https://i.ibb.co/jvYxmyLW/8th-PIc.png"
  }
];

// --- Components ---

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-12 relative overflow-hidden bg-black text-white">
      {/* Background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div 
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={textVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="text-sm font-medium tracking-wider text-gray-300 uppercase">Muhammad Hamza</span>
        </motion.div>
        
        <motion.h1 
          variants={textVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
        >
          Automating the<br />Impossible.
        </motion.h1>
        
        <motion.p 
          variants={textVariants}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I build enterprise-grade AI agents and multi-platform automation systems that run your business while you sleep.
        </motion.p>
        
        <motion.div 
          variants={textVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('architectures')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 w-full sm:w-auto bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            View My Architectures
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 w-full sm:w-auto bg-transparent text-white font-semibold rounded-lg border border-white/20 hover:bg-white/5 transition-colors"
          >
            Hire Me
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-950 text-white relative">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Student by Day.<br/>
              <span className="text-gray-400">Systems Architect by Night.</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I am a 19-year-old Computer Science student and self-taught automation developer. While most developers focus on building simple landing pages, I specialize in architecting complex, invisible systems that save businesses thousands of hours.
              </p>
              <p>
                I bridge the gap between heavy APIs, advanced AI models (OpenAI, Gemini), and core business logic. Whether it's a multi-tenant CRM sync, a web-scraping inventory bot, or a fully autonomous AI sales agent on WhatsApp and Telegram, I don't just write code—I build digital employees.
              </p>
              <p className="font-mono text-sm text-gray-400 bg-white/5 p-4 rounded-lg border border-white/10">
                <span className="text-white font-semibold">Tech Stack:</span> n8n, Make.com, Python, Next.js, Flutter, Advanced Prompt Engineering.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden relative border border-white/10 bg-zinc-900 group">
            {/* Minimalist decorative tech graphic */}
            <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-700">
               <motion.div 
                 animate={{ rotate: 360 }} 
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="w-48 h-48 border border-white/20 rounded-full border-dashed flex items-center justify-center"
               >
                 <motion.div 
                   animate={{ rotate: -360 }} 
                   transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                   className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center"
                 >
                   <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-md border border-white/20" />
                 </motion.div>
               </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, onClick }: { project: typeof projects[0], onClick: () => void }) {
  return (
    <motion.div 
      layoutId={`project-container-${project.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group cursor-pointer bg-zinc-900 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-colors flex flex-col h-full"
    >
      <div className="relative h-60 overflow-hidden bg-zinc-800">
        <motion.img 
          layoutId={`project-image-${project.id}`}
          src={project.image} 
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80" />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <motion.h3 layoutId={`project-title-${project.id}`} className="text-xl font-bold text-white mb-3">
          {project.title}
        </motion.h3>
        
        <p className="text-gray-400 text-sm mb-6 flex-1">
          {project.brief}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-mono px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Architectures() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <section id="architectures" className="py-24 px-6 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Core Architectures</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A selection of production-ready systems automating across social, CRM, support, and analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />
            
            <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 z-50 pointer-events-none">
              <motion.div 
                layoutId={`project-container-${selectedProject.id}`}
                className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col pointer-events-auto"
              >
                <div className="relative h-64 sm:h-80 shrink-0">
                  <motion.img 
                    layoutId={`project-image-${selectedProject.id}`}
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                  
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-6 sm:p-10 overflow-y-auto">
                  <motion.h3 
                    layoutId={`project-title-${selectedProject.id}`} 
                    className="text-2xl sm:text-3xl font-bold text-white mb-4"
                  >
                    {selectedProject.title}
                  </motion.h3>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 pb-2 border-b border-white/10">The Overview</h4>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {selectedProject.brief}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 pb-2 border-b border-white/10">Architecture Breakdown</h4>
                      <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                        {selectedProject.fullDetails}
                      </p>
                    </div>

                    <div className="pt-8 mt-4 border-t border-white/10 flex justify-end">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProject(null)}
                        className="px-6 py-3 bg-[#ccff00] text-black font-bold rounded hover:bg-[#bce600] transition-colors shadow-[0_0_20px_rgba(204,255,0,0.15)] flex justify-center items-center"
                      >
                        Close Architecture
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="py-24 px-6 bg-zinc-950 text-white relative border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Let's Build Something.</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            Ready to replace manual workflows with autonomous systems? Get in touch to discuss your architecture.
          </p>
          
          <div className="flex justify-center gap-4 sm:gap-6 mb-16 flex-wrap">
            <motion.a 
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:muhammad.hamza.noor0@gmail.com"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 hover:border-white/30 hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] transition-all group"
            >
              <Mail className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="font-semibold text-white">Email Me</span>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/hamza19-2006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-700 border border-white/10 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all group"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
              <span className="font-semibold text-white">GitHub</span>
            </motion.a>
          </div>
        </motion.div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Muhammad Hamza. All rights reserved.
          </p>
        </div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-8 right-8 p-4 rounded-full bg-white border border-transparent hover:bg-gray-200 text-black shadow-lg transition-colors"
        aria-label="Back to Top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white/30 selection:text-white">
      <Hero />
      <About />
      <Architectures />
      <Contact />
    </div>
  );
}
