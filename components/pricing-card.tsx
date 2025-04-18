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
        featured ? "shadow-slack-md border-2 border-primary" : "shadow-slack-sm border border-gray-200"
      } bg-white hover:shadow-slack transition-shadow duration-300`}
    >
      {badge && (
        <div
          className="absolute top-0 right-0 px-4 py-1 text-xs font-medium text-white"
          style={{ backgroundColor: accentColor === "#2BAC76" ? "#2BAC76" : "#4A154B" }}
        >
          {badge}
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="ml-1 text-muted-foreground">{period}</span>
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            className="w-full mb-8 py-6 rounded-lg"
            style={{
              backgroundColor: accentColor === "#2BAC76" ? "#2BAC76" : "#4A154B",
              color: "white",
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
                  backgroundColor: accentColor === "#2BAC76" ? "rgba(43, 172, 118, 0.1)" : "rgba(74, 21, 75, 0.1)",
                }}
              >
                <Check className="h-3 w-3" style={{ color: accentColor === "#2BAC76" ? "#2BAC76" : "#4A154B" }} />
              </div>
              <span className="text-muted-foreground">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
