'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Zap, Package, Plane, Users, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function Services() {
  const [activeTab, setActiveTab] = useState('electrical')

  const services = {
    electrical: {
      title: 'Electrical Installation & Construction',
      description: 'Professional electrical systems for commercial and industrial applications',
      features: [
        'Design and installation of high-voltage systems',
        'Commercial building electrification',
        'Industrial plant setup',
        'Safety compliance and certification',
        'Maintenance and support services',
        'Emergency response capabilities'
      ],
      icon: Zap,
      color: 'from-blue-400 to-blue-600'
    },
    trading: {
      title: 'Commodities Trading',
      description: 'Reliable supply of quality agricultural and industrial commodities',
      features: [
        'Premium rice supply from certified suppliers',
        'Refined and crude oil trading',
        'Import/export logistics',
        'Quality assurance testing',
        'Competitive pricing',
        'Long-term supply agreements'
      ],
      icon: Package,
      color: 'from-amber-400 to-amber-600'
    },
    travel: {
      title: 'Travel Services',
      description: 'Comprehensive travel solutions for business and leisure',
      features: [
        'Flight booking and reservations',
        'Hotel accommodations',
        'Visa assistance',
        'Travel insurance',
        'Corporate travel management',
        'Customized tour packages'
      ],
      icon: Plane,
      color: 'from-teal-400 to-teal-600'
    },
    workforce: {
      title: 'Workforce Outsourcing',
      description: 'Strategic staffing solutions for your business needs',
      features: [
        'Skilled labor recruitment',
        'Project-based staffing',
        'Permanent placement services',
        'Training and development',
        'Payroll management',
        'Compliance and HR support'
      ],
      icon: Users,
      color: 'from-purple-400 to-purple-600'
    }
  }

  const service = services[activeTab as keyof typeof services]
  const Icon = service.icon

  return (
    <main className="bg-primary text-primary-foreground min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Comprehensive solutions across four strategic business sectors
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Service Tabs */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {Object.entries(services).map(([key, svc]) => {
              const SvcIcon = svc.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`p-6 rounded-xl border transition-all text-left ${
                    activeTab === key
                      ? 'bg-secondary text-secondary-foreground border-secondary'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <SvcIcon size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">{svc.title}</h3>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Service Detail */}
          <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-2xl p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className={`bg-gradient-to-br ${service.color} p-4 rounded-xl`}>
                <Icon size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-2">{service.title}</h2>
                <p className="text-white/70">{service.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/80"><span className="font-semibold">15+ Years</span> of industry experience</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/80"><span className="font-semibold">Certified</span> professionals and standards</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/80"><span className="font-semibold">Reliable</span> and transparent partnerships</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/80"><span className="font-semibold">24/7</span> support and availability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Commitment to Excellence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-secondary mb-3">ISO Certified</div>
              <p className="text-white/70">All operations comply with international quality standards and regulations.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-secondary mb-3">Safety First</div>
              <p className="text-white/70">Zero-tolerance policy on safety violations with comprehensive training programs.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-secondary mb-3">Custom Solutions</div>
              <p className="text-white/70">Tailored approaches to meet unique requirements of each client and project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/60 mb-8">
            Contact us to discuss your specific requirements and how we can help.
          </p>
          <Link href="/contact" className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
