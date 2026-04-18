'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="bg-primary text-primary-foreground min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out and let&apos;s discuss your needs.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Phone size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Phone</h3>
                    <a href="tel:+621234567890" className="text-white/70 hover:text-secondary transition-colors">
                      +62 (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Mail size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <a href="mailto:info@provest.com" className="text-white/70 hover:text-secondary transition-colors">
                      info@provest.com
                    </a>
                    <div className="text-xs text-white/50 mt-2">Response time: 24 hours</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Address</h3>
                    <p className="text-white/70">
                      Jl. Sudirman No. 123<br />
                      Jakarta, Indonesia 12345
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-secondary/20 to-white/5 border border-secondary/20 rounded-xl p-8">
                <h4 className="font-bold mb-4">Connect With Us</h4>
                <div className="flex gap-4">
                  <a href="https://wa.me/621234567890" className="flex-1 bg-secondary text-secondary-foreground px-3 py-2 rounded-lg text-center text-sm font-semibold hover:opacity-90 transition-opacity">
                    WhatsApp
                  </a>
                  <a href="tel:+621234567890" className="flex-1 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg text-center text-sm font-semibold transition-colors">
                    Call
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-secondary transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-secondary transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-secondary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-secondary transition-colors"
                        placeholder="+62 123 456 7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-secondary transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="electrical">Electrical Services</option>
                      <option value="trading">Trading Inquiry</option>
                      <option value="travel">Travel Services</option>
                      <option value="workforce">Workforce Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-secondary transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-4">
                    <button
                      type="submit"
                      className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                    >
                      Send Message <Send size={20} />
                    </button>
                    {submitted && (
                      <span className="text-green-400 font-medium flex items-center gap-2">
                        ✓ Message sent successfully!
                      </span>
                    )}
                  </div>
                </form>
              </div>

              {/* Additional Info */}
              <div className="mt-8 bg-gradient-to-br from-secondary/10 to-white/5 border border-secondary/20 rounded-xl p-8">
                <h4 className="font-bold mb-3">Why Choose ProVest?</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex gap-2 items-start">
                    <span className="text-secondary mt-1">✓</span>
                    <span>24/7 dedicated customer support</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Rapid response to all inquiries</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Customized solutions for your needs</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Certified and trusted professionals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { city: 'Jakarta', address: 'Jl. Sudirman No. 123', phone: '+62 (123) 456-7890' },
              { city: 'Surabaya', address: 'Jl. Ahmad Yani No. 456', phone: '+62 (223) 456-7890' },
              { city: 'Bandung', address: 'Jl. Diponegoro No. 789', phone: '+62 (323) 456-7890' }
            ].map((office, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3">{office.city}</h3>
                <p className="text-white/70 text-sm mb-4">{office.address}</p>
                <a href={`tel:${office.phone}`} className="text-secondary hover:underline text-sm font-semibold">
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
