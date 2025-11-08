import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative w-48 h-16 flex items-center">
                <Image
                  src="/bancozim-logo.png"
                  alt="BancoZim"
                  width={192}
                  height={64}
                  className="object-contain brightness-[1.6] contrast-[1.2] transition-all duration-300 group-hover:brightness-[1.8]"
                />
              </div>
            </Link>
            <p className="text-sm text-white/80 leading-relaxed">
              Increasing your quality of life through superior, modern homeware and allied products.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-white/80 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/80 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">
                  About Us
                </Link>
              </li>
              
              <li>
                <Link href="/products" className="text-sm text-white/80 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/80 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/whats-new" className="text-sm text-white/80 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">
                  What's New
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-white/80 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://bancosystem.co.zw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Shop Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+2632427448840" className="text-sm text-white/80 hover:text-primary transition-colors">
                  (0242) 744 840
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@bancozim.co.zw" className="text-sm text-white/80 hover:text-primary transition-colors break-all">
                  info@bancozim.co.zw
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-white/80">
                  5th Floor Pockets Building, 50 Jason Moyo Street, P.O Box CY 2222, Harare
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} BancoZim. All rights reserved. | Market leader in on-credit homeware solutions in Zimbabwe.
          </p>
        </div>
      </div>
    </footer>
  )
}
