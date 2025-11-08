"use client"

import Link from "next/link"
import Image from "next/image"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, CheckCircle2, Award, Shield, TrendingUp, Sparkles, Clock, CreditCard, Phone, Play } from "lucide-react"

function AnimatedText() {
  const words = ["Quality", "Modern", "Affordable"]
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block relative h-[1.2em] w-[220px] align-middle">
      {words.map((word, index) => (
        <span
          key={word}
          className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
            index === currentIndex
              ? "translate-y-0 opacity-100"
              : index < currentIndex
              ? "-translate-y-full opacity-0"
              : "translate-y-full opacity-0"
          }`}
        >
          {word}
        </span>
      ))}
    </span>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Breathtaking Centered Layout with Play Button + Tinted Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/products/rsz_2bedroom-2-1.webp"
            alt="BancoZim lifestyle hero"
            fill
            className="object-cover scale-105"
            priority
          />
          {/* Blue tint overlay */}
          <div className="absolute inset-0 bg-secondary/60 mix-blend-multiply" />
          {/* Soft white fade for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80" />
        </div>

  <div className="container mx-auto px-4 pt-40 pb-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-secondary font-semibold text-sm">Zimbabwe's Premier Homeware Provider</span>
            </div>

            {/* Play Button */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="mx-auto mb-8 w-20 h-20 rounded-full bg-white text-secondary flex items-center justify-center luxury-shadow hover:scale-105 transition">
                  <Play className="w-8 h-8" />
                </button>
              </DialogTrigger>
              <DialogContent className="p-0 overflow-hidden max-w-3xl">
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                    title="BancoZim Intro"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary leading-[1.1] tracking-tight">
              Elevate Your Home. Love Every Room.
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-foreground/70 leading-relaxed">
              Premium furniture, electronics, and appliances you can buy on credit or cash. Simple, transparent plans that fit your budget.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-10 h-14 luxury-shadow-lg hover:scale-105 transition">
                <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                  Shop On Credit <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-10 h-14 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition">
                <Link href="/products">Browse Catalog</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-secondary/20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">50K+</div>
                <div className="text-sm text-foreground/60">Happy Customers</div>
              </div>
              <div className="text-center border-l border-r border-secondary/20">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">10+</div>
                <div className="text-sm text-foreground/60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">98%</div>
                <div className="text-sm text-foreground/60">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Value Propositions removed per request */}

  {/* Product Showcase - Modern Grid (moved up after hero) */}
  <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm">OUR PRODUCTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Everything for Your <span className="text-primary">Perfect Home</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              From bedroom essentials to cutting-edge electronics, we have it all
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Communications Gadgets",
                description: "Latest smartphones, tablets, and smart devices to keep you connected.",
                image: "/products/iphone14.webp",
                tag: "ELECTRONICS",
                price: "From $20/month"
              },
              {
                title: "Bedroom Ware",
                description: "Complete bedroom furniture sets including beds, wardrobes, and dressers.",
                image: "/products/bed 2.jpeg",
                tag: "FURNITURE",
                price: "From $35/month"
              },
              {
                title: "Lounge Ware",
                description: "Comfortable sofas, coffee tables, and entertainment units for your living room.",
                image: "/products/rsz_2bedroom-2-1.webp",
                tag: "FURNITURE",
                price: "From $40/month"
              },
              {
                title: "Kitchen Appliances",
                description: "Modern refrigerators, stoves, microwaves, and kitchen essentials.",
                image: "/products/pc2.jpeg",
                tag: "KITCHEN",
                price: "From $25/month"
              },
              {
                title: "Solar Systems",
                description: "Complete solar power solutions including panels, inverters, and batteries.",
                image: "/products/Mecer-portable-inverter-1024x682.webp",
                tag: "ENERGY",
                price: "From $50/month"
              },
              {
                title: "Computing Devices",
                description: "Laptops, desktops, and accessories for work and entertainment.",
                image: "/products/router.jpeg",
                tag: "TECH",
                price: "From $30/month"
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="group bg-white border-0 luxury-shadow hover:luxury-shadow-lg transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-72 bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Tag badge */}
                  <div className="absolute top-6 left-6 px-3 py-1.5 bg-primary text-white text-xs font-bold tracking-wider rounded-sm">
                    {product.tag}
                  </div>

                  {/* Price badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm text-secondary font-bold text-sm rounded-sm luxury-shadow">
                    {product.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">{product.description}</p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white text-lg px-12 h-14 luxury-shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust section removed per request */}

  {/* Final CTA - Premium */}
  <section className="py-28 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-8 leading-tight">
            Ready to Elevate Your<br />
            <span className="text-primary">Living Experience?</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Start your journey with BancoZim today. Browse our catalog and find the perfect items for your home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-xl px-12 h-16 luxury-shadow-lg hover:scale-105 transition-all duration-300"
            >
              <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                Shop Now <ArrowRight className="ml-2 w-6 h-6" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-xl px-12 h-16 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
            >
              <Link href="/contact">
                <Phone className="mr-2 w-6 h-6" /> Contact Support
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Best Value</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
