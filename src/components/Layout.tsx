import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ScrollToTop from './ScrollToTop';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/10 ${
        scrolled || !isHome
          ? 'bg-primary/95 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-sm bg-accent flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-primary font-serif font-bold text-lg leading-none">Z</span>
          </div>
          <span className="text-white font-serif text-2xl tracking-widest font-medium">ZEBEDEE</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {['Expertise', 'Projects', 'Legacy', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-accent text-sm uppercase tracking-widest transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-white/80 py-20 border-t border-white/10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 space-y-6">
          <a href="/" className="flex items-center gap-2 inline-flex">
            <div className="w-8 h-8 rounded-sm bg-accent flex items-center justify-center">
              <span className="text-primary font-serif font-bold text-lg leading-none">Z</span>
            </div>
            <span className="text-white font-serif text-2xl tracking-widest font-medium">ZEBEDEE</span>
          </a>
          <p className="max-w-md text-white/60 font-light leading-relaxed">
            The execution arm of Zebedee Ventures. Delivering precision engineering and building family legacies through institutional-grade construction and development.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-white text-lg mb-6 tracking-wide">Services</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><a href="#expertise" className="hover:text-accent transition-colors">Civil Construction</a></li>
            <li><a href="#expertise" className="hover:text-accent transition-colors">JD Execution</a></li>
            <li><a href="#expertise" className="hover:text-accent transition-colors">High-spec Finishing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-white text-lg mb-6 tracking-wide">Contact</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><a href="mailto:info@zebedee.com" className="hover:text-accent transition-colors">info@zebedeerealty.com</a></li>
            <li>Bangalore, India</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-white/40">
        <p>© {new Date().getFullYear()} Zebedee Realty. All rights reserved.</p>
        <p>Execution Arm of Zebedee Ventures</p>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
