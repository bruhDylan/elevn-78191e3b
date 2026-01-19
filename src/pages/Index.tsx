import { ArrowRight, Shield, Package, BarChart3, GraduationCap } from "lucide-react";
import Dither from "@/components/Dither";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col">
        {/* Dithered Background */}
        <div className="absolute inset-0 z-0">
          <Dither
            waveSpeed={0.03}
            waveFrequency={2.5}
            waveAmplitude={0.35}
            waveColor={[0.4, 0.15, 0.15]}
            colorNum={4}
            pixelSize={3}
            enableMouseInteraction={true}
            mouseRadius={0.8}
          />
        </div>

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/40 via-transparent to-background/90" />

        {/* Navigation */}
        <header className="fixed top-4 left-4 right-4 z-50 bg-black/30 backdrop-blur-md shadow-xl border border-accent/20 rounded-xl">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
            {/* Logo */}
            <div className="font-display text-xl font-bold tracking-tight text-accent">
              ELEVN
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#work" className="nav-link text-sm hover:text-accent transition-colors">Services</a>
              <a href="#about" className="nav-link text-sm hover:text-accent transition-colors">About</a>
              <a href="#contact" className="nav-link text-sm hover:text-accent transition-colors">Contact</a>
            </div>

            {/* Call-to-Action Button */}
            <a
              href="https://calendly.com/dylan-elevn/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground py-2 px-4 text-xs font-semibold rounded hover:bg-accent/90 transition-colors"
            >
              Book an Intro
            </a>
          </div>
        </header>

        {/* Add padding to top of your page content to prevent overlap */}
        <div className="pt-28"></div>



        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 pb-20">
          <div 
            className="opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <p className="hero-subtitle mb-4 text-accent">Audit • Design • Implement</p>
          </div>
          
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter max-w-4xl opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            AI Transformation
            <br />
            <span className="text-accent">Measurable ROI</span>
          </h1>
          
          <div 
            className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <a href="#about" className="cta-primary bg-accent text-accent-foreground hover:bg-accent/90">
              About Us
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://calendly.com/dylan-elevn/30min"
              className="cta-outline border-accent/50 hover:border-accent"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section id="work" className="py-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="border border-accent/30 rounded-sm overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {[
                { 
                  icon: Shield, 
                  title: "AI Audit", 
                  description: "Define AI roadmap and company needs." 
                },
                { 
                  icon: Package, 
                  title: "Development", 
                  description: "Build products based on your needs." 
                },
                { 
                  icon: BarChart3, 
                  title: "Management", 
                  description: "Track costs and ROI metrics." 
                },
                { 
                  icon: GraduationCap, 
                  title: "Training", 
                  description: "30-day employee adaptation program." 
                },
              ].map((project, index) => (
                <div
                  key={project.title}
                  className={`p-6 flex flex-col border-border ${index < 3 ? 'lg:border-r' : ''} ${index % 2 === 1 ? 'border-l lg:border-l' : ''} ${index >= 2 ? 'border-t lg:border-t-0' : ''}`}
                >
                  <project.icon className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="text-sm font-display font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Barriers Section */}
      <section className="py-16 px-6 md:px-12 bg-muted/30 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-xs tracking-widest text-accent mb-3 uppercase">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Hidden Barriers of <span className="text-accent">AI Success</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            AI transformation comes with endless questions about ROI, efficiency and growth.
          </p>
        </div>

        {/* Scrolling rows */}
        <div className="space-y-3">
          {/* Row 1 - scrolls left */}
          <div className="relative">
            <div className="flex gap-3 animate-scroll-left">
              {[
                { type: "question", text: "Is my team ready?" },
                { type: "empty" },
                { type: "question", text: "How are products budgeted?" },
                { type: "question", text: "Which products suit my industry?" },
                { type: "empty" },
                { type: "question", text: "Is my team ready?" },
                { type: "empty" },
                { type: "question", text: "How are products budgeted?" },
                { type: "question", text: "Which products suit my industry?" },
                { type: "empty" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 px-4 py-2 rounded-sm border ${
                    item.type === "question"
                      ? "border-accent/40 bg-background"
                      : "border-border/50 bg-muted/50"
                  } ${item.type === "empty" ? "w-32" : ""}`}
                >
                  {item.type === "question" && (
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <span className="text-accent font-bold text-sm">?</span>
                      <span className="text-xs text-foreground">{item.text}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - scrolls right */}
          <div className="relative">
            <div className="flex gap-3 animate-scroll-right">
              {[
                { type: "empty" },
                { type: "question", text: "How is data regulated?" },
                { type: "empty" },
                { type: "question", text: "How to evaluate ROI?" },
                { type: "question", text: "Are products aligned with needs?" },
                { type: "empty" },
                { type: "empty" },
                { type: "question", text: "How is data regulated?" },
                { type: "empty" },
                { type: "question", text: "How to evaluate ROI?" },
                { type: "question", text: "Are products aligned with needs?" },
                { type: "empty" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 px-4 py-2 rounded-sm border ${
                    item.type === "question"
                      ? "border-accent/40 bg-background"
                      : "border-border/50 bg-muted/50"
                  } ${item.type === "empty" ? "w-32" : ""}`}
                >
                  {item.type === "question" && (
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <span className="text-accent font-bold text-sm">?</span>
                      <span className="text-xs text-foreground">{item.text}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - scrolls left */}
          <div className="relative">
            <div className="flex gap-3 animate-scroll-left">
              {[
                { type: "question", text: "Where to start?" },
                { type: "empty" },
                { type: "question", text: "How is data security ensured?" },
                { type: "empty" },
                { type: "empty" },
                { type: "question", text: "Where to start?" },
                { type: "empty" },
                { type: "question", text: "How is data security ensured?" },
                { type: "empty" },
                { type: "empty" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 px-4 py-2 rounded-sm border ${
                    item.type === "question"
                      ? "border-accent/40 bg-background"
                      : "border-border/50 bg-muted/50"
                  } ${item.type === "empty" ? "w-32" : ""}`}
                >
                  {item.type === "question" && (
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <span className="text-accent font-bold text-sm">?</span>
                      <span className="text-xs text-foreground">{item.text}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <div>
              <p className="text-xs tracking-widest text-accent mb-3 uppercase font-mono">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 leading-tight">
                We are <span className="text-accent">Elevn</span>
              </h2>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Elevn is a leading AI transformation consultancy helping businesses unlock potential through intelligent automation and data-driven strategies.
              </p>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                With a strong background from previously working at an automation agency, we understand what businesses truly need when it comes to AI audits, automation, and implementation.
              </p>
              <div className="flex gap-6">
                <div>
                  <p className="text-2xl md:text-3xl font-display font-bold text-accent">35+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Projects</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-display font-bold text-accent">28</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Day Audit</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-display font-bold text-accent">786+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Hours Saved</p>
                </div>
              </div>
            </div>
            
            {/* Placeholder Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center overflow-hidden">
                {/* Image fills the entire box */}
                <img 
                  src="/Gemini_Generated_Image_eaymf2eaymf2eaym.png" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "top 30% left 60%" }}
                />
                {/* Optional overlay text */}
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/40 -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-12 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-sm bg-accent"
            style={{
              clipPath: 'polygon(0 0, 100% 6%, 100% 100%, 0 100%)'
            }}
          >
            <div className="px-8 md:px-12 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-lg">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-accent-foreground mb-4 leading-tight">
                  Start Your Transformation with our 28-Day AI Audit!
                </h2>
                <p className="text-accent-foreground/80 text-sm md:text-base mb-6">
                  An AI review that identifies growth opportunities and shows you a clear path to using AI effectively.
                </p>
                <a
                  href="https://calendly.com/dylan-elevn/30min"
                  className="bg-accent-foreground text-accent px-6 py-3 font-display font-semibold hover:bg-accent-foreground/90 transition-colors text-sm inline-block"
                >
                  Book an Intro
                </a>

              </div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-accent-foreground/20 tracking-tight">
                elevn
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 md:px-12 border-t border-accent/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © 2025 <span className="text-accent">Elevn</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="nav-link text-xs hover:text-accent">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/dylan-thomas-pughhh/" target="_blank" rel="noopener noreferrer" className="nav-link text-xs hover:text-accent">
              LinkedIn
            </a>
            <a href="https://www.linkedin.com/in/kundani-phupheli/" target="_blank" rel="noopener noreferrer" className="nav-link text-xs hover:text-accent">
              LinkedIn 2
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
