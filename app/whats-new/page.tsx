import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"

export default function WhatsNewPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              What's <span className="text-primary text-glow-orange">New</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Stay updated with the latest product arrivals, promotions, and upcoming events from BancoZim
            </p>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Latest <span className="text-secondary">Updates</span>
          </h2>

          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-muted-foreground">October 15, 2025</span>
                    <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">New</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    New Solar System Models Now Available
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We're excited to announce the arrival of our latest solar energy systems with increased capacity
                    and efficiency. Now offering 5kW to 15kW systems with flexible on-credit plans starting from
                    just $200/month!
                  </p>
                  <Button variant="link" className="text-primary p-0 h-auto">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-secondary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-muted-foreground">October 1, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Smart Home Kitchen Appliances Collection</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Transform your kitchen with our new smart appliance collection! Browse the latest refrigerators,
                    microwaves, air fryers, and more. All available through our convenient on-credit plans with
                    zero down payment options.
                  </p>
                  <Button variant="link" className="text-secondary p-0 h-auto">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-muted-foreground">September 20, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Latest Samsung & iPhone Models in Stock
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Get the latest flagship smartphones from Samsung Galaxy S25 series and iPhone 16 series. Trade in
                    your old device for instant credit and pay the rest through our flexible monthly plans!
                  </p>
                  <Button variant="link" className="text-primary p-0 h-auto">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Upcoming <span className="text-secondary">Events</span>
          </h2>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-primary flex flex-col items-center justify-center text-white">
                    <span className="text-2xl font-bold">25</span>
                    <span className="text-xs">NOV</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">BancoZim Homeware Expo - Harare</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Rainbow Towers Hotel, Harare</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Experience our complete homeware collection in person! Browse bedroom sets, kitchen appliances,
                    solar systems, and more. Enjoy exclusive expo discounts and instant on-credit approvals on site!
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Register Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-transparent border-secondary/30">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-secondary flex flex-col items-center justify-center text-white">
                    <span className="text-2xl font-bold">10</span>
                    <span className="text-xs">DEC</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Solar Energy Solutions Workshop - Bulawayo</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">10:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Bulawayo Convention Centre</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Free workshop on solar energy solutions for your home. Learn about system sizing, installation,
                    maintenance, and cost savings. Get expert consultations and special workshop-only financing offers!
                  </p>
                  <Button
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
                  >
                    Register Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-primary flex flex-col items-center justify-center text-white">
                    <span className="text-2xl font-bold">15</span>
                    <span className="text-xs">JAN</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Smart Home Technology Showcase</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Meikles Hotel, Harare</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Experience the future of home living! See live demonstrations of smart TVs, home security systems,
                    automated appliances, and integrated solar solutions. Pre-order with exclusive show pricing!
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Register Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
