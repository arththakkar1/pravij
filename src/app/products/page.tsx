"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const catalog = [
  {
    category: "Electrical Items",
    description: "Connectors, distribution boxes, isolation switches, and complete earthing protection for solar systems.",
    items: [
      { name: "MC4 Connector (LQ-1)", spec: "30A, 1500V DC (IEC) / 1000V DC (UL)", desc: "High-performance MC4 connectors with IP68 protection, tin-plated copper contacts, and UL94-V0 flame class. Suitable for -40°C to +90°C.", img: "/images/prod_mc4_connector.png" },
      { name: "Branch Connector", spec: "50A, Cu (Tin plated), IP68/IP2X", desc: "Durable branch connectors designed for robust parallel wiring. Features IP68 mating protection and compliant with EN 50521 standards.", img: "/images/solar_connectors.png" },
      { name: "Y Connector", spec: "30A, Cu (Tin plated), IP67/IP2X", desc: "Reliable Y connectors for dividing DC outputs, built with pure copper and PPO insulation for severe environmental conditions.", img: "/images/solar_connectors.png" },
      { name: "TC Connector (LQ-1)", spec: "30A, 1500V DC (IEC) / 800V DC (UL)", desc: "Heavy-duty TC connectors engineered for rigorous solar applications and weather resistance.", img: "/images/prod_mc4_connector.png" },
      { name: "ACDB (AC Distribution Box)", spec: "1–10kW capacity, SPD Type 2", desc: "Enclosures securing critical short-circuit protection. Sizes vary up to 280x190x130mm, featuring 40KA 1P+N surge protection.", img: "/images/prod_acdb_panel.png" },
      { name: "DCDB (DC Distribution Box)", spec: "Up to 3 IN/3 OUT, 500V-1000V", desc: "DC combiner boxes featuring configurations from 1-IN/1-OUT to 3-IN/3-OUT with Type 2 SPD integrations.", img: "/images/prod_acdb_panel.png" },
      { name: "Isolation Switch", spec: "600V–1200V, 16A/32A/63A", desc: "IP65/IP66 rated isolation safety switches strictly designed to handle sustained high DC loads securely.", img: "/images/prod_isolation_switch.png" },
      { name: "Earthing Kit", spec: "Rods, arrester, clamps, pit chamber", desc: "A comprehensive turnkey grounding kit containing copper-bonded electrodes, BFC compound, pit chamber, and pure copper clamps.", img: "/images/prod_earthing_kit.png" },
      { name: "Solar Cables", spec: "DC, AC, LA, Earthing types", desc: "UV-resistant and flame-retardant tinned copper cables customized for specific capacity from interconnection to main grounding.", img: "/images/products_hero.png" },
    ],
  },
  {
    category: "Structure Items",
    description: "Robust structural hardware including bolts, rails, clips, and base plates.",
    items: [
      { name: "J Bolt & U Bolt", spec: "SS304, 40x40mm to 80x40mm", desc: "Heavy-gauge stainless steel 304 J and U anchoring bolts engineered for strong grip and anti-corrosion properties.", img: "/images/products_hero.png" },
      { name: "Base Plate (GI & MS)", spec: "Various sizes up to 150x150x5 mm", desc: "Hot-dipped galvanized and mild steel base plates ensuring maximum surface load stability for structural mounts.", img: "/images/products_hero.png" },
      { name: "Anchor Fasteners", spec: "Wedge & Pin Type, 10x70 to 12x120 mm", desc: "Pin and wedge type expansion anchors providing exceptional pull-out strength in solid concrete placements.", img: "/images/products_hero.png" },
      { name: "Rails", margin: "true", spec: "Aluminium Mono Base, Star, Straight, Slant", desc: "Extruded structural aluminium rails available in up to 300mm configurations for seamless panel alignments.", img: "/images/solar_mounts.png" },
      { name: "Mid & End Clamp", spec: "SS304, 25mm to 35mm", desc: "Precision-milled SS304 clamps designed to firmly fix solar modules varying from 25mm to 35mm thick.", img: "/images/solar_mounts.png" },
      { name: "Cable Tie", spec: "100x2.5mm to 450x4.8mm", desc: "Industrial-grade UV resistant nylon locking ties to safely route exposed AC/DC cables across frameworks.", img: "/images/products_hero.png" },
      { name: "SS Allen Bolt", spec: "M8x20 mm to M8x35 mm", desc: "High-tensile stainless steel hex socket bolts providing tight mechanical fixation without stripping.", img: "/images/products_hero.png" },
      { name: "Nuts & Accessories", spec: "Spring Nut & Rail Nut (Aluminium)", desc: "Pre-threaded aluminium rail nuts and spring inserts streamlining structure assembly speed securely.", img: "/images/solar_mounts.png" },
      { name: "Rivets", spec: "2.4 mm to 7.8 mm", desc: "Permanent blind structural rivets assuring vibration-proof integrity of delicate panel sheet joints.", img: "/images/products_hero.png" },
      { name: "EPDM Roll", spec: "10 meters, 25-100mm width", desc: "High-density EPDM rubber weatherproofing tape for superior sealing against rain and heat exposure.", img: "/images/products_hero.png" },
      { name: "Zinc Spray", spec: "330 ml / 550 ml, Anti-corrosion", desc: "Fast-drying cold galvanizing zinc spray to instantly restore anti-corrosive coating on scuffed or welded joints.", img: "/images/products_hero.png" },
    ],
  },
  {
    category: "Cleaning Items",
    description: "Tools to keep solar installations clean and maintenance-free.",
    items: [
      { name: "Sprinkler", spec: "Nylon & SS, with U clamp", desc: "Automated panel watering sprinklers fitted with Tee joints, U bolts, and durable nylon-steel construction.", img: "/images/products_hero.png" },
      { name: "Brush & Mop", spec: "3m, 4m, 6m long reach", desc: "Telescopic soft-bristle mops and brushes explicitly preventing glass micro-scratches over extensive arrays.", img: "/images/products_hero.png" },
      { name: "Water Drain Clip", spec: "30mm to 40mm", desc: "Special clip mechanism snapping onto panel edges to instantly break ponding water adhesion and accelerate drainage.", img: "/images/products_hero.png" },
      { name: "Pressure Gun", spec: "Power Jet Pro 7X, 5m/7m", desc: "Heavy-duty Power Jet Pro 7X washing gun offering precision nozzles with 5 to 7 meters operative distance.", img: "/images/products_hero.png" },
      { name: "Pressure Pump", spec: "8 HP High pressure", desc: "Robust 8-horsepower high-pressure water pump sustaining constant output for aggressive dirt and moss removal.", img: "/images/products_hero.png" },
    ],
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const categories = ["All", ...catalog.map((c) => c.category)];

  const filteredCatalog =
    activeCategory === "All"
      ? catalog
      : catalog.filter((c) => c.category === activeCategory);

  return (
    <main className="min-h-screen bg-zinc-50">
      <section className="pt-48 pb-20 bg-white border-b border-zinc-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-medium text-zinc-900 tracking-tight leading-tight mb-6"
              >
                Product catalog.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl font-light text-zinc-500 max-w-xl leading-relaxed"
              >
                A precise inventory of industrial-grade components. Manufactured
                to precise tolerances for total reliability.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 w-full max-w-lg mx-auto aspect-4/3 md:aspect-square rounded-2xl overflow-hidden border border-zinc-100 shadow-sm"
            >
              <img
                src="/images/products_hero.png"
                alt="Electrical Components Overview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-8 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 cursor-pointer py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "bg-white text-zinc-600 hover:bg-zinc-50 border border-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-28"
            >
              {filteredCatalog.map((cat) => (
                <div key={cat.category}>
                  <div className="mb-12 pb-6 border-b border-zinc-200">
                    <h2 className="text-3xl font-medium text-zinc-900 mb-3 tracking-tight">
                      {cat.category}
                    </h2>
                    <p className="text-zinc-500 font-light text-lg">
                      {cat.description}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {cat.items.map((item, i) => (
                      <div
                        key={i}
                        className="group flex flex-col items-start cursor-pointer transition-opacity hover:opacity-80"
                        onClick={() => setSelectedProduct(item)}
                      >
                        <div className="w-full aspect-square rounded-xl bg-zinc-100 mb-5 overflow-hidden border border-zinc-100 inline-block">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                        </div>
                        <h3 className="text-base font-medium text-zinc-900 mb-1.5">
                          {item.name}
                        </h3>
                        <p className="text-sm font-light text-zinc-500 leading-relaxed">
                          {item.spec}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden z-10"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 transition-colors z-20 cursor-pointer"
              >
                <X size={18} strokeWidth={2} />
              </button>
              
              <div className="aspect-video bg-zinc-100 relative">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-medium text-zinc-900 mb-2">{selectedProduct.name}</h3>
                <p className="text-sm font-medium text-emerald-600 mb-4">{selectedProduct.spec}</p>
                <p className="text-zinc-500 font-light mb-8 leading-relaxed">
                  {selectedProduct.desc}
                </p>
                
                <div className="flex gap-4 text-sm">
                  <a
                    href="/contact"
                    className="flex-1 cursor-pointer bg-zinc-900 text-white font-medium py-3 rounded-xl hover:bg-zinc-800 transition-colors text-center inline-block"
                  >
                    Request Quote
                  </a>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 cursor-pointer bg-zinc-100 text-zinc-900 font-medium py-3 rounded-xl hover:bg-zinc-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
