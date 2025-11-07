import { Card } from "@/components/ui/card"
import { Target, Award, Globe, Users, Briefcase, Heart, TrendingUp, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              About <span className="text-primary text-glow-orange">BancoZim</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Increasing your customer's quality of life through the delivery of superior, modern homeware and allied products via innovative hire purchase microcredit solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Us - Redesigned */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BancoZim is Zimbabwe's leading provider of modern homeware and allied products through innovative hire purchase solutions. 
              We exist to increase our customers' quality of life by making superior, modern homeware accessible to every Zimbabwean family.
              Our comprehensive product range includes communications gadgets, bedroom ware, lounge ware, kitchen ware, solar systems, and motor care products.
            </p>
          </div>

          {/* What We Offer */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-secondary text-center">What We Offer</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-secondary/20 hover:border-secondary/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Communications Gadgets</h4>
                    <p className="text-sm text-muted-foreground">Latest smartphones, tablets, and communication devices.</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Bedroom & Lounge Ware</h4>
                    <p className="text-sm text-muted-foreground">Complete furniture sets for comfortable living spaces.</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Kitchen Ware</h4>
                    <p className="text-sm text-muted-foreground">Modern kitchen appliances and cookware for efficient cooking.</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-secondary/20 hover:border-secondary/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solar Systems</h4>
                    <p className="text-sm text-muted-foreground">Sustainable solar energy solutions for your home.</p>
                  </div>
                </div>
              </div>

              <div className="group md:col-span-2">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Motor Care Products</h4>
                    <p className="text-sm text-muted-foreground">Automotive accessories and car care products for vehicle maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Approach */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border border-primary/20 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground text-center">Our Approach</h3>
            <p className="text-muted-foreground leading-relaxed text-center mb-4">
              Our approach is customer-centric: we focus on accessibility and affordability through innovative hire purchase solutions. 
              We believe everyone deserves access to quality homeware that enhances their daily life, regardless of their current financial situation.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Over the years, BancoZim has helped thousands of Zimbabwean families transform their homes with quality products 
              through flexible payment plans that work for every budget.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values - R.I.G.H.T displayed vertically */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary text-center">Our Values</h2>
          <p className="text-muted-foreground mb-12 text-center max-w-3xl mx-auto text-lg">
            In pursuit of our vision and mission, our professional code of conduct is anchored on the R.I.G.H.T values.
          </p>
          
          {/* Vertical R.I.G.H.T Layout */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* R - Reliability */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                R
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-foreground mb-2">Reliability</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To strive for the highest levels of reliability in all facets of our business by delivering what we promise on time.
                </p>
              </div>
            </div>

            {/* I - Integrity */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-secondary/20 hover:border-secondary/50 transition-all duration-300 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                I
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-foreground mb-2">Integrity</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To render integrity as the hallmark of our business conduct by doing what we say we will do.
                </p>
              </div>
            </div>

            {/* G - Genuineness */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                G
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-foreground mb-2">Genuineness</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To discharge our mandate with genuineness in all our dealings by executing tasks with competence.
                </p>
              </div>
            </div>

            {/* H - Honesty */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-secondary/20 hover:border-secondary/50 transition-all duration-300 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                H
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-foreground mb-2">Honesty</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To handle the affairs of the business with honesty at all times by acting in a responsible and accountable manner.
                </p>
              </div>
            </div>

            {/* T - Tenacity */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                T
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-foreground mb-2">Tenacity</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To pursue every set goal with tenacity by completing set objectives with speed and aggression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Stacked Vertically */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl space-y-8">
          {/* Our Mission */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border border-secondary/20">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-10 h-10 text-secondary" />
              <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To increase our customer's quality of life through the delivery of superior, modern homeware and allied products 
              and to create meaningful value for all stakeholders.
            </p>
          </div>

          {/* Our Vision */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-10 h-10 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be a market leader in the provision of hire purchase microcredit solutions in Zimbabwe, whose dominance 
              shall be measured by trans-provincial outreach presence, physical branch networks and digital online visibility.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
