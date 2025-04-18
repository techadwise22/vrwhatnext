"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "Who is this community for?",
    answer:
      "What More? is designed for mid-to-senior finance professionals (ages 30-55) who are navigating leadership challenges, career transitions, or seeking to expand their influence. Our members typically include CFOs, Finance Directors, VPs of Finance, Controllers, and other finance leaders looking to design their next career chapter.",
  },
  {
    question: "Can I join from outside India?",
    answer:
      "Yes, while our community has strong roots in India, we welcome finance leaders from around the globe. Our virtual events and digital community are accessible worldwide, and we're expanding our in-person events to multiple regions.",
  },
  {
    question: "What if I'm not ready for Executive Circle yet?",
    answer:
      "Our Basic Membership is designed for rising finance professionals who are building their careers and networks. It provides access to valuable resources, events, and connections at a more accessible price point. As your career progresses, you can be considered for an invitation to the Executive Circle.",
  },
  {
    question: "How is the application process structured?",
    answer:
      "After submitting your application, our team reviews your professional background and career goals to ensure alignment with our community. Selected applicants are invited to a brief conversation to discuss their specific needs and how What More? can support their journey. We aim to create cohorts with complementary experiences and challenges.",
  },
  {
    question: "What makes What More? different from other professional communities?",
    answer:
      "Unlike generic platforms, What More? is specifically designed for finance leaders with curated connections, specialized learning tracks, and career advancement opportunities. Our community combines the exclusivity of alumni networks with the practical support of executive education and the camaraderie of peer groups.",
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
      className="space-y-4"
    >
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${
            openIndex === index ? "shadow-slack" : "shadow-slack-sm hover:shadow-slack"
          }`}
        >
          <motion.button
            whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
            className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-muted transition-colors"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span className={`font-medium text-lg ${openIndex === index ? "text-primary" : "text-gray-900"}`}>
              {faq.question}
            </span>
            <div
              className={`flex items-center justify-center h-8 w-8 rounded-full transition-all duration-300 ${
                openIndex === index ? "bg-primary" : "bg-muted"
              }`}
            >
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  openIndex === index ? "transform rotate-180 text-white" : "text-gray-600"
                }`}
              />
            </div>
          </motion.button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 pt-0 text-muted-foreground bg-white">{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  )
}
