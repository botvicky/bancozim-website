import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, ArrowRight, Briefcase, GraduationCap, CreditCard, BarChart3, HandHeart } from "lucide-react"

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-12 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              What <span className="text-primary">We Do</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide quality homeware and allied products through innovative hire purchase solutions, making modern living accessible to every Zimbabwean family
            </p>
          </div>

          {/* Five Key Service Areas */}
          <div className="space-y-8">
            {/* Service 1 */}
            <div className="group">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    <span className="text-primary">1.</span> Quality Product Range
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive selection of communications gadgets, bedroom ware, lounge ware, kitchen ware, solar systems, and motor care products.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card/30 backdrop-blur border border-secondary/20 hover:border-secondary/50 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    <span className="text-secondary">2.</span> Customer Education & Support
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Product Guidance:</span> Expert advice on selecting the right products for your home
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Financial Literacy:</span> Education on hire purchase terms and financial planning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    <span className="text-primary">3.</span> Flexible Hire Purchase Plans
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Accessible payment terms designed for Zimbabwean families:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Minimal down payments</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Flexible repayment periods</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Competitive interest rates</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Quick approval process</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card/30 backdrop-blur border border-secondary/20 hover:border-secondary/50 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    <span className="text-secondary">4.</span> Digital Platform & Branches
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Trans-provincial outreach through our physical branch networks and comprehensive digital online presence for easy access to our products and services.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="group">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HandHeart className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    <span className="text-primary">5.</span> After-Sales Support
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive warranty support, maintenance services, and customer care to ensure your satisfaction and create meaningful value for all stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary/20 to-transparent blur-2xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-blue mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Transform Your Home <span className="text-secondary text-glow-blue">With Quality Living</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Partner with BancoZim to access superior, modern homeware through flexible hire purchase solutions that make quality living affordable for every Zimbabwean family.
            </p>

            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 mt-6">
              <a href="https://bancosystem.co.zw" target="_blank" rel="noopener noreferrer">
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
