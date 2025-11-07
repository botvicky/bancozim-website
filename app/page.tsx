"use client"

import Link from "next/link"
import Image from "next/image"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Rocket, TrendingUp, Users, Zap, ArrowRight } from "lucide-react"

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
    <div className="min-h-screen">
      {/* Hero Section - Image-Oriented Split Design */}
      <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 px-4 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl glow-blue" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:pr-8">


              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Transform your home with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary text-glow-blue">
                <AnimatedText /> homeware.
              </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Increase your quality of life through our superior, modern homeware and allied products. 
              Accessible through flexible hire purchase solutions that make quality living affordable for everyone.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 shadow-lg">
                <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
              >
                <Link href="/products">View Products</Link>
              </Button>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4 pt-8 border-t border-border/50">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">YouTube</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">TikTok</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right Image Grid */}
                        {/* Right Visual - Stacked Images Collage */}
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Main large image - top right */}
              <div className="absolute top-0 right-0 w-[60%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30 glow-orange group">
                <Image
                  src="/products/rsz_2bedroom-2-1.webp"
                  alt="Modern Bedroom Furniture"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Bedroom Ware</p>
                  <p className="text-white/80 text-sm">Complete furniture sets</p>
                </div>
              </div>

              {/* Medium image - middle left */}
              <div className="absolute top-[15%] left-0 w-[50%] h-[40%] rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary/30 glow-blue group z-10">
                <Image
                  src="/products/bed.jpeg"
                  alt="Lounge Furniture"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Lounge Ware</p>
                  <p className="text-white/80 text-sm">Transform your living space</p>
                </div>
              </div>

              {/* Secondary image - bottom left */}
              <div className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary/30 glow-blue group">
                <Image
                  src="/products/laptop.jpeg"
                  alt="Modern Kitchen Appliances"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">Electronics</p>
                  <p className="text-white/80 text-sm">Latest technology</p>
                </div>
              </div>

              {/* Small accent image - middle right */}
              <div className="absolute top-[45%] right-[5%] w-[35%] h-[30%] rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 group z-20">
                <Image
                  src="/products/solar-panels-roof-solar-cell.jpg"
                  alt="Solar Energy Solutions"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white font-semibold text-sm">Solar Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Showcase */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <AnimatedText /> <span className="text-primary ml-4">homeware for every home!!!</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our extensive range of quality homeware and appliances, all available through flexible hire purchase plans
            </p>
          </div>

          {/* Scrolling Products */}
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex gap-6 animate-scroll-right">
              {[
                {
                  title: "Communications Gadgets",
                  description: "Latest smartphones, tablets, and communication devices.",
                  image: "/products/iphone14.webp",
                  tag: "Electronics",
                },
                {
                  title: "Bedroom Ware",
                  description: "Complete bedroom furniture sets and accessories.",
                  image: "/products/bed 2.jpeg",
                  tag: "Furniture",
                },
                {
                  title: "Lounge Ware",
                  description: "Comfortable and stylish living room furniture.",
                  image: "/products/rsz_2bedroom-2-1.webp",
                  tag: "Furniture",
                },
                {
                  title: "Kitchen Ware",
                  description: "Modern kitchen appliances and cookware sets.",
                  image: "/products/pc2.jpeg",
                  tag: "Kitchen",
                },
                {
                  title: "Solar Systems",
                  description: "Sustainable solar energy solutions for your home.",
                  image: "/products/Mecer-portable-inverter-1024x682.webp",
                  tag: "Energy",
                },
                {
                  title: "Motor Care",
                  description: "Automotive accessories and car care products.",
                  image: "/products/router.jpeg",
                  tag: "Automotive",
                },
              ]
                .concat([
                  {
                    title: "Communications Gadgets",
                    description: "Latest smartphones, tablets, and communication devices.",
                    image: "/products/iphone14.webp",
                    tag: "Electronics",
                  },
                  {
                    title: "Bedroom Ware",
                    description: "Complete bedroom furniture sets and accessories.",
                    image: "/products/bed 2.jpeg",
                    tag: "Furniture",
                  },
                  {
                    title: "Lounge Ware",
                    description: "Comfortable and stylish living room furniture.",
                    image: "/products/rsz_2bedroom-2-1.webp",
                    tag: "Furniture",
                  },
                  {
                    title: "Kitchen Ware",
                    description: "Modern kitchen appliances and cookware sets.",
                    image: "/products/pc2.jpeg",
                    tag: "Kitchen",
                  },
                  {
                    title: "Solar Systems",
                    description: "Sustainable solar energy solutions for your home.",
                    image: "/products/Mecer-portable-inverter-1024x682.webp",
                    tag: "Energy",
                  },
                  {
                    title: "Motor Care",
                    description: "Automotive accessories and car care products.",
                    image: "/products/router.jpeg",
                    tag: "Automotive",
                  },
                ])
                .map((product, index) => (
                  <Card
                    key={index}
                    className="flex-shrink-0 w-[280px] bg-card backdrop-blur border-border/50 shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 rounded-none"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Tag badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary/90 backdrop-blur-sm text-white text-xs font-medium">
                        {product.tag}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                      <div className="flex items-center text-secondary text-sm font-medium">
                        Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
