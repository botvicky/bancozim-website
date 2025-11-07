import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      name: "Communications Gadgets",
      image: "/products/communications.png",
      description: "Latest smartphones, tablets, and communication devices to keep you connected.",
    },
    {
      name: "Bedroom Ware",
      image: "/products/bedroom-ware.png",
      description: "Complete bedroom furniture sets including beds, wardrobes, and dressers.",
    },
    {
      name: "Lounge Ware",
      image: "/products/lounge-ware.png",
      description: "Comfortable and stylish living room furniture for the whole family.",
    },
    {
      name: "Kitchen Ware",
      image: "/products/kitchen-ware.png",
      description: "Modern kitchen appliances and cookware for efficient cooking.",
    },
    {
      name: "Solar Systems",
      image: "/products/solar-systems.png",
      description: "Sustainable solar energy solutions to power your home efficiently.",
    },
    {
      name: "Motor Care",
      image: "/products/motor-care.png",
      description: "Automotive accessories and car care products for vehicle maintenance.",
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              Quality <span className="text-secondary text-glow-blue">Homeware Catalogue</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Discover our comprehensive range of modern homeware and allied products. All available through flexible 
              hire purchase solutions that make quality living accessible to every Zimbabwean family.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group shadow-lg hover:shadow-2xl"
              >
                {/* Image Section - Full width */}
                <div className="relative h-80 w-full bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Product name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {product.name}
                    </h3>
                    <p className="text-white/90 text-sm mt-2 drop-shadow">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="p-6 space-y-3">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6">
                    <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                      Buy on hire purchase <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full text-lg py-6">
                    <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                      Buy with cash <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

