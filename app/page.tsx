'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Zap, Package, Plane, Users } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null)

  const sectors = [
    {
      id: 'electrical',
      name: 'Electrical Installation',
      description: 'Professional electrical installation and construction services',
      icon: Zap,
      color: 'from-blue-400 to-blue-600',
      stats: '500+ Projects'
    },
    {
      id: 'trading',
      name: 'Commodities Trading',
      description: 'Quality rice, oil, and commodity supply solutions',
      icon: Package,
      color: 'from-amber-400 to-amber-600',
      stats: '50+ Suppliers'
    },
    {
      id: 'travel',
      name: 'Travel Services',
      description: 'Comprehensive travel planning and management',
      icon: Plane,
      color: 'from-teal-400 to-teal-600',
      stats: '100+ Routes'
    },
    {
      id: 'workforce',
      name: 'Workforce Outsourcing',
      description: 'Professional staffing and talent solutions',
      icon: Users,
      color: 'from-purple-400 to-purple-600',
      stats: '1000+ Professionals'
    }
  ]

  return (
    <main className="bg-primary text-primary-foreground min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Excellence Across Sectors
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              Delivering world-class solutions in electrical installation, commodities trading, travel services, and workforce outsourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="border border-white/20 px-8 py-3 rounded-lg font-semibold hover:border-secondary hover:text-secondary transition-colors inline-flex items-center justify-center gap-2">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 py-12 border-y border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <p className="text-white/60">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">4</div>
              <p className="text-white/60">Strategic Sectors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
              <p className="text-white/60">Trusted Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Showcase */}
      <section className="py-20 px-4 bg-primary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Business Sectors</h2>
            <p className="text-lg text-white/60">Comprehensive solutions tailored to each industry</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector) => {
              const Icon = sector.icon
              return (
                <div
                  key={sector.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredSector(sector.id)}
                  onMouseLeave={() => setHoveredSector(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-xl transition-opacity" />
                  <div className="relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-8 rounded-xl transition-all duration-300 h-full flex flex-col">
                    <div className={`bg-gradient-to-br ${sector.color} p-3 rounded-lg w-fit mb-4`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{sector.name}</h3>
                    <p className="text-white/60 text-sm mb-6 flex-grow">{sector.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary font-semibold text-sm">{sector.stats}</span>
                      <ArrowRight size={18} className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-secondary/20 to-white/5 border border-secondary/20 rounded-2xl p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-secondary text-sm font-semibold">CASE STUDY</span>
                <h3 className="text-3xl md:text-4xl font-bold my-4">Nationwide Electrical Infrastructure</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Successfully completed a major electrical installation project spanning multiple regions, delivering 500+ kilometers of premium infrastructure with zero safety incidents.
                </p>
                <div className="flex flex-col gap-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-white/80">On-time delivery with premium quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-white/80">Certified professional team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-white/80">20% cost optimization</span>
                  </div>
                </div>
                <Link href="/portfolio" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
                  View More Projects <ArrowRight size={20} />
                </Link>
              </div>
              <div className="bg-white/10 rounded-xl h-64 md:h-80 flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <Zap size={48} className="mx-auto mb-4 text-secondary/50" />
                  <p className="text-white/40">Project Showcase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Partner with ProVest?</h2>
          <p className="text-lg text-white/60 mb-8">
            Let&apos;s discuss how our solutions can drive your business forward.
          </p>
          <Link href="/contact" className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            Start a Conversation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
