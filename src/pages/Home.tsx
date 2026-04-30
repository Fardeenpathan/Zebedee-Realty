import { motion } from 'framer-motion';
import { Phone, CheckCircle2, PlayCircle, ChevronRight } from 'lucide-react';

const PHONE = '+919876543210'; // placeholder — update with real number
const WA_LINK = `https://wa.me/${PHONE.replace('+', '')}`;
const TEL_LINK = `tel:${PHONE}`;

const fadeUp: import('framer-motion').Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section id="home" className="relative h-screen w-full flex items-end justify-start overflow-hidden bg-brand-green">

        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-green/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green/70 via-transparent to-brand-green/95 z-10" />
          <video
            autoPlay loop muted playsInline
            preload="none"
            className="w-full h-full object-cover"
            src="https://cdn.wegic.ai/assets/onepage/agent/videos/01KMMFPS0T58CYG3XMC83X9NHN.webm"
          />
        </div>

        {/* Hero content — bottom-left */}
        <div className="relative z-20 container mx-auto px-8 md:px-16 pb-24 md:pb-32">

          {/* Eyebrow */}
          <motion.div
            initial="hidden" animate="visible" custom={0.1} variants={fadeUp}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold font-sans">
              Built by Zebedee Realty · Operated by Columbia Pacific Communities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden" animate="visible" custom={0.25} variants={fadeUp}
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] max-w-4xl mb-6"
          >
            Your Home at<br />
            <span className="text-brand-gold">Serene Canterbury,</span><br />
            Built by Zebedee Realty.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial="hidden" animate="visible" custom={0.4} variants={fadeUp}
            className="text-white/70 font-light text-base md:text-lg max-w-2xl leading-relaxed mb-10"
          >
            Partnering with Columbia Pacific Communities — Manipal Group, to deliver 100 luxury senior living villas
            with the same precision and care found at Canterbury Castles.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden" animate="visible" custom={0.55} variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#serene-canterbury"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-green font-sans font-medium uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
            >
              View Serene Canterbury <ChevronRight size={16} />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white font-sans font-light uppercase tracking-widest text-sm hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
            >
              <Phone size={15} /> WhatsApp Us
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-16 z-20 flex items-center gap-3 text-white/30 text-xs tracking-widest uppercase font-sans">
          <span>Scroll</span>
          <span className="w-12 h-px bg-white/20" />
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          SERENE CANTERBURY — FLAGSHIP (first after hero)
      ═══════════════════════════════════════════════════════ */}
      <section id="serene-canterbury" className="py-28 bg-brand-green">
        <div className="container mx-auto px-8 md:px-16">

          {/* Section header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold font-sans">Flagship Project</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-2xl">
              Serene Canterbury
            </h2>
            <p className="text-white/50 font-sans font-light text-sm max-w-md leading-relaxed">
              The team behind Canterbury Castles is now executing Serene Canterbury — a 100-villa senior living community developed in partnership with Columbia Pacific Communities, Manipal Group.
            </p>
          </div>

          {/* Project Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 mb-16">
            {[
              { label: 'Total Villas', value: '100 Units' },
              { label: 'Configurations', value: '1BHK · 2BHK · 3BHK · 4BHK' },
              { label: 'Location', value: 'Devanahalli, North Bangalore' },
              { label: 'Operator', value: 'Columbia Pacific Communities' },
            ].map((stat, i) => (
              <div key={i} className="p-6 border-r border-b md:border-b-0 border-white/10 last:border-r-0">
                <p className="text-brand-gold text-xs uppercase tracking-widest font-sans mb-2">{stat.label}</p>
                <p className="text-white font-heading text-sm md:text-base">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* YouTube Video Placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { label: 'Project Overview — Serene Canterbury', sub: 'Coming soon · Add YouTube embed link' },
              { label: 'Canterbury Castles — Our Track Record', sub: 'Coming soon · Add YouTube embed link' },
            ].map((vid, i) => (
              <div
                key={i}
                className="relative aspect-video bg-white/5 border border-white/10 flex flex-col items-center justify-center group cursor-pointer hover:border-brand-gold/50 transition-colors duration-300"
              >
                <PlayCircle size={52} className="text-brand-gold/50 group-hover:text-brand-gold transition-colors duration-300 mb-4" strokeWidth={1} />
                <p className="text-white/70 font-heading text-base text-center px-6">{vid.label}</p>
                <p className="text-white/30 font-sans text-xs mt-2 text-center">{vid.sub}</p>
              </div>
            ))}
          </div>

          {/* Construction Timeline */}
          <div className="border border-white/10 p-8 md:p-12 mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-brand-gold" />
              <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold font-sans">Construction Timeline</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {/* Phase 1 */}
              <div className="pb-10 md:pb-0 md:pr-12">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-gold flex items-center justify-center">
                    <span className="font-heading text-brand-green text-lg font-bold">01</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-heading text-white text-xl">The Clubhouse</h3>
                      <span className="text-xs px-3 py-1 bg-brand-gold text-brand-green font-sans font-semibold uppercase tracking-widest">
                        Under Construction
                      </span>
                    </div>
                    <p className="text-white/50 font-sans font-light text-sm leading-relaxed mb-4">
                      The community anchor — a landmark clubhouse establishing the social and wellness infrastructure for Serene Canterbury. Currently under active construction.
                    </p>
                    <ul className="space-y-2">
                      {['Community Wellness Centre', 'Dining & Banquet Facilities', 'Landscaped Arrival Sequence', 'Managed Services Hub'].map((f) => (
                        <li key={f} className="flex items-center gap-2 text-white/40 text-xs font-sans">
                          <CheckCircle2 size={13} className="text-brand-gold flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="pt-10 md:pt-0 md:pl-12">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-10 h-10 border border-white/20 flex items-center justify-center">
                    <span className="font-heading text-white/50 text-lg">02</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-heading text-white text-xl">100 Senior Living Villas</h3>
                      <span className="text-xs px-3 py-1 border border-white/20 text-white/60 font-sans font-medium uppercase tracking-widest">
                        Commencing Soon
                      </span>
                    </div>
                    <p className="text-white/50 font-sans font-light text-sm leading-relaxed mb-4">
                      1BHK, 2BHK, 3BHK, and 4BHK configurations across 100 premium senior living villas. 12-month delivery cycle from commencement.
                    </p>
                    <ul className="space-y-2">
                      {['Accessibility-First Design', 'Wellness-Led Layouts', 'Premium Specifications', '12-Month Delivery Cycle'].map((f) => (
                        <li key={f} className="flex items-center gap-2 text-white/40 text-xs font-sans">
                          <CheckCircle2 size={13} className="text-white/20 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-green font-sans font-medium uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
            >
              <Phone size={15} /> Contact the Serene Canterbury Team
            </a>
            <a
              href={TEL_LINK}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-sans font-light uppercase tracking-widest text-sm hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
            >
              <Phone size={15} /> Call Us Directly
            </a>
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          WHO WE ARE
      ═══════════════════════════════════════════════════════ */}
      <section id="about" className="py-28 bg-[#fdfdf9]">
        <div className="container mx-auto px-8 md:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-brand-gold" />
                <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold font-sans">Who We Are</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-brand-green leading-tight mb-8">
                A Bengaluru Construction Firm<br />You Can Trust.
              </h2>
              <p className="text-brand-green/70 font-sans font-light text-base leading-relaxed mb-6">
                Zebedee Realty is a dedicated Bengaluru construction firm with a deep-rooted history in the North Bangalore corridor. Having successfully delivered bespoke homes at Canterbury Castles, we are now bringing our expertise in high-end residential execution to Serene Canterbury in partnership with Columbia Pacific Communities.
              </p>
              <p className="text-brand-green/70 font-sans font-light text-base leading-relaxed mb-10">
                We focus on one thing: <span className="font-medium text-brand-green">building homes that last.</span>
              </p>

              <div className="flex flex-col gap-4">
                {[
                  'Successfully delivered Canterbury Castles, North Bangalore',
                  'Now executing Serene Canterbury for Columbia Pacific Communities',
                  'Specialist in senior living and premium residential construction',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="text-brand-green/70 font-sans font-light text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — image placeholder */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0.15}
              variants={fadeUp}
              className="relative aspect-[4/3] bg-brand-green/5 border border-brand-green/10 overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                alt="Canterbury Castles — completed project by Zebedee Realty"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-green/80 p-4">
                <p className="text-brand-gold text-xs uppercase tracking-widest font-sans">Canterbury Castles · Completed Project · North Bangalore</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          THE NEIGHBOURHOOD
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-brand-green overflow-hidden">
        <div className="container mx-auto px-8 md:px-16">

          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold font-sans">Location</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-xl">
              The Neighbourhood
            </h2>
            <p className="text-white/50 font-sans font-light text-sm max-w-md leading-relaxed">
              Serene Canterbury sits in Devanahalli — one of North Bangalore's most desirable corridors for premium senior living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {[
              {
                number: '01',
                title: 'Proximity to Manipal Hospital',
                body: '15 minutes from Manipal Hospital, Devanahalli — ensuring residents and families have world-class healthcare within easy reach at all times.',
              },
              {
                number: '02',
                title: 'Pristine Air & Views of Nandi Hills',
                body: "Located away from the city's congestion, Serene Canterbury enjoys clean air, low noise levels, and direct sightlines to the iconic Nandi Hills.",
              },
              {
                number: '03',
                title: 'Canterbury Castles Infrastructure',
                body: 'The proven infrastructure, community design, and quality benchmarks of Canterbury Castles surround this project — creating an established, trusted neighbourhood.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={i * 0.12}
                variants={fadeUp}
                className="p-8 md:p-10 border-r border-b md:border-b-0 border-white/10 last:border-r-0"
              >
                <span className="font-heading text-5xl text-brand-gold/20 block mb-6">{item.number}</span>
                <h3 className="font-heading text-white text-xl mb-4 leading-snug">{item.title}</h3>
                <p className="text-white/50 font-sans font-light text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          SERVICES — single focus block
      ═══════════════════════════════════════════════════════ */}
      <section id="services" className="py-28 bg-[#fdfdf9]">
        <div className="container mx-auto px-8 md:px-16">

          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold font-sans">What We Build</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — headline */}
            <div>
              <h2 className="font-heading text-4xl md:text-5xl text-brand-green leading-tight mb-6">
                Residential Construction<br />Excellence.
              </h2>
              <p className="text-brand-green/60 font-sans font-light text-base leading-relaxed max-w-md">
                Every home we build is designed to perform — structurally, aesthetically, and over the long term. Our sole focus is premium residential construction, done right.
              </p>
            </div>

            {/* Right — four focus areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-brand-green/10">
              {[
                {
                  title: 'Senior Living Residences',
                  body: 'Purpose-built homes tailored to the needs and comfort of senior residents — spacious, safe, and thoughtfully designed.',
                },
                {
                  title: 'Community Infrastructure',
                  body: 'Clubhouses, landscaped commons, arrival sequences, and shared wellness spaces that define the character of a community.',
                },
                {
                  title: 'Wellness Amenities',
                  body: 'Integrated wellness infrastructure — from therapy rooms and walking trails to meditation gardens and fitness facilities.',
                },
                {
                  title: 'Accessibility-First Design',
                  body: 'Every home and common area is built to accessibility standards — wide corridors, zero-step entries, and age-friendly fixtures throughout.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  custom={i * 0.1}
                  variants={fadeUp}
                  className="p-8 border-r border-b border-brand-green/10 last:border-r-0 [&:nth-child(2)]:border-r-0 sm:[&:nth-child(2)]:border-r [&:nth-last-child(-n+2)]:border-b-0"
                >
                  <h3 className="font-heading text-brand-green text-lg mb-3">{item.title}</h3>
                  <p className="text-brand-green/55 font-sans font-light text-sm leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          CONTACT
      ═════════════════════════���═════════════════════════════ */}
      <section id="contact" className="py-28 bg-brand-green">
        <div className="container mx-auto px-8 md:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Left — headline & CTAs */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-brand-gold" />
                <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold font-sans">Get in Touch</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-white leading-tight mb-6">
                Questions About Your Home<br />at Serene Canterbury?
              </h2>
              <p className="text-white/60 font-sans font-light text-base leading-relaxed mb-12">
                We are here to provide updates and answer your technical queries. Reach us directly — no waiting, no automated bots.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-green font-sans font-medium uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
                >
                  <Phone size={15} /> WhatsApp Us
                </a>
                <a
                  href={TEL_LINK}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-sans font-light uppercase tracking-widest text-sm hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
                >
                  <Phone size={15} /> Call Directly
                </a>
              </div>
            </div>

            {/* Right — address */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-brand-gold" />
                <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold font-sans">Our Office</span>
              </div>
              <h3 className="font-heading text-white text-xl mb-4">Zebedee Realty</h3>
              <address className="not-italic text-white/55 font-sans font-light text-sm leading-loose mb-6">
                EL-Shaddai, Basement Floor<br />
                No. 13/2, 2nd Cross, Beside Assisi Church<br />
                Hennur Main Road, St. Thomas Town<br />
                Bengaluru – 560084
              </address>
              <a
                href="mailto:info@zebedeerealty.com"
                className="text-sm text-white/50 hover:text-brand-gold transition-colors font-sans font-light"
              >
                info@zebedeerealty.com
              </a>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/25 text-xs font-sans leading-relaxed">
                  An execution arm of Zebedee Ventures · Devanahalli–Nandi Hills Corridor · North Bangalore
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
