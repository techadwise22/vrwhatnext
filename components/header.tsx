"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, slideIn } from "@/lib/framer-animations"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="sticky top-0 z-50 w-full border-b border-primary/20 bg-black shadow-times-sm"
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <motion.div variants={slideIn("left")}>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">VR What More?</span>
          </Link>
        </motion.div>
        <motion.nav variants={fadeIn} className="hidden md:flex gap-6 items-center">
          <Link href="#" className="text-gray-400 hover:text-primary transition-colors font-medium">
            About
          </Link>
          <Link href="#" className="text-gray-400 hover:text-primary transition-colors font-medium">
            Membership
          </Link>
          <Link href="#" className="text-gray-400 hover:text-primary transition-colors font-medium">
            Events
          </Link>
          <Link href="#" className="text-gray-400 hover:text-primary transition-colors font-medium">
            Resources
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-primary hover:bg-primary-600 text-black ml-2 rounded-lg" asChild>
              <Link href="/apply">Apply Now</Link>
            </Button>
          </motion.div>
        </motion.nav>
        <button className="flex md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t border-primary/20 bg-black"
        >
          <div className="container px-4 py-4 flex flex-col gap-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Membership
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Button
              className="bg-primary hover:bg-primary-600 text-black w-full mt-2 rounded-lg"
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
