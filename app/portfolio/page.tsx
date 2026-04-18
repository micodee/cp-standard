'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'National Grid Infrastructure',
      category: 'electrical',
      description: 'Large-scale electrical installation across 5 regions',
      image: 'bg-gradient-to-br from-blue-500 to-blue-700',
      stats: '500+ km cables installed'
    },
    {
      id: 2,
      title: 'Rice Supply Chain',
      category: 'trading',
      description: 'Premium rice distribution to 200+ retailers',
      image: 'bg-gradient-to-br from-amber-500 to-amber-700',
      stats: '50,000 tons annually'
    },
    {
      id: 3,
      title: 'Corporate Travel Program',
      category: 'travel',
      description: 'Travel management for 500+ corporate clients',
      image: 'bg-gradient-to-br from-teal-500 to-teal-700',
      stats: '100,000+ bookings/year'
    },
    {
      id: 4,
      title: 'Tech Industry Staffing',
      category: 'workforce',
      description: 'Placed 300+ professionals in tech sector',
      image: 'bg-gradient-to-br from-purple-500 to-purple-700',
      stats: '95% placement rate'
    },
    {
      id: 5,
      title: 'Industrial Plant Electrification',
      category: 'electrical',
      description: 'Complete electrical system upgrade for manufacturing',
      image: 'bg-gradient-to-br from-blue-600 to-cyan-600',
      stats: '2000+ equipment installations'
    },
    {
      id: 6,
      title: 'Oil Trading Operations',
      category: 'trading',
      description: 'Refined oil supply agreements with major distributors',
      image: 'bg-gradient-to-br from-amber-600 to-orange-700',
      stats: '1M+ barrels annually'
    },
    {
      id: 7,
      title: 'International Tour Packages',
      category: 'travel',
      description: 'Custom travel experiences in 50+ countries',
      image: 'bg-gradient-to-br from-teal-600 to-cyan-700',
      stats: '5000+ tourists served'
    },
    {
      id: 8,
      title: 'Manufacturing Workforce',
      category: 'workforce',
      description: 'Skilled labor supply for automotive manufacturing',
      image: 'bg-gradient-to-br from-purple-600 to-pink-700',
      stats: '500+ workers deployed'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'electrical', name: 'Electrical' },
    { id: 'trading', name: 'Trading' },
    { id: 'travel', name: 'Travel' },
    { id: 'workforce', name: 'Workforce' }
  ]

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <main className="bg-primary text-primary-foreground min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Showcase of successful projects across all our business sectors
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-secondary transition-all"
              >
                {/* Project Image Background */}
                <div className={`${project.image} w-full h-64 relative`}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <div>
                    <span className="inline-block px-3 py-1 bg-secondary/80 text-secondary-foreground text-xs font-semibold rounded-full mb-3">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                  </div>

                  <div>
                    <p className="text-sm text-white/90 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/70">{project.stats}</span>
                      <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Track Record of Success</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">500+</div>
              <p className="text-white/70">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">98%</div>
              <p className="text-white/70">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">$50M+</div>
              <p className="text-white/70">Project Value</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">15</div>
              <p className="text-white/70">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Success Story</h2>
          <p className="text-lg text-white/60 mb-8">
            Let&apos;s create something remarkable together.
          </p>
          <Link href="/contact" className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            Begin a Project <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
