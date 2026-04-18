'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 w-full bg-primary text-primary-foreground z-50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          ProVest
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-secondary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-secondary transition-colors">
            About
          </Link>
          <Link href="/services" className="hover:text-secondary transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-secondary transition-colors">
            Portfolio
          </Link>
          <Link href="/contact" className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-primary border-b border-white/10 md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-secondary transition-colors">
                About
              </Link>
              <Link href="/services" className="hover:text-secondary transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="hover:text-secondary transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity text-center">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
