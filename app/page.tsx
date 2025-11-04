"use client"

import Link from "next/link"
import Image from "next/image"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Rocket, TrendingUp, Users, Zap, ArrowRight } from "lucide-react"

function AnimatedText() {
  const words = ["Ngwavha  ", "Spina", "Hustle"]
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block relative h-[1.2em] min-w-[200px] align-middle">
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
              <div className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-medium">
                Empowering Zimbabwean Entrepreneurs
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                Unlock Infinite Possibilities for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary text-glow-blue">
                  Your Business
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We help your business go beyond limits by providing innovative microfinancing solutions, futuristic
                strategies, and measurable results that make you shine among the stars.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 shadow-lg">
                  <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Businesses Funded</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-secondary">$2M+</div>
                  <div className="text-sm text-muted-foreground">Capital Deployed</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Main featured image */}
              <div className="absolute top-0 right-0 w-[70%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30 glow-orange group">
                <Image
                  src="/hustles/food-truck.png"
                  alt="Food Truck Business"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Mobile Food Services</p>
                  <p className="text-white/80 text-sm">Turn your passion into profit</p>
                </div>
              </div>

              {/* Secondary image - bottom left */}
              <div className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary/30 glow-blue group">
                <Image
                  src="/hustles/hair-barbering.png"
                  alt="Hair Barbering"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">Hair & Beauty</p>
                  <p className="text-white/80 text-sm">Style meets success</p>
                </div>
              </div>

              {/* Small accent image - middle right */}
              <div className="absolute top-[45%] right-[5%] w-[35%] h-[30%] rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 group z-20">
                <Image
                  src="/hustles/tomato-farming.png"
                  alt="Farming"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white font-semibold text-sm">Agriculture</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute top-[30%] left-[10%] bg-card/90 backdrop-blur-md border border-border rounded-xl p-4 shadow-xl z-30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Fast Approval</p>
                    <p className="text-xs text-muted-foreground">Within 72 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ngwavha like others - Hustles Showcase */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <AnimatedText /> <span className="text-primary ml-4">like others!!!</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real businesses, real success stories. See what&apos;s possible when you partner with MicroBiz
            </p>
          </div>

          {/* Scrolling Hustles */}
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex gap-6 animate-scroll-right">
              {[
                {
                  title: "Hair Barbering",
                  description: "Professional hair cutting and styling services for the community.",
                  image: "/hustles/hair-barbering.png",
                  tag: "Service",
                },
                {
                  title: "Car Wash",
                  description: "Mobile and stationary car cleaning services.",
                  image: "/hustles/car-wash.png",
                  tag: "Service",
                },
                {
                  title: "Tomato Farming",
                  description: "Fresh tomato production for local markets.",
                  image: "/hustles/tomato-farming.png",
                  tag: "Agriculture",
                },
                {
                  title: "Cabbage Farming",
                  description: "Quality cabbage cultivation for retail and wholesale.",
                  image: "/hustles/cabbage-farming.png",
                  tag: "Agriculture",
                },
                {
                  title: "Chicken Rearing",
                  description: "Poultry farming for eggs and meat production.",
                  image: "/hustles/chicken-rearing.png",
                  tag: "Agriculture",
                },
                {
                  title: "Construction",
                  description: "Building and renovation services.",
                  image: "/hustles/construction.png",
                  tag: "Construction",
                },
                {
                  title: "Food Truck",
                  description: "Mobile food services and catering.",
                  image: "/hustles/food-truck.png",
                  tag: "Food & Beverage",
                },
              ]
                .concat([
                  {
                    title: "Hair Barbering",
                    description: "Professional hair cutting and styling services for the community.",
                    image: "/hustles/hair-barbering.png",
                    tag: "Service",
                  },
                  {
                    title: "Car Wash",
                    description: "Mobile and stationary car cleaning services.",
                    image: "/hustles/car-wash.png",
                    tag: "Service",
                  },
                  {
                    title: "Tomato Farming",
                    description: "Fresh tomato production for local markets.",
                    image: "/hustles/tomato-farming.png",
                    tag: "Agriculture",
                  },
                  {
                    title: "Cabbage Farming",
                    description: "Quality cabbage cultivation for retail and wholesale.",
                    image: "/hustles/cabbage-farming.png",
                    tag: "Agriculture",
                  },
                  {
                    title: "Chicken Rearing",
                    description: "Poultry farming for eggs and meat production.",
                    image: "/hustles/chicken-rearing.png",
                    tag: "Agriculture",
                  },
                  {
                    title: "Construction",
                    description: "Building and renovation services.",
                    image: "/hustles/construction.png",
                    tag: "Construction",
                  },
                  {
                    title: "Food Truck",
                    description: "Mobile food services and catering.",
                    image: "/hustles/food-truck.png",
                    tag: "Food & Beverage",
                  },
                ])
                .map((hustle, index) => (
                  <Card
                    key={index}
                    className="flex-shrink-0 w-[320px] bg-card backdrop-blur border-border/50 shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative h-56 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                      <Image
                        src={hustle.image}
                        alt={hustle.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Tag badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary/90 backdrop-blur-sm text-white text-xs font-medium">
                        {hustle.tag}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {hustle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{hustle.description}</p>
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

      {/* How to Get Started */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              How to <span className="text-primary">Get Started</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Starting your journey with MicroBiz is simple and straightforward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Browse Our Products",
                description: "Explore our range of microfinancing solutions tailored for different business needs.",
              },
              {
                step: "02",
                title: "Submit Your Application",
                description: "Fill out a simple application form on our partner portal with your business details.",
              },
              {
                step: "03",
                title: "Get Funded & Grow",
                description: "Once approved, receive your funding and start building your dream business.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-secondary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-secondary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
