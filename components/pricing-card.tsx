"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/framer-animations"

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  ctaText: string
  accentColor: string
  featured?: boolean
  badge?: string
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  ctaText,
  accentColor,
  featured = false,
  badge,
}: PricingCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className={`relative rounded-lg overflow-hidden ${
        featured ? "shadow-times-md border-2 border-primary" : "shadow-times-sm border border-gray-800"
      } bg-gray-900 hover:shadow-times transition-shadow duration-300`}
    >
      {badge && (
        <div
          className="absolute top-0 right-0 px-4 py-1 text-xs font-medium text-black"
          style={{ backgroundColor: accentColor === "#2BAC76" ? "#D4AF37" : "#D4AF37" }}
        >
          {badge}
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold text-primary">{price}</span>
          <span className="ml-1 text-gray-400">{period}</span>
        </div>
        <p className="text-gray-400 mb-6">{description}</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            className="w-full mb-8 py-6 rounded-lg"
            style={{
              backgroundColor: accentColor === "#2BAC76" ? "#D4AF37" : "#D4AF37",
              color: "black",
            }}
            asChild={title === "Executive Circle"}
          >
            {title === "Executive Circle" ? <Link href="/apply/executive">{ctaText}</Link> : ctaText}
          </Button>
        </motion.div>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <div
                className="h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  backgroundColor: "rgba(212, 175, 55, 0.2)",
                }}
              >
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span className="text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
