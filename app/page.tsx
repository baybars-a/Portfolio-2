'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, MessageCircle, LucideMail } from 'lucide-react';
import LogoAnimation from '../components/LogoAnimation';
import ProjectCard from '../components/ProjectCard';
import ExperienceItem from '../components/ExperienceItem';
import ContactForm from '../components/ContactForm';
import { PROJECTS, EXPERIENCES, PRIMARY_COLOR } from '../constants';


const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeSection, setActiveSection] = useState<string>('introduction');
  const [showNav, setShowNav] = useState<boolean>(false);
  const categories = ['All', 'Web', 'AI', 'Mobile', 'Design'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'work', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Check if we've reached the introduction section
      const introElement = document.getElementById('introduction');
      if (introElement) {
        const introTop = introElement.offsetTop;
        setShowNav(window.scrollY >= introTop - 100);
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#f4538a] selection:text-white">

      {/* Fixed Sidebar Navigation */}
      <nav className={`fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-8 transition-all duration-500 ${
        showNav ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 pointer-events-none'
      }`}>
        {[
          { id: 'introduction', label: 'INTRODUCTION' },
          { id: 'work', label: 'PORTFOLIO' },
          { id: 'contact', label: 'CONTACT' }
        ].map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-4"
          >
            <motion.div
              className={`h-px transition-all duration-300 relative overflow-hidden ${
                activeSection === section.id ? 'w-16' : 'w-8 group-hover:w-12'
              }`}
            >
              {activeSection === section.id ? (
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, #f4538a 50%, transparent 100%)'
                  }}
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ) : (
                <div
                  className="absolute inset-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(115, 115, 115, 0.7) 50%, transparent 100%)'
                  }}
                />
              )}
            </motion.div>
            <span className={`text-[10px] tracking-[0.3em] font-bold transition-colors duration-300 ${
              activeSection === section.id
                ? 'text-[#f4538a]'
                : 'text-neutral-600 group-hover:text-neutral-400'
            }`}>
              {section.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Hero Section with Scroll Animation */}
      <section id="hero" className="relative z-20">
        <LogoAnimation />
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="px-6 md:px-20 py-32 md:py-60 relative overflow-hidden z-10">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.5em] text-[#f4538a] mb-12 font-grotesk border-b border-neutral-900 pb-4 inline-block">Introduction</h2>
            <h3 className="text-3xl md:text-6xl font-black mb-16 leading-[1.1] tracking-tight">
              {/* Crafting digital experiences that <span className="text-neutral-500 italic">inspire</span> and <span className="text-[#f4538a]">empower</span> users across the globe. */}
            </h3>
            <p className="text-base md:text-xl lg:text-2xl text-black-400 font-cairo font-bold leading-relaxed mb-16 max-w-4xl text-right" dir="rtl">
              من الفكرة إلى التسليم تطبيقات، ويب، ذكاء اصطناعي، تقارير وشرح كامل للكود في
            </p>
            <p className="text-2xl md:text-4xl lg:text-5xl font-black text-[#f4538a] leading-[0.9] tracking-tighter uppercase italic text-center mb-16">
              Code Like a Girl
            </p>
<div className="text-sm md:text-base lg:text-lg text-neutral-400 font-light leading-relaxed mb-16 max-w-4xl" dir="rtl">
<ul className="space-y-4 list-disc list-inside text-white text-right">
    <li>خبرة أكثر من 8 سنوات في برمجة مشاريع التخرج</li>
    <li>التزام كامل بالوقت وجودة التنفيذ</li>
    <li>شرح الكود بفيديوهات أسبوعية</li>
    <li>مشاريع فردية وجماعية</li>
    <li>يحق للطالب طلب المساعدة، الشرح الإضافي، والاستفسار في أي مرحلة</li>
  </ul></div>
            <div className="text-sm md:text-base lg:text-lg text-neutral-400 font-light leading-relaxed mb-16 max-w-4xl" dir="rtl">
  <h3 className="text-2xl md:text-4xl lg:text-5xl font-cairo text-[#f4538a] leading-tight tracking-tighter uppercase font-bold text-right mb-8">آلية العمل</h3>
  <p className="text-white mb-6 text-right">
    نعتمد نظامًا يضمن استفادة الطالب العلمية والعملية من مشروعه، وليس مجرد تسليم الكود.
  </p>
  <ul className="space-y-4 list-disc list-inside font-cairo text-white text-right">
    <li>يتم تحويل المشروع إلى مراحل تعليمية مع تسليمات أسبوعية</li>
    <li>يحصل الطالب على فيديوهات شرح تفصيلية لكل جزء من المشروع</li>
    <li>يتم تزويد الطالب بالكود المصدري مع الشرح ليكون مرجعًا دائمًا</li>
    <li>جميع خطوات التنفيذ تتم بالتنسيق والمتابعة مع فريق العمل</li>
    <li>دعم ومتابعة حتى المناقشة</li>
  </ul>
</div><p className="text-sm md:text-base lg:text-lg text-neutral-400 font-cairo leading-relaxed mb-16 max-w-4xl text-white text-right">
             .تم اعتماد هذا النظام لضمان فهم الطالب للمشروع وتفادي أي ممارسات غير أكاديمية
            </p>
            <p className="text-base md:text-xl lg:text-2xl font-cairo text-[#f4538a] leading-[1.1] tracking-tighter uppercase font-normal text-right mb-8">
              ملاحظة : لا نقوم باستقبال الطلبات الخاصة بالواجبات القصيرة او الامتحانات او مقابلات العمل أو اي طلبات أخرى لا يستطيع من خلالها الطالب تطبيق المشروع و الاستفادة منه
            
            </p>
            <div className="mt-13 flex flex-wrap gap-4 md:gap-6 lg:gap-8 justify-center md:justify-start">
              {[
                { icon: <Instagram size={24} />, link: "https://www.instagram.com/codelikeagirlcs/", label: "Instagram" },
                { icon: <MessageCircle size={24} />, link: "https://wa.me/971507690917", label: "WhatsApp" },
                { icon: <LucideMail size={24} />, link: "mailto:codelikeagirlcs@gmail.com", label: "Email" },

              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 text-[#f4538a] hover:text-white transition-all duration-300 group"
                >
                  <span className="p-3 md:p-4 rounded-xl md:rounded-2xl border border-neutral-800 group-hover:border-[#f4538a] group-hover:bg-[#f4538a] group-hover:text-white transition-all">
                    {social.icon}
                  </span>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-grotesk font-bold">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Fixed Background Text: Lower Z-index and explicit opacity */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-white/5 select-none pointer-events-none -z-10 tracking-tighter opacity-[0.03]">
          CODE
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="px-6 md:px-20 py-32 md:py-48 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-xs uppercase tracking-[0.5em] text-[#f4538a] mb-8 font-grotesk">Portfolio</h2>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">Featured Projects</h3>
              {/* <p className="text-neutral-500 text-lg md:text-xl font-light leading-relaxed">
                A selection of engineering and design solutions.
              </p> */}
            </div>

            <div className="flex flex-wrap gap-2 p-1.5 bg-neutral-900/80 backdrop-blur-md rounded-2xl border border-neutral-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-xl text-[10px] uppercase tracking-widest font-bold transition-all ${
                    activeFilter === cat 
                    ? 'bg-[#f4538a] text-white' 
                    : 'text-neutral-500 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      {/* <section id="experience" className="px-6 md:px-20 py-32 md:py-48 border-y border-neutral-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <h2 className="text-xs uppercase tracking-[0.5em] text-[#f4538a] mb-8 font-grotesk">Career</h2>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Professional Journey</h3>
              <p className="text-neutral-500 text-base leading-relaxed mb-10">
                Building products and leading teams at the intersection of design and engineering.
              </p>
              <div className="w-16 h-1 bg-[#f4538a] rounded-full"></div>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <ExperienceItem key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-20 py-32 md:py-48 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-xs uppercase tracking-[0.5em] text-[#f4538a] mb-8 font-grotesk">Connect</h2>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">Get in<br/><span className="text-[#f4538a]">Touch</span></h3>
              <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-md">
                Reach out directly via WhatsApp or send me an email. I look forward to connecting with you!
              </p>
              <div className="space-y-6">
                <a href="https://wa.me/971507690917" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#f4538a] group-hover:bg-[#f4538a] group-hover:text-white transition-all">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">WhatsApp</p>
                    <span className="text-xl font-bold">Chat Now</span>
                  </div>
                </a>

                <a href="mailto:codelikeagirlcs@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#f4538a] group-hover:bg-[#f4538a] group-hover:text-white transition-all">
                    <LucideMail size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">Email</p>
                    <span className="text-xl font-bold">Send Email</span>
                  </div>
                </a>
              </div>
            </div>
            
            
            <div className="p-8 md:p-12 bg-neutral-950 border border-neutral-900 rounded-[2rem] shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-20 py-20 relative z-10">
        {/* Animated decorative line */}
        <div className="max-w-7xl mx-auto mb-12">
          <motion.div
            className="h-px w-full relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #f4538a 50%, transparent 100%)'
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scaleX: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-black tracking-tighter uppercase mb-2">
              Code Like A <span className="text-[#f4538a]">Girl</span>
            </div>
            <p className="text-neutral-600 text-[10px] uppercase tracking-[0.4em]">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-neutral-500">
            <a href="#introduction" className="hover:text-[#f4538a] transition-colors">Introduction</a>
            <a href="#work" className="hover:text-[#f4538a] transition-colors">Portfolio</a>
            {/* <a href="#experience" className="hover:text-[#f4538a] transition-colors">History</a> */}
            <a href="#contact" className="hover:text-[#f4538a] transition-colors">Contact</a>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center hover:border-[#f4538a] hover:text-[#f4538a] transition-all"
            title="Scroll to top"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;