import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green text-white/80 pt-20 pb-10 px-6 md:px-12 border-t border-brand-gold/20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

        {/* Brand Col */}
        <div className="md:col-span-1">
          <Link to="/" className="inline-block mb-6">
            <span className="font-heading text-3xl tracking-wider text-brand-gold block">ZEBEDEE</span>
            <span className="block text-xs tracking-[0.2em] font-sans uppercase font-medium mt-1 text-white/60">Realty</span>
          </Link>
          <p className="text-sm leading-relaxed mb-2 font-light text-white/50 italic">
            Execution arm of
          </p>
          <p className="text-sm leading-relaxed mb-6 font-heading text-brand-gold/90">
            Zebedee Ventures
          </p>
          <p className="text-xs leading-relaxed font-light text-white/40 max-w-xs">
            A North Bangalore-based integrated real estate and hospitality platform focused on master-planned communities and boutique destination development.
          </p>
        </div>

        {/* Navigation Col */}
        <div>
          <h4 className="font-heading text-white text-sm tracking-widest uppercase mb-6">Navigate</h4>
          <ul className="space-y-3 text-sm font-light">
            {['Projects', 'Services', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-brand-gold transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Col */}
        <div>
          <h4 className="font-heading text-white text-sm tracking-widest uppercase mb-6">Projects</h4>
          <ul className="space-y-3 text-sm font-light">
            <li className="text-white/50">Serene Canterbury</li>
            <li className="text-white/30 text-xs mt-1 pl-3 border-l border-brand-gold/30">Phase 1: Clubhouse — Under Execution</li>
            <li className="text-white/30 text-xs pl-3 border-l border-brand-gold/30">Phase 2: 100 Senior Living Villas — Commencing Soon</li>
          </ul>
        </div>

        {/* Contact Col */}
        <div>
          <h4 className="font-heading text-white text-sm tracking-widest uppercase mb-6">Headquarters</h4>
          <address className="not-italic text-sm font-light text-white/50 leading-loose mb-6">
            EL-Shaddai, Basement Floor<br />
            No. 13/2, 2nd Cross<br />
            Beside Assisi Church<br />
            Hennur Main Road, St. Thomas Town<br />
            Bengaluru – 560084
          </address>
          <a
            href="mailto:info@zebedeerealty.com"
            className="text-sm text-white/50 hover:text-brand-gold transition-colors duration-200 font-light"
          >
            info@zebedeerealty.com
          </a>
        </div>
      </div>

      <div className="container mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs font-light tracking-wide text-white/30">
        <p>&copy; {currentYear} Zebedee Realty. An execution arm of Zebedee Ventures. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
