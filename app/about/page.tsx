'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Award, Target, Users } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const timeline = [
    {
      year: '2009',
      title: 'Founded',
      description: 'ProVest Solutions established with focus on electrical installations'
    },
    {
      year: '2012',
      title: 'Expansion',
      description: 'Added commodities trading division with premium supplier partnerships'
    },
    {
      year: '2015',
      title: 'Travel Services',
      description: 'Launched comprehensive travel solutions for corporate and leisure markets'
    },
    {
      year: '2018',
      title: 'Workforce Division',
      description: 'Established staffing and workforce outsourcing operations'
    },
    {
      year: '2021',
      title: 'Regional Growth',
      description: 'Expanded operations across Southeast Asia with new offices'
    },
    {
      year: '2024',
      title: 'Digital Transformation',
      description: 'Implemented AI and modern systems to enhance service delivery'
    }
  ]

  return (
    <main className="bg-primary text-primary-foreground min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About ProVest</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Building excellence across multiple sectors since 2009
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-white/70 mb-4 leading-relaxed">
                ProVest Solutions began with a simple vision: deliver exceptional services across multiple industries through professional expertise and integrity.
              </p>
              <p className="text-white/70 mb-4 leading-relaxed">
                Over 15 years, we&apos;ve grown from a specialized electrical installation company to a diversified enterprise serving thousands of clients across electrical, trading, travel, and workforce sectors.
              </p>
              <p className="text-white/70 leading-relaxed">
                Our success is built on three pillars: unwavering commitment to quality, deep industry expertise, and the talented professionals who make it all possible.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/20 to-white/5 rounded-2xl p-12 border border-secondary/20 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-secondary mb-2">15+</div>
                <p className="text-white/60">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <Target size={32} className="text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Mission</h3>
              <p className="text-white/70">
                Deliver world-class solutions that drive sustainable growth and create lasting value for our clients, partners, and communities.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <Award size={32} className="text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Vision</h3>
              <p className="text-white/70">
                To be the leading provider of integrated business solutions across electrical, trading, travel, and workforce sectors in Asia.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <Users size={32} className="text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Values</h3>
              <p className="text-white/70">
                Excellence, integrity, innovation, and client-centricity guide every decision we make and relationship we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 border-t border-white/10 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {String(idx + 1)}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-1 h-16 bg-secondary/30 mt-4" />
                  )}
                </div>
                <div className="pb-4">
                  <div className="text-secondary font-semibold mb-1">{item.year}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Budi Santoso', role: 'CEO & Founder', sector: 'Electrical Division' },
              { name: 'Sarah Wijaya', role: 'COO', sector: 'Operations' },
              { name: 'Ahmad Rahman', role: 'Chief Business Officer', sector: 'Trading & Expansion' }
            ].map((member, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary/30 to-white/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-secondary/20">
                  <Users size={48} className="text-secondary/60" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-secondary font-semibold mb-2">{member.role}</p>
                <p className="text-white/60 text-sm">{member.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Certifications & Accreditations</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              'ISO 9001:2015',
              'ISO 14001:2015',
              'KBLI Registered',
              'Safety Certified'
            ].map((cert, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                <Award size={40} className="text-secondary mx-auto mb-4" />
                <p className="font-semibold">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">1000+</div>
              <p className="text-white/70">Employees</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">1000+</div>
              <p className="text-white/70">Active Clients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">15+</div>
              <p className="text-white/70">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">500+</div>
              <p className="text-white/70">Projects/Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join the ProVest Family</h2>
          <p className="text-lg text-white/60 mb-8">
            Discover how we can support your business growth.
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
