import { type NextRequest, NextResponse } from "next/server"

// Knowledge base about BancoZim
const BANCOZIM_KNOWLEDGE = `
BancoZim is Zimbabwe's leading provider of modern homeware and allied products through innovative on-credit solutions.

MISSION:
To increase our customer's quality of life through the delivery of superior, modern homeware and allied products and to create meaningful value for all stakeholders.

VISION:
To be a market leader in the provision of on-credit homeware solutions in Zimbabwe, whose dominance shall be measured by trans-provincial outreach presence, physical branch networks and digital online visibility.

PRODUCT CATEGORIES:
1. Communications Gadgets: Latest smartphones, tablets, and communication devices
2. Bedroom Ware: Complete bedroom furniture sets including beds, wardrobes, and dressers
3. Lounge Ware: Comfortable and stylish living room furniture for the whole family
4. Kitchen Ware: Modern kitchen appliances and cookware for efficient cooking
5. Solar Systems: Sustainable solar energy solutions to power your home efficiently
6. Motor Care: Automotive accessories and car care products for vehicle maintenance

KEY FEATURES:
- Flexible on-credit plans
- Minimal down payments
- Competitive interest rates
- Quick approval process
- Quality modern homeware
- Trans-provincial branch network
- Digital online shopping platform
- Comprehensive warranty support
- After-sales service

PAYMENT SOLUTIONS:
- Accessible payment terms for Zimbabwean families
- Flexible repayment periods
- Affordable monthly installments
- No hidden fees
- Transparent pricing

CONTACT:
- Phone: (0242) 744 840
- Email: info@bancozim.co.zw
- Location: 5th Floor Pockets Building, 50 Jason Moyo Street, P.O Box CY 2222, Harare
- Hours: Mon-Fri 8AM-5PM, Sat 8AM-1PM

ABOUT BANCOZIM:
BancoZim is dedicated to making quality homeware accessible to every Zimbabwean family through flexible on-credit plans. We help thousands of families transform their homes with superior, modern products.

OUR VALUES (R.I.G.H.T):
- Reliability: Delivering what we promise on time
- Integrity: Doing what we say we will do
- Genuineness: Executing tasks with competence
- Honesty: Acting in a responsible and accountable manner
- Tenacity: Completing set objectives with speed and aggression
`

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    // Simple rule-based responses for demo purposes
    // In production, you would integrate with OpenAI API here
    const lowerMessage = message.toLowerCase()

    let response = ""

    if (lowerMessage.includes("product") || lowerMessage.includes("category") || lowerMessage.includes("what do you sell")) {
      response =
  "We offer 6 categories of quality homeware products:\n\n1. Communications Gadgets - Latest smartphones, tablets, and devices\n2. Bedroom Ware - Complete bedroom furniture sets\n3. Lounge Ware - Comfortable living room furniture\n4. Kitchen Ware - Modern kitchen appliances and cookware\n5. Solar Systems - Sustainable home energy solutions\n6. Motor Care - Automotive accessories and car care\n\nAll available through flexible on-credit plans. Which category interests you?"
    } else if (lowerMessage.includes("shop") || lowerMessage.includes("buy") || lowerMessage.includes("purchase") || lowerMessage.includes("order")) {
      response =
  "To shop with BancoZim:\n\n1. Browse our product categories on our website\n2. Visit bancosystem.co.zw to place your order\n3. Choose your on-credit payment plan\n4. Quick approval process\n5. Get your products delivered to you\n\nOur flexible payment plans make quality homeware accessible to every family!"
  } else if (lowerMessage.includes("on credit") || lowerMessage.includes("payment") || lowerMessage.includes("installment")) {
      response =
  "Our on-credit plans offer:\n\n✅ Flexible repayment terms\n✅ Minimal down payments\n✅ Affordable monthly installments\n✅ Competitive rates\n✅ No hidden fees\n✅ Transparent pricing\n\nWe work with you to create a payment plan that fits your budget!"
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email") || lowerMessage.includes("location")) {
      response =
        "You can reach us at:\n\n📞 Phone: (0242) 744 840\n📧 Email: info@bancozim.co.zw\n📍 Location: 5th Floor Pockets Building, 50 Jason Moyo Street, P.O Box CY 2222, Harare\n\nOffice Hours:\nMon-Fri: 8:00 AM - 5:00 PM\nSat: 8:00 AM - 1:00 PM\nSun: Closed"
    } else if (lowerMessage.includes("bancozim") || lowerMessage.includes("about") || lowerMessage.includes("who are you")) {
      response =
  "BancoZim is Zimbabwe's leading provider of modern homeware and allied products through innovative on-credit plans. We're dedicated to increasing our customers' quality of life by making superior, modern homeware accessible to every Zimbabwean family. We've helped thousands of families transform their homes with quality products!"
    } else if (lowerMessage.includes("mission") || lowerMessage.includes("vision")) {
      response =
  "🎯 Our Mission:\nTo increase our customer's quality of life through the delivery of superior, modern homeware and allied products.\n\n🏆 Our Vision:\nTo be a market leader in on-credit homeware solutions in Zimbabwe, measured by trans-provincial outreach, physical branch networks, and digital visibility."
    } else if (lowerMessage.includes("solar") || lowerMessage.includes("energy")) {
      response =
  "Our Solar Systems category offers sustainable energy solutions to power your home efficiently. These systems help you:\n\n☀️ Reduce electricity costs\n☀️ Have reliable backup power\n☀️ Go green with renewable energy\n☀️ Increase property value\n\nAll available through our flexible on-credit plans!"
    } else if (lowerMessage.includes("furniture") || lowerMessage.includes("bedroom") || lowerMessage.includes("lounge")) {
      response =
  "We offer complete furniture solutions:\n\n🛏️ Bedroom Ware - Beds, wardrobes, dressers, and complete bedroom sets\n🛋️ Lounge Ware - Comfortable sofas, coffee tables, entertainment units\n\nQuality furniture that transforms your home into a comfortable living space, all available on credit!"
    } else {
      response =
  "Welcome to BancoZim! I'm here to help you learn about our quality homeware products and on-credit plans. I can answer questions about:\n\n• Product categories (gadgets, furniture, kitchen, solar, motor care)\n• On-credit payment plans\n• How to shop with us\n• Contact information\n• Our mission and values\n\nWhat would you like to know?"
    }

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return NextResponse.json({ message: "Sorry, I encountered an error. Please try again." }, { status: 500 })
  }
}
