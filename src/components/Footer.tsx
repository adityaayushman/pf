import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-black text-white tracking-tight">Aditya Ayushman Sahoo.</h2>
            <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
              AI &amp; Machine Learning Engineer specializing in Computer Vision, Deep Learning and Cloud AI.
            </p>
            <p className="text-gray-500 font-medium text-sm">Chennai, India</p>
          </div>

          {/* Center Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white tracking-wide uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#ff6b35] transition-colors font-medium">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-[#ff6b35] transition-colors font-medium">Projects</a>
              </li>
              <li>
                <a href="#research" className="text-gray-400 hover:text-[#ff6b35] transition-colors font-medium">Research</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#ff6b35] transition-colors font-medium">Contact</a>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white tracking-wide uppercase">Connect</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="mailto:adityaasahoo@gmail.com" className="text-gray-400 hover:text-[#ff6b35] transition-colors font-medium">Email</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/aditya-ayushman-sahoo-243b81287/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff6b35] transition-colors font-medium">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/adityaayushman" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff6b35] transition-colors font-medium">GitHub</a>
              </li>
              <li>
                <a href="https://pf-eight-xi.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff6b35] transition-colors font-medium">Portfolio</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm font-medium">
          <p>© 2026 Aditya Ayushman Sahoo.</p>
          <p>Designed &amp; developed with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
