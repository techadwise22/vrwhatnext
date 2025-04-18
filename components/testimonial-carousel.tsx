"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote:
      "What More? has been instrumental in helping me navigate my transition from CFO to board advisor. The community and resources are unparalleled.",
    author: "Priya Sharma",
    title: "Former CFO, Tech Unicorn",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The Executive Circle has connected me with policy makers and industry leaders I wouldn't have met otherwise. It's been worth every rupee.",
    author: "Rajiv Mehta",
    title: "Finance Director, Fortune 500",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "As a finance leader in my 30s, I was looking for guidance on scaling my influence. What More? provided exactly that through mentorship and peer connections.",
    author: "Ananya Patel",
    title: "VP Finance, Growth-Stage Startup",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-lg bg-white p-8 md:p-12 shadow-slack border border-gray-200"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative h-20 w-20 rounded-full overflow-hidden mb-6 border-2 border-primary-50 shadow-md"
              >
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].author}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-800 font-medium italic mb-6 bg-muted p-6 rounded-lg"
              >
                "{testimonials[current].quote}"
              </motion.blockquote>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <p className="font-medium text-gray-900">{testimonials[current].author}</p>
                <p className="text-muted-foreground">{testimonials[current].title}</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-center mt-6 gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            prev()
            setAutoplay(false)
          }}
          className="p-2 rounded-full bg-white border border-gray-200 shadow-slack-sm hover:shadow-slack transition-shadow duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </motion.button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setCurrent(index)
                setAutoplay(false)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index ? "bg-primary w-8" : "bg-gray-200 w-2"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            next()
            setAutoplay(false)
          }}
          className="p-2 rounded-full bg-white border border-gray-200 shadow-slack-sm hover:shadow-slack transition-shadow duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </motion.button>
      </div>
    </div>
  )
}
