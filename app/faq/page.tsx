import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-medium mb-4">
              FAQ
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Everything You Need to Know{" "}
              <span className="text-secondary text-glow-blue">Before Launching with Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Get clarity on how we work, what we offer, and how we can help your business reach new heights.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                What is hire purchase and how does it work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Hire purchase is a flexible payment plan that allows you to own quality homeware products by paying in
                affordable monthly installments. You select your desired product, make a minimal down payment, and pay
                the rest over an agreed period. Once all payments are complete, the product is fully yours!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                What products does BancoZim offer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                We offer 6 main product categories: Communications Gadgets (smartphones, tablets), Bedroom Ware
                (furniture sets, beds, wardrobes), Lounge Ware (sofas, entertainment units), Kitchen Ware (appliances,
                cookware), Solar Systems (home energy solutions), and Motor Care (automotive accessories and products).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                How long does the approval process take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Our streamlined approval process is designed to be quick and efficient. Most applications are reviewed
                and approved within 24-48 hours. Once approved, you can collect your products immediately or schedule a
                delivery at your convenience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                What makes BancoZim different from other retailers?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                BancoZim combines quality products with innovative hire purchase solutions that make homeware accessible
                to every Zimbabwean family. We offer flexible payment terms, competitive interest rates, minimal down
                payments, no hidden fees, and comprehensive after-sales support. Our mission is to increase your quality
                of life through superior, modern homeware.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                Do I need a down payment?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Down payment requirements vary by product and payment plan. Some promotional offers feature zero down
                payment options, while others require a minimal deposit (typically 10-20% of the product value). Our
                team will work with you to find a payment structure that fits your budget.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                What are BancoZim's R.I.G.H.T values?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Our R.I.G.H.T values guide everything we do: Reliability (delivering what we promise on time), Integrity
                (doing what we say we will do), Genuineness (executing tasks with competence), Honesty (acting
                responsibly and accountably), and Tenacity (completing objectives with speed and determination). These
                values ensure you receive exceptional service.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                What are the repayment terms?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                We offer flexible repayment periods ranging from 6 to 36 months, depending on the product and your
                preference. Monthly installments are calculated to be affordable and sustainable for Zimbabwean families.
                You can choose to pay monthly, and early settlement is always welcomed with no penalties.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                Are there any hidden fees or charges?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Absolutely not. We believe in transparent pricing with no surprise charges. All fees, interest rates, and
                payment terms are clearly outlined before you commit. What you see in your agreement is exactly what you
                pay—no hidden costs or surprise fees.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                Do you offer warranties on products?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes! All products come with manufacturer warranties. Additionally, we provide comprehensive after-sales
                support. If you experience any issues with your product, our customer service team is here to help.
                Warranty periods vary by product—ask our team for specific details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                Can I shop online or do I need to visit a branch?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Both! We have physical branches across Zimbabwe where you can see and touch products before purchasing.
                We also offer a robust online shopping platform at bancosystem.co.zw where you can browse our full
                catalog, submit applications, and arrange delivery—all from the comfort of your home.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                How can I get started with BancoZim?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Getting started is easy! Browse our products online or visit any of our branches. Once you've selected
                your desired products, click "Shop Now" to visit bancosystem.co.zw and complete your application. Our
                team will review your application and contact you within 24-48 hours. You can also chat with Adala, our
                AI assistant, for instant answers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                Do you deliver products to my location?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes! We offer delivery services across Zimbabwe. Delivery fees vary by location and product size. For
                large items like furniture and solar systems, we provide professional installation services as well.
                Contact our team for specific delivery pricing to your area.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                What if I want to upgrade or exchange a product?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                We want you to be completely satisfied with your purchase. If you wish to upgrade to a better model or
                exchange a product, contact our customer service team within 30 days of purchase. Terms and conditions
                apply, and our team will guide you through the process to find the best solution for you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
