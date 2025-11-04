import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Calculator,
  FileText,
  TrendingDown,
  Home as HomeIcon,
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  TrendingUp,
  Check,
  Star,
  Clock,
  Phone,
  Medal,
  LucideMedal,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "approvU - Best Mortgage Rates & Expert Guidance Across Canada",
  description:
    "Find the best mortgage rates in Canada with approvU. Expert guidance for first-time buyers, refinancing, renewals, and investment properties. Get pre-approved in minutes.",
};

export default function Home() {
  return (
    <>
      <Hero
        title="Your Mortgage. Matched to Your Life."
        subtitle="No haggling. No confusion. Just personalized mortgage offers that help you achieve your homeownership dreams."
        ctaText="Get Qualified in Minutes"
        ctaLink="/mortgage/approval/"
        secondaryCTA="Compare Offers"
        secondaryCTALink="/mortgage/rates"
        backgroundImage="/images/hero/hero-family-home.jpg"
      />

      {/* How approvU Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#18768B] text-3xl md:text-4xl font-bold mb-4">
              How approvU Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to your perfect mortgage match
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="relative p-8 hover:shadow-lg hover:border-[#085668] transition-shadow">
              <div className="flex justify-center mb-6 mt-4">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-secondary" />
                </div>
              </div>
              <div className="width-full flex justify-center mb-4">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
              </div>
              <h3 className="text-[#18768B] text-xl font-semibold mb-3 text-center">
                Tell us about you & your goals
              </h3>

              <p className="text-muted-foreground text-center">
                Smart, conversational quiz that learns what matters most to you
              </p>
            </Card>

            {/* Step 2 */}
            <Card className="relative p-8 hover:shadow-lg hover:border-[#FB9851] transition-shadow">
              <div className="flex justify-center mb-6 mt-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div className="width-full flex justify-center mb-4">
                <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
              </div>
              <h3 className="text-[#18768B] text-xl font-semibold mb-3 text-center">
                Get Matched to Real Mortgage Offers
              </h3>
              <p className="text-muted-foreground text-center">
                Based on your real profile, not estimates. See actual rates and
                terms
              </p>
            </Card>

            {/* Step 3 */}
            <Card className="relative p-8 hover:shadow-lg hover:border-[#085668] transition-shadow">
              <div className="flex justify-center mb-6 mt-4">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-success" />
                </div>
              </div>
              <div className="width-full flex justify-center mb-4">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
              </div>
              <h3 className="text-[#18768B] text-xl font-semibold mb-3 text-center">
                Enjoy Personalized Concierge Guidance
              </h3>
              <p className="text-muted-foreground text-center">
                Human + Tech support, zero-pressure. We're here when you need us
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose approvU */}
      <section className="py-20 px-4 bg-gradient-to-br from-accent/5 to-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#18768B] text-3xl md:text-4xl font-bold mb-4">
              Why Choose approvU
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience mortgage lending reimagined
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:border-[#FB9851] transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-[10px] bg-accent/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-accent" />
                </div>
              </div>
              <h3 className="text-[#18768B] text-xl font-semibold mb-3 text-center">
                Personalized Offers
              </h3>
              <p className="text-muted-foreground text-center">
                Real mortgage offers based on your unique profile, not generic
                estimates
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:border-[#085668] transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-[10px] bg-secondary/10 flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-secondary" />
                </div>
              </div>
              <h3 className="text-[#18768B] text-xl font-semibold mb-3 text-center">
                Concierge Guidance
              </h3>
              <p className="text-muted-foreground text-center">
                Human + AI support when you need it, zero pressure when you
                don't
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:border-[#085668] transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-[10px] bg-secondary/10 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-success" />
                </div>
              </div>
              <h3 className="text-[#18768B] text-xl font-semibold mb-3 text-center">
                No Sales Pressure
              </h3>
              <p className="text-muted-foreground text-center">
                Work at your own pace with complete transparency and trust
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#18768B] text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive mortgage solutions for every stage of your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* First-Time Home Buyers */}
            <Card className="p-8 hover:shadow-xl hover:border-[#FB9851] transition-all group">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HomeIcon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                First-Time Home Purchase
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Navigate your first home purchase with confidence. Get
                personalized guidance, competitive rates, and exclusive
                first-time buyer incentives.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">
                    Down payment assistance programs
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">
                    Pre-approval with rate guarantee
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Free home buying education</span>
                </li>
              </ul>
            </Card>

            {/* Refinancing */}
            <Card className="p-8 hover:shadow-xl  hover:border-[#085668]  transition-all group">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Mortgage Refinancing
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Optimize your existing mortgage with better rates, terms, or
                access your home equity for renovations and investments.{" "}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm">Rate reduction analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm">Home equity access options</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm">Debt consolidation strategies</span>
                </li>
              </ul>
            </Card>

            {/* Investment Properties */}
            <Card className="p-8 hover:shadow-xl  hover:border-[#085668]  transition-all group">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-success to-success/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Investment Properties
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Build your real estate portfolio with specialized investment
                property financing and rental income analysis.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm">Rental income qualification</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm">
                    Portfolio expansion strategies
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm">Commercial property options</span>
                </li>
              </ul>
            </Card>

            {/* Mortgage Protection */}
            <Card className="p-8 hover:shadow-xl  hover:border-[#085668]  transition-all group">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-highlight to-highlight/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-10 h-10 text-success" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Mortgage Protection
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Protect your investment with comprehensive mortgage insurance
                and life protection solutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-highlight flex-shrink-0" />
                  <span className="text-sm">Mortgage life insurance</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-highlight flex-shrink-0" />
                  <span className="text-sm">Disability income protection</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-highlight flex-shrink-0" />
                  <span className="text-sm">Home and property insurance</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Reviews */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#18768B] text-3xl md:text-4xl font-bold mb-4">
              Real Reviews from Real Clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what homeowners are saying about their approvU experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Review 1 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-highlight text-highlight"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Fast, transparent, and no sales pressure! Got my mortgage
                approved in 3 days." 🎉
              </p>
              <div className="text-[#18768B] font-semibold">Sarah M.</div>
              <div className="text-sm text-muted-foreground">
                First-time buyer, Toronto
              </div>
            </Card>

            {/* Review 2 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-highlight text-highlight"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Finally found a mortgage platform that actually saves me money.
                The incentives are real!" 💰
              </p>
              <div className="text-[#18768B] font-semibold">Michael C.</div>
              <div className="text-sm text-muted-foreground">
                Refinance client, Vancouver
              </div>
            </Card>

            {/* Review 3 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-highlight text-highlight"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "The concierge service is amazing. They answered all my
                questions without any pressure." ⭐
              </p>
              <div className="text-[#18768B] font-semibold">Lisa R.</div>
              <div className="text-sm text-muted-foreground">
                Investment property, Calgary
              </div>
            </Card>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-success/10 flex items-center justify-center">
                <LucideMedal className="w-6 h-6 text-success" />
              </div>
              <div>
                <div className="font-semibold">Trustpilot Excellent</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-success/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-success" />
              </div>
              <div>
                <div className="font-semibold">4.9/5 Google Reviews</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-success/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <div>
                <div className="font-semibold">FSRA Licensed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lenders We Work With */}
      <section className="py-20 px-4 bg-gradient-to-br from-success/10 via-secondary/10 to-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Canada's Leading Lenders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Over 15,000 deals matched to 25+ lenders nationwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {[
              "TD Bank",
              "RBC",
              "BMO",
              "Scotiabank",
              "CIBC",
              "MCAP",
              "First National",
              "CMLS",
              "Meridian",
              "DUCA",
              "RFA",
              "B2B Bank",
            ].map((lender) => (
              <Card
                key={lender}
                className="py-6 px-4 bg-white hover:shadow-lg hover:border-[#348699] text-[#348699] transition-all hover:scale-105"
              >
                <div className="w-full text-center font-semibold text-sm">
                  {lender}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Badge variant="secondary" className="text-base px-6 py-2">
              <Shield className="w-4 h-4 mr-2" />
              FSRA Licensed & Regulated
            </Badge>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about working with approvU
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full mb-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                How is approvU different from a mortgage broker?
              </AccordionTrigger>
              <AccordionContent>
                Unlike traditional brokers, we use technology to match you with
                personalized offers from multiple lenders without any sales
                pressure. Our concierge service provides guidance when you need
                it, but you're always in control of the process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Is it safe to submit my information?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely. We use bank-level encryption and are fully licensed
                with FSRA. Your information is secure and never shared without
                your explicit consent. We're committed to protecting your
                privacy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Will this impact my credit score?
              </AccordionTrigger>
              <AccordionContent>
                No, getting qualified through approvU does not impact your
                credit score. We only perform a soft credit check initially,
                which doesn't affect your rating. Hard credit checks only happen
                when you're ready to proceed with a specific lender.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Who are the advisors helping me?
              </AccordionTrigger>
              <AccordionContent>
                Our mortgage concierges are licensed professionals with years of
                experience in Canadian mortgage lending. They're supported by
                our AI technology to provide you with the best possible guidance
                and options.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with Mortgage Concierge
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-accent via-accent/90 to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm"
          >
            ✨ Over 25,000 Happy Homeowners
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to find your{" "}
            <span className="text-highlight">best mortgage match</span>?
          </h2>
          <p className="text-xl mb-8 text-white/95">
            Join thousands of Canadians who've trusted approvU to simplify their
            mortgage journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              asChild
              className="text-lg px-8 bg-white text-primary hover:bg-white/90 shadow-xl"
            >
              <Link href="/mortgage/approval/">
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary backdrop-blur-sm"
            >
              <Link href="/mortgage/rates">Compare Offers</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-8 h-8 text-white/90" />
              <span className="text-sm text-white/90">
                5-Minute Application
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-8 h-8 text-white/90" />
              <span className="text-sm text-white/90">No Sales Calls</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-8 h-8 text-white/90" />
              <span className="text-sm text-white/90">
                100% Secure & Private
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
