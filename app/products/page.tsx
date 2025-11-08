"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import React from "react"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      name: "Communications Gadgets",
      image: "/products/iphone14.webp",
      description: "Latest smartphones, tablets, and communication devices to keep you connected.",
      category: "Electronics"
    },
    {
      name: "Bedroom Ware",
      image: "/products/bed 2.jpeg",
      description: "Complete bedroom furniture sets including beds, wardrobes, and dressers.",
      category: "Furniture"
    },
    {
      name: "Lounge Ware",
      image: "/products/rsz_2bedroom-2-1.webp",
      description: "Comfortable and stylish living room furniture for the whole family.",
      category: "Furniture"
    },
    {
      name: "Kitchen Ware",
      image: "/products/laptop.jpeg",
      description: "Modern kitchen appliances and cookware for efficient cooking.",
      category: "Appliances"
    },
    {
      name: "Solar Systems",
      image: "/products/solar-panels-roof-solar-cell.jpg",
      description: "Sustainable solar energy solutions to power your home efficiently.",
      category: "Energy"
    },
    {
      name: "Motor Care",
      image: "/products/router.jpeg",
      description: "Automotive accessories and car care products for vehicle maintenance.",
      category: "Automotive"
    },
  ]

  const categories = React.useMemo(() => [
    "All",
    ...Array.from(new Set(products.map((p) => p.category)))
  ], [products])

  const [activeCategory, setActiveCategory] = React.useState<string>("All")

  const filteredProducts = React.useMemo(
    () => (activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)),
    [activeCategory, products]
  )

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      {/* Compact catalogue header + filters */}
      <section className="px-6 md:px-8 lg:px-12 pt-6 pb-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Catalogue</h1>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full border text-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-secondary text-white border-secondary shadow-sm"
                    : "bg-white text-secondary border-secondary/20 hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-white luxury-border hover:luxury-shadow-lg hover:-translate-y-1 transition-all duration-300 group rounded-sm"
              >
                {/* Image Section */}
                <div className="relative h-72 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-sm">
                    {product.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <Button 
                      asChild 
                      className="w-full bg-primary hover:bg-primary/90 text-white py-6 luxury-shadow hover:scale-105 transition-all duration-300"
                    >
                      <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                        Buy On Credit <ArrowRight className="ml-2 w-5 h-5" />
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline"
                      className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white py-6 transition-all duration-300"
                    >
                      <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                        Buy With Cash Now
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Explore our full range of products on our shopping platform
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 luxury-shadow-lg hover:scale-105 transition-all duration-300"
          >
            <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
              Visit Our Shop <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

