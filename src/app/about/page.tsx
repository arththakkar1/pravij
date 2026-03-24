'use client';

import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const principles = [
    { title: 'Absolute Integrity', text: 'We maintain complete transparency in our material composition and manufacturing processes.' },
    { title: 'Continuous Refinement', text: 'Engineering is never finished; we constantly seek to optimize our product line for changing industry standards.' },
    { title: 'Safety as a Baseline', text: 'Our components are the final line of defense. We engineer them as if lives depend on it, because they do.' }
  ];

  return (
    <main className="min-h-screen bg-zinc-50">
      <Navbar />

      <section className="pt-48 pb-24 bg-white border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-6">
            Company Profile
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-tight mb-8">
            Engineering safety at scale.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-light text-zinc-500 leading-relaxed max-w-2xl">
            Pravij Earthing Technologies was founded with a singular focus: manufacturing the most reliable structural and electrical safety components for the Asian infrastructure sector.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-medium text-zinc-900 mb-6 tracking-tight">Our methodology</h2>
              <p className="text-zinc-500 font-light leading-relaxed mb-6">
                From our facility in Ahmedabad, Gujarat, we control the entire lifecycle of our products—from raw material sourcing (copper, zinc, specialized polymers) to precision stamping and final assembly. 
              </p>
              <p className="text-zinc-500 font-light leading-relaxed">
                By maintaining vertical integration, we ensure that every earthing kit, solar connector, and structural fastener meets rigorous DIN and ISO specifications before it reaches the field.
              </p>
            </div>
            
            <div className="space-y-12">
              {principles.map((item, idx) => (
                <div key={idx} className="border-l border-zinc-200 pl-6">
                  <h3 className="text-sm font-medium text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-100 border-y border-zinc-100 py-12">
            {[
              { stat: "15+", label: "Years active" },
              { stat: "ISO", label: "9001:2015" },
              { stat: "16+", label: "Industrial verticals" },
              { stat: "Zero", label: "Compromises" }
            ].map((s, i) => (
              <div key={i} className="px-6 text-center md:text-left">
                <div className="text-2xl md:text-4xl font-light text-zinc-900 tracking-tight mb-2">{s.stat}</div>
                <div className="text-xs font-medium text-zinc-400 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
