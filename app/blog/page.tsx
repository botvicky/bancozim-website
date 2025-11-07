import { Card } from "@/components/ui/card"
import { Quote, Calendar, Users } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              Stories & <span className="text-secondary text-glow-blue">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Customer stories, testimonials, and home transformation insights from the BancoZim community
            </p>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Past <span className="text-secondary">Events</span>
          </h2>

          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur border-border">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">September 15, 2025</div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    BancoZim Product Showcase - Harare
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Over 500 families attended our homeware showcase featuring the latest bedroom sets, kitchen appliances,
                    and solar systems. Customers enjoyed live product demonstrations and exclusive event financing with
                    zero down payment options.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      500+ Attendees
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                      Product Showcase
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 rounded-lg bg-gradient-to-br from-secondary/30 to-primary/30 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">August 10, 2025</div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    Solar Energy Solutions Workshop - Bulawayo
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A full-day workshop focused on solar energy for homes. Topics included system sizing, installation
                    best practices, maintenance tips, and maximizing energy savings. Participants received free solar
                    assessments and exclusive workshop pricing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      300+ Attendees
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                      Workshop
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">July 5, 2025</div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Smart Home Technology Expo</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Showcasing the future of home living in Zimbabwe. Customers experienced smart appliances, home
                    automation, energy-efficient solutions, and integrated solar systems. Industry experts provided
                    consultations on modernizing Zimbabwean homes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      400+ Attendees
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                      Expo
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-12 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            Client <span className="text-primary">Testimonials</span>
          </h2>

          {/* Single Row - Scroll Left to Right */}
          <div className="relative">
            <div className="flex gap-6 animate-scroll-right">
              {[
                {
                  name: "Thandiwe Ncube",
                  business: "Harare Homeowner",
                  quote:
                    "BancoZim made it possible for me to furnish my entire bedroom with beautiful furniture through their flexible payment plan. The quality is outstanding!",
                },
                {
                  name: "Simba Mutasa",
                  business: "Chitungwiza Resident",
                  quote:
                    "I installed a 10kW solar system through BancoZim's hire purchase plan. My electricity bills are now zero, and I'm paying less monthly than before!",
                },
                {
                  name: "Grace Moyo",
                  business: "Bulawayo Customer",
                  quote:
                    "The kitchen appliances I got from BancoZim transformed my cooking experience. The payment plan was so affordable, I upgraded my entire kitchen!",
                },
                {
                  name: "Tafadzwa Chikwanha",
                  business: "Gweru Homeowner",
                  quote:
                    "I bought the latest Samsung phone through BancoZim with zero down payment. The process was quick, and the staff was very helpful!",
                },
                {
                  name: "Rudo Sibanda",
                  business: "Mutare Customer",
                  quote:
                    "BancoZim helped me furnish my lounge with a beautiful sofa set. The hire purchase terms fit perfectly within my budget. Highly recommend!",
                },
                {
                  name: "Farai Ndlovu",
                  business: "Masvingo Resident",
                  quote:
                    "From bedroom furniture to kitchen appliances, BancoZim has everything! Their flexible payment options make quality homeware accessible to everyone.",
                },
              ].concat([
                {
                  name: "Thandiwe Ncube",
                  business: "Harare Homeowner",
                  quote:
                    "BancoZim made it possible for me to furnish my entire bedroom with beautiful furniture through their flexible payment plan. The quality is outstanding!",
                },
                {
                  name: "Simba Mutasa",
                  business: "Chitungwiza Resident",
                  quote:
                    "I installed a 10kW solar system through BancoZim's hire purchase plan. My electricity bills are now zero, and I'm paying less monthly than before!",
                },
                {
                  name: "Grace Moyo",
                  business: "Bulawayo Customer",
                  quote:
                    "The kitchen appliances I got from BancoZim transformed my cooking experience. The payment plan was so affordable, I upgraded my entire kitchen!",
                },
                {
                  name: "Tafadzwa Chikwanha",
                  business: "Gweru Homeowner",
                  quote:
                    "I bought the latest Samsung phone through BancoZim with zero down payment. The process was quick, and the staff was very helpful!",
                },
                {
                  name: "Rudo Sibanda",
                  business: "Mutare Customer",
                  quote:
                    "BancoZim helped me furnish my lounge with a beautiful sofa set. The hire purchase terms fit perfectly within my budget. Highly recommend!",
                },
                {
                  name: "Farai Ndlovu",
                  business: "Masvingo Resident",
                  quote:
                    "From bedroom furniture to kitchen appliances, BancoZim has everything! Their flexible payment options make quality homeware accessible to everyone.",
                },
              ]).map((testimonial, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-[400px] p-6 bg-card/50 backdrop-blur border-none shadow-lg"
                >
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-4 italic text-sm">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
              Why Choose <span className="text-primary">BancoZim?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Quality Products</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We offer superior, modern homeware from trusted brands to enhance your quality of life.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Flexible Payment Plans</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Affordable hire purchase solutions with minimal down payments and competitive interest rates.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Trans-Provincial Reach</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Physical branches across Zimbabwe and a robust online shopping platform for convenience.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Customer-Centric Service</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Dedicated support team committed to helping you find the perfect products for your home.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
