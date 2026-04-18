import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary/95 text-primary-foreground border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ProVest Solutions</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Excellence in electrical, trading, travel, and workforce solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white/70 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-secondary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-white/70 hover:text-secondary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-secondary transition-colors">Electrical Installation</a></li>
              <li><a href="#" className="text-white/70 hover:text-secondary transition-colors">Commodities Trading</a></li>
              <li><a href="#" className="text-white/70 hover:text-secondary transition-colors">Travel Services</a></li>
              <li><a href="#" className="text-white/70 hover:text-secondary transition-colors">Workforce Outsourcing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-start">
                <Phone size={16} className="mt-1 flex-shrink-0 text-secondary" />
                <a href="tel:+1234567890" className="text-white/70 hover:text-secondary transition-colors">+1 (234) 567-890</a>
              </div>
              <div className="flex gap-2 items-start">
                <Mail size={16} className="mt-1 flex-shrink-0 text-secondary" />
                <a href="mailto:info@provest.com" className="text-white/70 hover:text-secondary transition-colors">info@provest.com</a>
              </div>
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-secondary" />
                <span className="text-white/70">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; {currentYear} ProVest Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
