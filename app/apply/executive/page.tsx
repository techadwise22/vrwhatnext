"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronLeft, Upload, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, slideIn, staggerContainer } from "@/lib/framer-animations"

export default function ExecutiveApplicationForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    linkedin: "",
    currentRole: "",
    experience: "",
    education: "",
    location: "",
    responsibilities: "",
    achievements: "",
    aspirations: "",
    motivation: "",
    mentorship: "",
    priority: "",
    callDate: "",
    timeSlot: "",
    timezone: "",
    commitment: "",
    resume: null as File | null,
    notes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend

    // Show success message and redirect
    alert("Thank you for your application! We'll review it and get back to you soon.")
    router.push("/")
  }

  const timeZones = [
    "Asia/Kolkata (IST)",
    "America/New_York (EST)",
    "America/Los_Angeles (PST)",
    "Europe/London (GMT)",
    "Europe/Paris (CET)",
    "Asia/Singapore (SGT)",
    "Asia/Tokyo (JST)",
    "Australia/Sydney (AEST)",
  ]

  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <Header />

      <motion.main initial="hidden" animate="visible" variants={fadeIn} className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <motion.div variants={slideIn("up")} className="mb-8">
            <Link href="/" className="inline-flex items-center text-accent hover:underline mb-6">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to home
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-primary">🛡 Executive Membership Application</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              1-Year Transformational Mentorship | Guaranteed Momentum
            </p>
            <p className="mt-4 text-muted-foreground max-w-3xl">
              This is more than a membership. It's a commitment to your next bold move. Please complete this detailed
              application to be considered for the Executive tier. Selected applicants will be invited for a personal
              interview and onboarding call.
            </p>
          </motion.div>

          <motion.form
            variants={staggerContainer}
            onSubmit={handleSubmit}
            className="max-w-3xl space-y-12 bg-white rounded-lg p-8 shadow-slack border border-gray-200"
          >
            {/* Personal & Professional Details */}
            <motion.section variants={slideIn("up")} className="space-y-6">
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <span className="text-secondary">🔷</span> Personal & Professional Details
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-muted-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-sm font-medium text-muted-foreground">
                    Mobile Number
                  </Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="text-sm font-medium text-muted-foreground">
                    LinkedIn Profile URL
                  </Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currentRole" className="text-sm font-medium text-muted-foreground">
                    Current Role & Organization
                  </Label>
                  <Input
                    id="currentRole"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-sm font-medium text-muted-foreground">
                    Total Years of Experience
                  </Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="education" className="text-sm font-medium text-muted-foreground">
                    Highest Education Qualification
                  </Label>
                  <Input
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium text-muted-foreground">
                    Current Location (City, Country)
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg"
                  />
                </div>
              </div>
            </motion.section>

            {/* Professional Highlights */}
            <motion.section variants={slideIn("up")} className="space-y-6">
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <span className="text-secondary">🔷</span> Professional Highlights
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="responsibilities" className="text-sm font-medium text-muted-foreground">
                    Briefly describe your current role and responsibilities: (Max 300 words)
                  </Label>
                  <Textarea
                    id="responsibilities"
                    name="responsibilities"
                    value={formData.responsibilities}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary w-full rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="achievements" className="text-sm font-medium text-muted-foreground">
                    List 2–3 key career achievements you're most proud of:
                  </Label>
                  <Textarea
                    id="achievements"
                    name="achievements"
                    value={formData.achievements}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary w-full rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aspirations" className="text-sm font-medium text-muted-foreground">
                    What are your leadership aspirations for the next 1–2 years?
                  </Label>
                  <Textarea
                    id="aspirations"
                    name="aspirations"
                    value={formData.aspirations}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary w-full rounded-lg"
                  />
                </div>
              </div>
            </motion.section>

            {/* Why Executive Membership? */}
            <motion.section variants={slideIn("up")} className="space-y-6">
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <span className="text-secondary">🔷</span> Why Executive Membership?
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="motivation" className="text-sm font-medium text-muted-foreground">
                    What motivates you to apply for the Executive Membership? (Max 250 words)
                  </Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary w-full rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mentorship" className="text-sm font-medium text-muted-foreground">
                    What kind of mentorship would create real impact for you? (E.g., career pivot, board readiness,
                    personal branding, thought leadership, etc.)
                  </Label>
                  <Textarea
                    id="mentorship"
                    name="mentorship"
                    value={formData.mentorship}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary w-full rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Which of the following is most important to you?
                  </Label>
                  <RadioGroup
                    onValueChange={(value) => handleSelectChange("priority", value)}
                    className="space-y-3 mt-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="strategic" id="strategic" />
                      <Label htmlFor="strategic" className="font-normal">
                        Strategic advisory
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="career" id="career" />
                      <Label htmlFor="career" className="font-normal">
                        Career placement support
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="brand" id="brand" />
                      <Label htmlFor="brand" className="font-normal">
                        Brand partnerships & exposure
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="learning" id="learning" />
                      <Label htmlFor="learning" className="font-normal">
                        Executive learning & upskilling
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="network" id="network" />
                      <Label htmlFor="network" className="font-normal">
                        Network of peers & leaders
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </motion.section>

            {/* Scheduling Your Introductory Call */}
            <motion.section variants={slideIn("up")} className="space-y-6">
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <span className="text-secondary">🔷</span> Scheduling Your Introductory Call
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="callDate" className="text-sm font-medium text-muted-foreground">
                    Preferred date for your call:
                  </Label>
                  <Input
                    id="callDate"
                    name="callDate"
                    type="date"
                    value={formData.callDate}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">Preferred time slot:</Label>
                  <RadioGroup
                    onValueChange={(value) => handleSelectChange("timeSlot", value)}
                    className="space-y-3 mt-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="morning" id="morning" />
                      <Label htmlFor="morning" className="font-normal">
                        Morning (9 AM–12 PM)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="afternoon" id="afternoon" />
                      <Label htmlFor="afternoon" className="font-normal">
                        Afternoon (12 PM–4 PM)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="evening" id="evening" />
                      <Label htmlFor="evening" className="font-normal">
                        Evening (4 PM–7 PM)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="timezone" className="text-sm font-medium text-muted-foreground">
                    Time Zone:
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange("timezone", value)}>
                    <SelectTrigger className="border-gray-300 focus:ring-primary rounded-lg">
                      <SelectValue placeholder="Select your time zone" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeZones.map((zone) => (
                        <SelectItem key={zone} value={zone}>
                          {zone}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </motion.section>

            {/* Final Commitment */}
            <motion.section variants={slideIn("up")} className="space-y-6">
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <span className="text-secondary">🔷</span> Final Commitment
              </h2>
              <p className="text-muted-foreground">
                This tier includes guaranteed mentorship, premium access, and intentional career elevation. We're
                looking for professionals ready to commit to a year of active transformation.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Are you prepared to invest ₹1,00,000/year for this opportunity?
                  </Label>
                  <RadioGroup
                    onValueChange={(value) => handleSelectChange("commitment", value)}
                    className="space-y-3 mt-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="font-normal">
                        Yes, I'm ready to commit
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="discuss" id="discuss" />
                      <Label htmlFor="discuss" className="font-normal">
                        I'd like to discuss it further
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-sm font-medium text-muted-foreground">
                    Upload your resume (optional):
                  </Label>
                  <div className="flex items-center gap-2">
                    <Label
                      htmlFor="resume"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-muted transition-colors"
                    >
                      <Upload className="h-4 w-4" />
                      <span>{formData.resume ? formData.resume.name : "Choose file"}</span>
                    </Label>
                    <Input
                      id="resume"
                      name="resume"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-sm font-medium text-muted-foreground">
                    Additional notes you'd like to share:
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="border-gray-300 focus:border-primary focus:ring-primary w-full rounded-lg"
                  />
                </div>
              </div>
            </motion.section>

            {/* Submit Button */}
            <motion.div variants={slideIn("up")} className="pt-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary-600 text-white rounded-lg px-8 py-6 text-lg w-full sm:w-auto shadow-slack-sm transition-all duration-200 hover:shadow-slack"
                >
                  Submit Executive Application
                </Button>
              </motion.div>
              <p className="text-sm text-muted-foreground mt-4">
                We review applications within 48 hours. Selected candidates will receive a personal call from our team.
              </p>
            </motion.div>
          </motion.form>
        </div>
      </motion.main>

      <Footer />
    </div>
  )
}
