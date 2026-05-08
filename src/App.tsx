/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { 
  Shield, 
  Terminal, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight,
  ExternalLink,
  Target,
  Cpu,
  Monitor,
  Trophy,
  GraduationCap,
  Phone,
  ArrowDown
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  SKILLS, 
  EXPERIENCE, 
  EDUCATION, 
  CERTIFICATIONS, 
  PROJECTS, 
  ACHIEVEMENTS 
} from './constants';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useSpring(cursorX, { damping: 20, stiffness: 200 });
  const trailY = useSpring(cursorY, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (['A', 'BUTTON', 'SVG'].includes(target.tagName) || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div 
        className="custom-cursor hidden md:flex" 
        style={{ 
          x: cursorX, 
          y: cursorY,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
        }} 
      >
        <div className="cursor-dot" />
      </motion.div>
      <motion.div 
        className="cursor-trail hidden md:block" 
        style={{ x: trailX, y: trailY }} 
      />
    </>
  );
};

const BentoCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8 }}
      className={`bento-card group p-8 ${className}`}
    >
      <motion.div
        className="bento-glow"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(0, 240, 255, 0.1), transparent 40%)`
          ),
          opacity: 1
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

const SectionTitle = ({ children, icon: Icon, colorClass = "text-brand-cyan" }: { children: React.ReactNode, icon: any, colorClass?: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-6 mb-16"
  >
    <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${colorClass}`}>
      <Icon size={28} strokeWidth={1.5} />
    </div>
    <div>
      <h2 className="text-sm font-black tracking-[0.4em] text-slate-500 uppercase mb-1">SECTION_MANIFEST</h2>
      <h3 className="text-4xl font-black tracking-tighter text-white uppercase">{children}</h3>
    </div>
  </motion.div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const groupedSkills = React.useMemo(() => {
    type Skill = typeof SKILLS[number];
    const grouped = {} as Record<string, Skill[]>;
    SKILLS.forEach(skill => {
      if (!grouped[skill.category]) grouped[skill.category] = [];
      grouped[skill.category].push(skill);
    });
    return grouped;
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen relative text-slate-300">
      <CustomCursor />
      <div className="noise-overlay" />
      <div className="cyber-grid" />
      
      {/* Immersive Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-brand-cyan/20 rounded-full blur-[120px] animate-slow-pulse"
          style={{ x: useTransform(mouseX, [0, 1000], [0, 50]), y: useTransform(mouseY, [0, 1000], [0, 50]) }}
        />
        <motion.div 
          className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] bg-brand-violet/20 rounded-full blur-[120px] animate-slow-pulse"
          style={{ x: useTransform(mouseX, [0, 1000], [0, -50]), y: useTransform(mouseY, [0, 1000], [0, -50]) }}
        />
      </div>

      {/* Progress Line */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand-cyan z-[101] origin-left" style={{ scaleX }} />

      {/* Floating Island Navigation */}
      <nav className={`nav-island ${scrolled ? 'scrolled scale-95' : 'scale-100'}`}>
        <div className="nav-glass flex items-center gap-12">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 font-black text-xl tracking-tighter text-white"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-cyan flex items-center justify-center text-slate-900 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              <Shield size={16} />
            </div>
            <span>WA<span className="text-brand-cyan">.</span></span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-[11px] font-black tracking-[0.2em] text-slate-400">
            {['About', 'Experience', 'Projects', 'Achievements'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-cyan transition-colors uppercase">
                {item}
              </a>
            ))}
          </div>

          <a href={`mailto:${PERSONAL_INFO.email}`} className="px-5 py-2 bg-white text-slate-900 text-[11px] font-black rounded-full hover:bg-brand-cyan transition-colors">
            CONTACT
          </a>
        </div>
      </nav>

      {/* Hero: Editorial Style */}
      <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-6 z-10 pt-32">
        <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-[10px] font-black tracking-[0.3em] mb-12"
            >
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_10px_rgba(0,240,255,1)]" />
              SYSTEMS ARCHITECT & CYBERSECURITY OPERATIVE
            </motion.div>
            
            <div className="relative">
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-display text-7xl md:text-[11rem] text-white mb-6"
              >
                WISEMAN<br />
                <span className="text-gradient-cyan">AGANYA</span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light mb-12"
            >
              {PERSONAL_INFO.summary}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6"
            >
              <a href="#projects" className="group relative px-10 py-5 bg-brand-cyan text-slate-950 font-black rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.2)]">
                <span className="relative z-10 flex items-center gap-2">
                  INITIATE EXPLORATION <ChevronRight size={20} />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ type: "tween" }}
                />
              </a>
              <div className="flex gap-4">
                <a href={PERSONAL_INFO.linkedin} target="_blank" className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan hover:text-brand-cyan transition-all">
                  <Linkedin size={24} />
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan hover:text-brand-cyan transition-all">
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-brand-cyan/20 blur-[100px] animate-slow-pulse" />
              <div className="bento-card p-12 h-full flex items-center justify-center">
                 <div className="grid grid-cols-2 gap-8 text-slate-500">
                    <motion.div whileHover={{ scale: 1.1, color: "#fff" }} className="flex flex-col items-center gap-4 transition-colors">
                      <Shield size={48} strokeWidth={1} />
                      <span className="text-[10px] font-black tracking-widest">DEFEND</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, color: "#fff" }} className="flex flex-col items-center gap-4 transition-colors">
                      <Terminal size={48} strokeWidth={1} />
                      <span className="text-[10px] font-black tracking-widest">ENCODE</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, color: "#fff" }} className="flex flex-col items-center gap-4 transition-colors">
                      <Monitor size={48} strokeWidth={1} />
                      <span className="text-[10px] font-black tracking-widest">ANALYSE</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, color: "#fff" }} className="flex flex-col items-center gap-4 transition-colors">
                      <Cpu size={48} strokeWidth={1} />
                      <span className="text-[10px] font-black tracking-widest">OPTIMIZE</span>
                    </motion.div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-24 text-slate-600"
        >
          <ArrowDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* Skills: Interactive Grid */}
      <section className="py-40 px-6 max-w-7xl mx-auto relative z-10">
        <SectionTitle icon={Cpu}>SKILL_GRAPH</SectionTitle>
        <div className="space-y-32">
          {(Object.entries(groupedSkills) as [string, any[]][]).map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center gap-6 mb-12">
                <span className="text-[11px] font-black tracking-[0.5em] text-slate-600 uppercase">{category}</span>
                <div className="h-px flex-1 bg-white/5" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {items.map((skill: any, i: number) => (
                  <BentoCard key={i} className="flex flex-col items-center gap-6">
                    <div className="text-slate-600 group-hover:text-brand-cyan transition-colors">
                      <skill.icon size={40} strokeWidth={1} />
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-center">{skill.name}</span>
                  </BentoCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience: Sequential Timeline */}
      <section id="experience" className="py-40 px-6 max-w-5xl mx-auto relative z-10">
        <SectionTitle icon={Terminal} colorClass="text-brand-violet">WORK_CHRONOLOGY</SectionTitle>
        <div className="space-y-32 relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-brand-violet via-slate-800 to-transparent ml-8 md:ml-0 md:left-1/2" />
          
          {EXPERIENCE.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2 flex flex-col gap-4">
                <BentoCard className="p-10">
                  <div className="text-xs font-black text-brand-violet tracking-[0.3em] mb-4 uppercase">{exp.period}</div>
                  <h3 className="text-3xl font-black text-white uppercase mb-2">{exp.role}</h3>
                  <div className="text-lg font-bold text-slate-500 mb-8">{exp.company}</div>
                  <ul className="space-y-4">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex gap-4 text-slate-400 text-sm leading-relaxed">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-violet/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </BentoCard>
              </div>
              <div className="absolute left-8 top-12 w-6 h-6 bg-brand-violet rounded-full border-4 border-cyber-obsidian shadow-[0_0_20px_rgba(139,92,246,0.5)] md:left-1/2 md:-ml-3" />
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects: Featured Showcase */}
      <section id="projects" className="py-40 px-6 max-w-7xl mx-auto relative z-10">
        <SectionTitle icon={Target}>PROJECT_ARCHIVE</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <BentoCard 
              key={i}
              className="p-12 flex flex-col justify-between"
            >
              <div className="space-y-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-cyan border border-white/5">
                  <project.icon size={32} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase leading-none">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{project.description}</p>
              </div>
              
              <div className="flex items-center gap-8 pt-8 border-t border-white/5 mt-8">
                <a href={project.github} className="text-[10px] font-black tracking-[0.3em] text-slate-600 hover:text-white transition-colors">GITHUB</a>
                <a href={project.demo} className="text-[10px] font-black tracking-[0.3em] text-slate-600 hover:text-white transition-colors">LIVE_DEMO</a>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* Extra: Stats / Awards */}
      <section id="achievements" className="py-40 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bento-card p-16">
            <SectionTitle icon={Trophy} colorClass="text-yellow-500">RECOGNITION</SectionTitle>
            <div className="space-y-10">
              {ACHIEVEMENTS.map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-slate-900 transition-all">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white uppercase">{item.title}</h4>
                    <p className="text-xs font-bold text-slate-600 tracking-widest">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bento-card p-16">
            <SectionTitle icon={GraduationCap} colorClass="text-brand-violet">EDUCATION</SectionTitle>
            <div className="space-y-10">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-xl bg-brand-violet/10 flex items-center justify-center text-brand-violet group-hover:bg-brand-violet group-hover:text-slate-900 transition-all">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white uppercase">{edu.degree}</h4>
                    <p className="text-xs font-bold text-slate-600 tracking-widest">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer: Epic Sign-off */}
      <footer className="pt-64 pb-24 px-6 max-w-7xl mx-auto relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bento-card px-12 py-24 md:p-40 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-cyan/5 blur-[120px]" />
          <h2 className="text-display text-7xl md:text-[12rem] text-white opacity-5 mb-12 select-none">SECURE</h2>
          <div className="relative z-10">
            <h3 className="text-display text-6xl md:text-9xl text-white mb-12">BUILDING THE<br /><span className="text-gradient-cyan">FUTURE</span></h3>
            <div className="flex flex-wrap justify-center gap-12 mb-20">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-slate-900 transition-all duration-500">
                  <Mail strokeWidth={1} size={40} />
                </div>
                <span className="text-xs font-black tracking-[0.2em]">{PERSONAL_INFO.email}</span>
              </a>
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone strokeWidth={1} size={40} />
                </div>
                <span className="text-xs font-black tracking-[0.2em]">{PERSONAL_INFO.phone}</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-12 opacity-50">
              <a href={PERSONAL_INFO.linkedin} className="text-[10px] font-black tracking-[0.5em] hover:text-brand-cyan transition-colors">LINKEDIN</a>
              <a href="#" className="text-[10px] font-black tracking-[0.5em] hover:text-brand-cyan transition-colors">GITHUB</a>
              <a href={PERSONAL_INFO.resume} className="text-[10px] font-black tracking-[0.5em] hover:text-brand-cyan transition-colors">RESUME_PDF</a>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black tracking-[0.2em] text-slate-600">
          <div className="flex items-center gap-2">
            <Shield size={16} /> WA. <span className="opacity-50 uppercase">SECURED SYSTEMS</span>
          </div>
          <div>EST. 2026 / NAIROBI / GLOBAL</div>
          <div className="flex gap-4">
             <span className="text-brand-cyan">PRECISION ENGINEERED</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
