"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { 
      label: "Resources",
      items: [
        { href: "/whats-new", label: "What's New" },
        { href: "/blog", label: "Blog" },
        { href: "/faq", label: "FAQ" },
      ]
    },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm luxury-shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-28 h-10">
              <Image
                src="/bancozim-logo.png"
                alt="BancoZim"
                fill
                className="object-contain brightness-[1.5] contrast-[1.2] transition-all duration-300 group-hover:brightness-[1.7]"
                priority={true}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              link.items ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-all duration-300">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                      {link.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-secondary hover:bg-gray-50 hover:text-primary transition-colors font-medium"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link href="/contact">
              <Button 
                size="sm" 
                className="bg-white text-secondary hover:bg-white/90 font-semibold luxury-shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-white hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 space-y-3 border-t border-white/10">
            {navLinks.map((link) => (
              link.items ? (
                <div key={link.label}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    className="w-full flex items-center justify-between text-sm font-medium text-white/90 hover:text-white py-2"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="pl-4 space-y-2 mt-2">
                      {link.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-sm text-white/80 hover:text-white py-1.5"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-medium text-white/90 hover:text-white hover:pl-2 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="pt-4 space-y-3">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button 
                  size="sm" 
                  className="w-full bg-white text-secondary hover:bg-white/90 font-semibold"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
