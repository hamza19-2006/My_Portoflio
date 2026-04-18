import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Mail, Github, ExternalLink, X, Globe, Cpu, Layout, Code2, Sparkles, Linkedin } from "lucide-react";

// --- Data ---
const webDeployments = [
  {
    id: "web-1",
    title: "Professional Dental Zone & Aesta Aesthetics",
    image: "https://i.ibb.co/ZpFwQ57X/Pdz-Clinic.png",
    link: "https://dental.clinic.hamza-systems.tech/",
    category: "Health & Aesthetics",
    valueStatement: "Integrated Dental & Skincare Patient Acquisition System.",
    explanation: "A luxury-themed, mobile-responsive landing page designed with a split UI to manage two distinct departments. It features an AI Patient Concierge custom-trained to triage inquiries and explain complex procedures. Integrated with WhatsApp Business API for direct-to-specialist routing and one-tap booking, transforming the premium reputation of the clinic into a high-converting digital platform."
  },
  {
    id: "web-2",
    title: "Dr. Rahat’s Gynae & Obs Clinic",
    image: "https://i.ibb.co/VpLR3TNQ/Dr-Rahat.png",
    link: "https://dental.hamza-systems.tech/",
    category: "Specialist Health",
    valueStatement: "Empathetic Digital Front-Door for Maternal Health.",
    explanation: "Focused on a warm, empathetic UI/UX designed for the sensitive nature of Gynaecology and Obstetrics. Utilizes a Symptom-Aware AI Assistant acting as an intelligent receptionist with strict guardrails to prioritize patient safety and physical consultations. Serves as a centralized digital hub managing doctor information across three major Lahore hospitals."
  },

  {
    id: "web-3",
    title: "AI Study Assistant",
    image: "https://i.ibb.co/MDsJzvCt/Screenshot-2026-04-17-185314.png",
    link: "https://ai-study-assitant.vercel.app/",
    category: "EdTech & Full-Stack SaaS",
    valueStatement: "A full-stack pedagogical platform transforming static materials into interactive modules.",
    explanation: "Built with a Next.js frontend and integrated cloud database architecture to store user chat histories and documents. Implements secure User Authentication and an intelligent File Processing Engine that ingests PDFs, Images, and Audio. Features four distinct AI logic modes (including Socratic Deep Study) powered by Gemini 1.5 Pro for long-context analysis."
  }
];

const automationArchitectures = [
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

// --- Sub-components ---

function SectionHeader({ title, subheadline, icon: Icon }: { title: string, subheadline: string, icon?: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon className="w-6 h-6 text-blue-400" />}
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">{title}</h2>
      </div>
      <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
        {subheadline}
      </p>
    </motion.div>
  );
}

interface WebDeploymentCardProps {
  project: typeof webDeployments[0];
}

const WebDeploymentCard: React.FC<WebDeploymentCardProps> = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-[10px] uppercase font-bold tracking-widest text-blue-400 backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p className="text-blue-400/80 text-sm font-medium mb-4 italic">"{project.valueStatement}"</p>
        <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
          {project.explanation}
        </p>
        
        <motion.a 
          whileHover={{ x: 5 }}
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase pb-1 border-b-2 border-blue-500/50 hover:border-blue-500 transition-all"
        >
          Live Site <ExternalLink size={14} />
        </motion.a>
      </div>
    </motion.div>
  );
}

// --- Main App Sections ---

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div 
        className="max-w-5xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">Muhammad Hamza</span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9] text-white"
        >
          Systems Architect <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">& Full-Stack Dev</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          I build autonomous AI systems and high-conversion web platforms that scale businesses while you sleep.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('web-deployments')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 w-full sm:w-auto bg-white text-black font-black text-sm uppercase tracking-widest rounded-xl hover:bg-gray-100 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)]"
          >
            View Web Deployments
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('automations')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 w-full sm:w-auto bg-transparent text-white font-black text-sm uppercase tracking-widest rounded-xl border border-white/20 transition-all backdrop-blur-sm"
          >
            View Automation Logic
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 md:py-32 px-6 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tight">
              Student by Day. <br/>
              <span className="text-blue-500">Systems Architect by Night.</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed font-light">
              <p>
                I am a 19-year-old Computer Science student and self-taught developer. While most developers focus on building simple landing pages, I specialize in architecting complex, invisible systems that save businesses thousands of hours, alongside high-converting full-stack web applications.
              </p>
              <p>
                I bridge the gap between heavy APIs, advanced AI models (OpenAI, Gemini), and core business logic. My tech stack includes <span className="text-white font-medium">Next.js, n8n, Make.com, Python</span>, and <span className="text-white font-medium">Advanced Prompt Engineering</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WebDeployments() {
  return (
    <section id="web-deployments" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Live Client Deployments & SaaS" 
          subheadline="Transforming businesses through modern, high-conversion web platforms and full-stack applications."
          icon={Globe}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {webDeployments.map((project) => (
            <WebDeploymentCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface AutomationCardProps {
  project: typeof automationArchitectures[0];
  onClick: () => void;
}

const AutomationCard: React.FC<AutomationCardProps> = ({ project, onClick }) => {
  return (
    <motion.div 
      layoutId={`automation-card-${project.id}`}
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={onClick}
      className="group cursor-pointer bg-zinc-900/40 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all shadow-xl"
    >
      <div className="aspect-[4/3] overflow-hidden relative bg-zinc-800">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
           <Layout className="text-white w-10 h-10" />
        </div>
        <div className="absolute top-4 left-4">
          <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white text-black rounded">
            Automation
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p className="text-gray-500 text-xs line-clamp-2">{project.brief}</p>
      </div>
    </motion.div>
  );
}

function Automations() {
  const [selected, setSelected] = useState<typeof automationArchitectures[0] | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
  }, [selected]);

  return (
    <section id="automations" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Invisible Employees & Automation Logic" 
          subheadline="Complex AI automation workflows handling business logic, lead qualification, and cross-platform synchronization."
          icon={Code2}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {automationArchitectures.map((project) => (
            <AutomationCard key={project.id} project={project} onClick={() => setSelected(project)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[100]"
            />
            <div className="fixed inset-0 flex items-center justify-center p-4 z-[101] pointer-events-none">
              <motion.div 
                layoutId={`automation-card-${selected.id}`}
                className="bg-zinc-950 border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto shadow-2xl"
              >
                <div className="relative h-64 shrink-0">
                  <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                  <button onClick={() => setSelected(null)} className="absolute top-6 right-6 p-2 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-colors">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-8 sm:p-12 overflow-y-auto">
                  <div className="mb-8">
                     <h3 className="text-3xl font-black text-white mb-4 uppercase leading-tight">{selected.title}</h3>
                     <div className="flex flex-wrap gap-2">
                        {selected.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-white/10 text-gray-500 rounded-full">
                            {tag}
                          </span>
                        ))}
                     </div>
                  </div>
                  
                  <div className="space-y-12">
                    <div className="pb-12 border-b border-white/5">
                      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-6">// The Mission</h4>
                      <p className="text-xl text-gray-300 font-light leading-relaxed">{selected.brief}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-6">// Architecture Details</h4>
                      <p className="text-gray-400 leading-relaxed font-light whitespace-pre-line text-lg">
                        {selected.fullDetails}
                      </p>
                    </div>

                    <div className="pt-8 flex justify-end">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelected(null)}
                        className="px-8 py-4 bg-[#ccff00] text-black font-black uppercase text-xs tracking-[0.2em] rounded-lg shadow-[0_0_20px_rgba(204,255,0,0.2)]"
                      >
                        Close Detail
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
    <footer id="contact" className="py-32 px-6 bg-zinc-950 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">Let's Build <br/> Something.</h2>
          <p className="text-gray-500 text-lg mb-16 max-w-xl mx-auto font-light">
            Ready to replace manual workflows with autonomous systems? Get in touch to discuss your next project.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-20">
            <motion.a 
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:muhammad.hamza.noor0@gmail.com"
              className="flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-br from-[#0c1221] to-[#1a1025] border border-white/10 text-white shadow-[0_0_40px_rgba(37,99,235,0.1)] hover:border-blue-500/30 transition-all group"
            >
              <Mail className="w-7 h-7 text-blue-500 group-hover:text-blue-400 transition-colors" />
              <span className="text-xl font-bold">Email Me</span>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/hamza19-2006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-10 py-5 rounded-full bg-[#242429] border border-white/10 text-white hover:bg-[#2d2d33] transition-all shadow-xl"
            >
              <Github className="w-7 h-7" />
              <span className="text-xl font-bold">GitHub</span>
            </motion.a>
          </div>
        </motion.div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Muhammad Hamza — Systems Architect & Dev
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500/30 selection:text-white">
      <Hero />
      <About />
      <WebDeployments />
      <Automations />
      <Contact />
    </div>
  );
}
