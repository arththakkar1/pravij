'use client';

import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const highlights = [
  { img: "/images/industry_solar.png", name: "Utility-Scale Solar Farms" },
  { img: "/images/industry_telecom.png", name: "Electrical Transmission" },
  { img: "/images/industry_manufacturing.png", name: "Heavy Manufacturing" },
];

const industries = [
  { name: "Commercial Lighting Infrastructures", img: "/images/industry_manufacturing.png" },
  { name: "Marine and Coastal Operations", img: "/images/industrial_map.png" },
  { name: "Pharmaceutical Clean Rooms", img: "/images/testing_lab.png" },
  { name: "Sensitive Electronics Fabrication", img: "/images/certification_hero.png" },
  { name: "Chemical Processing Plants", img: "/images/industry_manufacturing.png" },
  { name: "Consumer Appliance Manufacturing", img: "/images/industry_manufacturing.png" },
  { name: "Industrial Roofing Systems", img: "/images/solar_mounts.png" },
  { name: "Oil & Gas Refineries", img: "/images/industry_manufacturing.png" },
  { name: "High-Temperature Furnaces", img: "/images/industry_manufacturing.png" },
  { name: "Commercial Interior Routing", img: "/images/products_hero.png" },
  { name: "Railway and Transit Networks", img: "/images/industry_telecom.png" },
  { name: "General Civil Engineering", img: "/images/industrial_map.png" },
  { name: "Custom Panel Fabrication", img: "/images/prod_acdb_panel.png" }
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Navbar />

      <section className="pt-48 pb-24 bg-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-medium text-zinc-900 tracking-tight leading-tight mb-6">
            Sectors we support.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl font-light text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Our components are universally applicable wherever electrical safety and structural integrity are non-negotiable.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {highlights.map((h, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                 <div className="aspect-[4/3] bg-zinc-200 rounded-xl overflow-hidden border border-zinc-100 mb-6 group">
                   <img src={h.img} alt={h.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 <h3 className="text-lg font-medium text-zinc-900">{h.name}</h3>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-zinc-200 pt-20">
            <h2 className="text-2xl font-medium text-zinc-900 mb-10 tracking-tight">Additional Verticals</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {industries.map((ind, i) => (
                <div key={i} className="group flex flex-col items-start cursor-default">
                  <div className="w-full aspect-[4/3] rounded-xl bg-zinc-100 mb-4 overflow-hidden border border-zinc-100 inline-block">
                     <img src={ind.img} alt={ind.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <h3 className="text-sm font-medium text-zinc-900 leading-tight">{ind.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
