"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PricingCard from "@/components/pricing-card"
import FAQAccordion from "@/components/faq-accordion"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn, slideIn, staggerContainer, scaleIn } from "@/lib/framer-animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function LandingPage() {
  const heroSection = useScrollAnimation()
  const painPointsSection = useScrollAnimation(0.1)
  const solutionSection = useScrollAnimation(0.1)
  const positioningSection = useScrollAnimation(0.1)
  const pricingSection = useScrollAnimation(0.1)
  const faqSection = useScrollAnimation(0.1)
  const ctaSection = useScrollAnimation(0.1)

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />

      {/* Hero Section */}
      <motion.section
        ref={heroSection.ref}
        initial="hidden"
        animate={heroSection.isInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative py-20 md:py-28 lg:py-32 border-b border-gray-800 bg-black"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div variants={slideIn("left")} className="space-y-4">
              <motion.h1
                variants={slideIn("up")}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary"
              >
                Beyond connection. Toward transformation.
              </motion.h1>
              <motion.p variants={slideIn("up")} className="text-xl md:text-2xl text-gray-400 max-w-[600px]">
                A private collective where finance leaders co-create their next chapter with intent.
              </motion.p>
              <motion.div variants={slideIn("up")} className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className="bg-primary hover:bg-primary-600 text-black rounded-lg px-8 py-6 text-lg shadow-times-sm"
                    asChild
                  >
                    <Link href="/apply">
                      Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.p variants={slideIn("up")} className="text-sm text-gray-500 pt-2">
                Application-based membership. Limited spots available.
              </motion.p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-times"
            >
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Finance leaders in a strategic discussion"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pain Points Section */}
      <motion.section
        ref={painPointsSection.ref}
        initial="hidden"
        animate={painPointsSection.isInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-20 md:py-28 border-b border-gray-800 bg-black"
      >
        <div className="container px-4 md:px-6">
          <motion.h2 variants={slideIn("up")} className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
            🔍 Pain Points Mapped to Career Phases
          </motion.h2>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-16">
            {/* Emerging Leaders Section */}
            <motion.div variants={slideIn("left")} className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-lg">
                🎯 Emerging Leaders, Growing Responsibility
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 p-6 rounded-lg shadow-times-sm border border-gray-800"
                >
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary">📉</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-white">Feeling professionally plateaued</h3>
                      <p className="text-gray-400">
                        You've proven your capabilities, yet meaningful growth feels elusive. You're no longer learning
                        at the same pace—and it's starting to nag at you.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 p-6 rounded-lg shadow-times-sm border border-gray-800"
                >
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary">🧭</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-white">Leading without a leadership playbook</h3>
                      <p className="text-gray-400">
                        You're managing teams, stakeholders, and transformation projects—but no one ever trained you for
                        this. You're expected to lead decisively, yet often feel like you're winging it.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 p-6 rounded-lg shadow-times-sm border border-gray-800"
                >
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary">⏳</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-white">Struggling to upskill amidst the chaos</h3>
                      <p className="text-gray-400">
                        You want to dive into AI, tech, and strategic thinking. But with tight deadlines and operational
                        demands, there's barely time to breathe, let alone learn.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 p-6 rounded-lg shadow-times-sm border border-gray-800"
                >
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary">🔄</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-white">Limited cross-functional exposure</h3>
                      <p className="text-gray-400">
                        You're siloed in finance, but you know the next leap requires broader business insight. You just
                        don't know how to bridge that gap while staying in your current role.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 p-6 rounded-lg shadow-times-sm border border-gray-800"
                >
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary">🧑‍🏫</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-white">Seeking mentorship—but where to find it?</h3>
                      <p className="text-gray-400">
                        You're hungry for guidance, but relevant mentors feel out of reach. Most available communities
                        are either too junior or too generic to offer actionable support.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Seasoned Professionals Section */}
            <motion.div variants={slideIn("right")} className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-lg">
                🎯 Seasoned Professionals, Seeking Purpose
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 p-6 rounded-lg shadow-times-sm border border-gray-800"
                >
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary">🔄</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-white">At an inflection point</h3>
                      <p className="text-gray-400">
                        You're exploring shifts—from corporate exec to advisor, consultant, investor, or entrepreneur.
                        But making the leap feels risky without a trusted community or roadmap.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 p-6 rounded-lg shadow-times-sm border border-gray-800"
                >
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary">🤖</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-white">Staying relevant in a fast-changing world</h3>
                      <p className="text-gray-400">
                        You've built your credibility on experience. But AI, automation, and industry disruption are
                        rewriting the rules. You're trying to adapt, but it's overwhelming to tackle alone.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 p-6 rounded-lg shadow-times-sm border border-gray-800"
                >
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary">🧍‍♂️</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-white">Isolated at the top</h3>
                      <p className="text-gray-400">
                        You have fewer peers you can truly open up to. The pressure to have all the answers leaves
                        little space to admit uncertainty, ask questions, or explore new ideas.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 p-6 rounded-lg shadow-times-sm border border-gray-800"
                >
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary">🪞</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-white">Wanting to give back—but unsure how</h3>
                      <p className="text-gray-400">
                        You want to share your knowledge—as a mentor, advisor, or thought leader—but don't know where to
                        start or how to find an audience that values what you offer.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 p-6 rounded-lg shadow-times-sm border border-gray-800"
                >
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary">📣</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-white">Reimagining your personal brand</h3>
                      <p className="text-gray-400">
                        You're thinking about legacy and what comes next—whether it's consulting, joining a board,
                        teaching, or launching something of your own. But building visibility and credibility in this
                        new phase feels like starting from scratch.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* The Solution Section */}
      <motion.section
        ref={solutionSection.ref}
        initial="hidden"
        animate={solutionSection.isInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-20 md:py-28 border-b border-gray-800 bg-black"
      >
        <div className="container px-4 md:px-6">
          <motion.div variants={slideIn("up")} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What is "VR What More?"</h2>
            <p className="text-xl text-gray-400">
              A curated community experience built for the modern finance leader, where exclusivity meets intentionality
              and real outcomes replace generic collaboration.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={slideIn("up")}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-8 rounded-lg shadow-times-sm border border-gray-800 hover:shadow-times-md transition-shadow duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Cohort-Based Membership</h3>
              <p className="text-gray-400">
                Join a carefully selected group of peers with aligned career stages and challenges for deeper
                connections and shared growth.
              </p>
            </motion.div>
            <motion.div
              variants={slideIn("up")}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-8 rounded-lg shadow-times-sm border border-gray-800 hover:shadow-times-md transition-shadow duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Learning & Mentorship Tracks</h3>
              <p className="text-gray-400">
                From AI to leadership storytelling, access structured learning paths designed for busy finance
                executives.
              </p>
            </motion.div>
            <motion.div
              variants={slideIn("up")}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-8 rounded-lg shadow-times-sm border border-gray-800 hover:shadow-times-md transition-shadow duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="19" x2="19" y1="8" y2="14"></line>
                  <line x1="22" x2="16" y1="11" y2="11"></line>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Premium Connections</h3>
              <p className="text-gray-400">
                Connect with industry leaders, policymakers, and potential mentors through curated introductions that go
                beyond traditional platforms.
              </p>
            </motion.div>
            <motion.div
              variants={slideIn("up")}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-8 rounded-lg shadow-times-sm border border-gray-800 hover:shadow-times-md transition-shadow duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Career & Thought Leadership Accelerator</h3>
              <p className="text-gray-400">
                Build your personal brand through speaking opportunities, publishing platforms, and visibility channels.
              </p>
            </motion.div>
            <motion.div
              variants={slideIn("up")}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-8 rounded-lg shadow-times-sm border border-gray-800 hover:shadow-times-md transition-shadow duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Always-On Community Layer</h3>
              <p className="text-gray-400">
                Stay connected through accountability pods and an asynchronous digital community that fits your busy
                schedule.
              </p>
            </motion.div>
            <motion.div
              variants={slideIn("up")}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-8 rounded-lg shadow-times-sm border border-gray-800 hover:shadow-times-md transition-shadow duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Strategic Visibility</h3>
              <p className="text-gray-400">
                Gain access to exclusive speaking engagements, publishing opportunities, and industry platforms to
                elevate your professional profile.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Strategic Positioning */}
      <motion.section
        ref={positioningSection.ref}
        initial="hidden"
        animate={positioningSection.isInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-20 md:py-28 bg-gray-900 text-white"
      >
        <div className="container px-4 md:px-6">
          <motion.div variants={slideIn("up")} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Not just a community. A next chapter design partner.
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Where finance leaders design what's more, together. Like On Deck × McKinsey Alumni × YPO, but
              finance-first.
            </p>
            <motion.div variants={scaleIn} className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-primary hover:bg-primary-600 text-black rounded-lg px-8 py-6 text-lg shadow-times-sm"
                  asChild
                >
                  <Link href="/apply/executive">
                    Apply by Invitation <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        ref={pricingSection.ref}
        initial="hidden"
        animate={pricingSection.isInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-20 md:py-28 border-b border-gray-800 bg-black"
      >
        <div className="container px-4 md:px-6">
          <motion.div variants={slideIn("up")} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Choose the path that moves your career forward.
            </h2>
            <p className="text-xl text-gray-400">
              Select the membership tier that aligns with your career stage and aspirations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Basic Membership"
              price="₹5,000"
              period="per year"
              description="For rising professionals seeking sharper skills and deeper connections."
              features={[
                "Full member directory access",
                "Curated resource library",
                "Virtual expert events",
                "Peer mentorship matching",
                "Private digital community",
              ]}
              ctaText="Apply Now"
              accentColor="#D4AF37"
            />
            <PricingCard
              title="Executive Circle"
              price="₹1,00,000"
              period="per year"
              description="For senior finance leaders shaping the future."
              features={[
                "Everything in Basic Membership",
                "Leadership retreats",
                "Speaking opportunities",
                "Transition advisory",
                "Policy-maker access",
                "Free executive education nominations",
                "Career placement support",
                "VIP invites to flagship events",
              ]}
              ctaText="Apply by Invitation"
              accentColor="#D4AF37"
              featured={true}
              badge="By Invitation Only"
            />
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        ref={faqSection.ref}
        initial="hidden"
        animate={faqSection.isInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-20 md:py-28 border-b border-gray-800 bg-black"
      >
        <div className="container px-4 md:px-6">
          <motion.div variants={slideIn("up")} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <FAQAccordion />
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        ref={ctaSection.ref}
        initial="hidden"
        animate={ctaSection.isInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-20 md:py-28 bg-black"
      >
        <div className="container px-4 md:px-6">
          <motion.div variants={slideIn("up")} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to design your next chapter?</h2>
            <p className="text-xl text-gray-400 mb-10">
              Join a community of finance leaders who are shaping the future of the industry and their careers.
            </p>
            <motion.div variants={scaleIn} className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-primary hover:bg-primary-600 text-black rounded-lg px-8 py-6 text-lg shadow-times-sm"
                  asChild
                >
                  <Link href="/apply/executive">
                    Apply by Invitation <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
