import { Card } from "@/components/ui/card"
import { Target, Award, Globe, Users, Briefcase, Heart, TrendingUp, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm">ABOUT BANCOZIM</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary">
              Zimbabwe's Leading On‑Credit Homeware Provider
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Increasing your quality of life through the delivery of superior, modern homeware and allied products 
              with simple, transparent on‑credit plans.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="px-4 py-24 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Who We Are</h2>
              <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                <p>
                  BancoZim is Zimbabwe's leading provider of modern homeware and allied products with innovative on‑credit plans. 
                  We exist to increase our customers' quality of life by making superior, modern homeware accessible to every Zimbabwean family.
                </p>
                <p>
                  Our comprehensive product range includes communications gadgets, bedroom ware, lounge ware, kitchen ware, 
                  solar systems, and motor care products—all available through flexible payment plans that work for your budget.
                </p>
                <p className="font-semibold text-secondary">
                  Over the years, BancoZim has helped thousands of Zimbabwean families transform their homes with quality products 
                  through accessible on‑credit plans.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-lg luxury-shadow text-white">
                <div className="text-5xl font-bold mb-2">50K+</div>
                <div className="text-white/90">Happy Customers</div>
              </div>
              <div className="bg-gradient-to-br from-secondary to-secondary/80 p-8 rounded-lg luxury-shadow text-white">
                <div className="text-5xl font-bold mb-2">10+</div>
                <div className="text-white/90">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-secondary to-secondary/80 p-8 rounded-lg luxury-shadow text-white">
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-white/90">Satisfaction</div>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-lg luxury-shadow text-white">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-white/90">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-4 py-24 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm">OUR PRODUCTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">What We Offer</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Comprehensive range of quality homeware and appliances for every room in your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-8 bg-white border-0 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Communications Gadgets</h4>
              <p className="text-foreground/70 leading-relaxed">
                Latest smartphones, tablets, and communication devices to keep you connected.
              </p>
            </Card>

            <Card className="p-8 bg-white border-0 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Bedroom & Lounge Ware</h4>
              <p className="text-foreground/70 leading-relaxed">
                Complete furniture sets including beds, sofas, and entertainment units.
              </p>
            </Card>

            <Card className="p-8 bg-white border-0 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Kitchen Ware</h4>
              <p className="text-foreground/70 leading-relaxed">
                Modern kitchen appliances and cookware for efficient, enjoyable cooking.
              </p>
            </Card>

            <Card className="p-8 bg-white border-0 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Solar Systems</h4>
              <p className="text-foreground/70 leading-relaxed">
                Sustainable solar energy solutions to power your home reliably.
              </p>
            </Card>

            <Card className="p-8 bg-white border-0 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Motor Care Products</h4>
              <p className="text-foreground/70 leading-relaxed">
                Automotive accessories and car care products for vehicle maintenance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-4 py-24 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Our Approach</h2>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-12 rounded-lg border border-primary/20">
            <p className="text-xl text-foreground/80 leading-relaxed text-center mb-6">
              Our approach is customer-centric: we focus on accessibility and affordability through innovative on‑credit plans. 
              We believe everyone deserves access to quality homeware that enhances their daily life, regardless of their current financial situation.
            </p>
            <p className="text-xl text-foreground/80 leading-relaxed text-center">
              Through flexible payment plans and exceptional customer service, BancoZim makes it possible for every Zimbabwean family 
              to own quality products that transform their homes and improve their quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values - R.I.G.H.T */}
      <section className="px-4 py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm">OUR VALUES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">The R.I.G.H.T Way</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Our professional code of conduct is anchored on the R.I.G.H.T values that guide everything we do.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* R - Reliability */}
            <Card className="p-8 bg-white border-0 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-3xl luxury-shadow group-hover:scale-110 transition-transform">
                  R
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-secondary mb-3">Reliability</h4>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    To strive for the highest levels of reliability in all facets of our business by delivering what we promise on time.
                  </p>
                </div>
              </div>
            </Card>

            {/* I - Integrity */}
            <Card className="p-8 bg-white border-0 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center font-bold text-3xl luxury-shadow group-hover:scale-110 transition-transform">
                  I
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-secondary mb-3">Integrity</h4>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    To render integrity as the hallmark of our business conduct by doing what we say we will do.
                  </p>
                </div>
              </div>
            </Card>

            {/* G - Genuineness */}
            <Card className="p-8 bg-white border-0 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-3xl luxury-shadow group-hover:scale-110 transition-transform">
                  G
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-secondary mb-3">Genuineness</h4>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    To discharge our mandate with genuineness in all our dealings by executing tasks with competence.
                  </p>
                </div>
              </div>
            </Card>

            {/* H - Honesty */}
            <Card className="p-8 bg-white border-0 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center font-bold text-3xl luxury-shadow group-hover:scale-110 transition-transform">
                  H
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-secondary mb-3">Honesty</h4>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    To handle the affairs of the business with honesty at all times by acting in a responsible and accountable manner.
                  </p>
                </div>
              </div>
            </Card>

            {/* T - Tenacity */}
            <Card className="p-8 bg-white border-0 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-3xl luxury-shadow group-hover:scale-110 transition-transform">
                  T
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-secondary mb-3">Tenacity</h4>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    To pursue every set goal with tenacity by completing set objectives with speed and aggression.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-24 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Our Mission */}
            <Card className="p-10 bg-gradient-to-br from-secondary/5 to-secondary/10 border-0 luxury-shadow hover:luxury-shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center luxury-shadow">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-secondary">Our Mission</h3>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                To increase our customer's quality of life through the delivery of superior, modern homeware and allied products 
                and to create meaningful value for all stakeholders.
              </p>
            </Card>

            {/* Our Vision */}
            <Card className="p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-0 luxury-shadow hover:luxury-shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center luxury-shadow">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-secondary">Our Vision</h3>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                To be a market leader in the provision of on‑credit homeware solutions in Zimbabwe, whose dominance 
                shall be measured by trans-provincial outreach presence, physical branch networks and digital online visibility.
              </p>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
