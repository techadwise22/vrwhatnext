"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"
import TagSelector from "@/components/tag-selector"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function ApplicationForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    location: "",
    organization: "",
    careerStage: "",
    domains: [] as string[],
    seeking: [] as string[],
    contribute: [] as string[],
    goals: "",
    referral: "",
    connection: "",
  })

  const careerStages = [
    { value: "30-35", label: "30–35: Growing leader" },
    { value: "36-40", label: "36–40: Mid-level, looking to scale" },
    { value: "41-45", label: "41–45: Senior, exploring new options" },
    { value: "46-50", label: "46–50: Transitioning or plateaued" },
    { value: "51-55", label: "51–55: Legacy builder or advisor" },
    { value: "other", label: "Other" },
  ]

  const domainOptions = [
    "Corporate Finance",
    "FP&A",
    "Investment Banking",
    "Private Equity",
    "Venture Capital",
    "Fintech",
    "CFO Office",
    "Treasury",
    "Consulting",
    "Family Office",
    "Academia / Policy",
    "Other",
  ]

  const seekingOptions = [
    "Peer networking",
    "Mentorship (giving or receiving)",
    "Career transitions",
    "Thought leadership / personal branding",
    "Board/advisory roles",
    "AI & tech upskilling",
    "Leadership development",
    "Exposure to other domains",
    "Retreats / In-person salons",
    "Contributing to policy",
    "Teaching / speaking gigs",
    "Just exploring for now",
  ]

  const contributeOptions = [
    "Mentorship",
    "Speaking or panel appearances",
    "Writing or thought pieces",
    "Course or workshop facilitation",
    "Intros from my network",
    "Ideas for events or salons",
    "Sponsorship or partnerships",
    "Other",
  ]

  const connectionOptions = ["CA", "CS", "CMA", "MBA", "B.Com", "Others"]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTagChange = (name: string, tags: string[]) => {
    setFormData((prev) => ({ ...prev, [name]: tags }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend

    // Show success message and redirect
    alert("Thank you for your application! We'll review it and get back to you soon.")
    router.push("/")
  }

  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <Header />

      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-accent hover:underline mb-6">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Join "What Next?" — A Curated Career Network for Finance Professionals
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              We're excited to learn more about you. This short application helps us place you in the right cohort and
              tailor the experience to your goals.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-3xl space-y-12 bg-white rounded-lg p-8 shadow-slack border border-gray-200"
          >
            {/* Basic Info */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">1. Basic Info</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                    Email
                  </label>
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
                  <label htmlFor="linkedin" className="text-sm font-medium text-muted-foreground">
                    LinkedIn Profile URL
                  </label>
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
                  <label htmlFor="location" className="text-sm font-medium text-muted-foreground">
                    Location (City, Country)
                  </label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="organization" className="text-sm font-medium text-muted-foreground">
                    Current Organization & Title
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg"
                  />
                </div>
              </div>
            </section>

            {/* Career Stage */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary">2. Career Stage</h2>
                <p className="text-muted-foreground mt-1">Where are you in your professional journey?</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {careerStages.map((stage) => (
                  <button
                    key={stage.value}
                    type="button"
                    onClick={() => handleSelectChange("careerStage", stage.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      formData.careerStage === stage.value
                        ? "bg-primary text-white shadow-slack-sm"
                        : "bg-white border border-gray-200 text-muted-foreground hover:border-gray-300"
                    }`}
                  >
                    {stage.label}
                  </button>
                ))}
              </div>
            </section>

            {/* Primary Domain / Function */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary">3. Primary Domain / Function</h2>
                <p className="text-muted-foreground mt-1">What area of finance best describes your work?</p>
              </div>
              <TagSelector
                options={domainOptions}
                selected={formData.domains}
                onChange={(tags) => handleTagChange("domains", tags)}
                color="#4A154B"
              />
            </section>

            {/* What are you seeking */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary">4. What are you seeking from this community?</h2>
                <p className="text-muted-foreground mt-1">We'll personalize your experience accordingly.</p>
              </div>
              <TagSelector
                options={seekingOptions}
                selected={formData.seeking}
                onChange={(tags) => handleTagChange("seeking", tags)}
                color="#4A154B"
              />
            </section>

            {/* What would you love to contribute */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary">5. What would you love to contribute?</h2>
                <p className="text-muted-foreground mt-1">Every member brings something valuable.</p>
              </div>
              <TagSelector
                options={contributeOptions}
                selected={formData.contribute}
                onChange={(tags) => handleTagChange("contribute", tags)}
                color="#2BAC76"
              />
            </section>

            {/* Where do you want to be in 12 months */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary">6. Where do you want to be in 12 months?</h2>
                <p className="text-muted-foreground mt-1">Let's align on your definition of progress.</p>
              </div>
              <Textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleInputChange}
                rows={4}
                className="border-gray-300 focus:border-primary focus:ring-primary w-full rounded-lg"
              />
            </section>

            {/* How did you hear about us */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary">7. How did you hear about us?</h2>
              </div>
              <Select onValueChange={(value) => handleSelectChange("referral", value)}>
                <SelectTrigger className="border-gray-300 focus:ring-primary w-full max-w-xs rounded-lg">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="referral">Referral</SelectItem>
                  <SelectItem value="event">Event</SelectItem>
                  <SelectItem value="search">Search Engine</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </section>

            {/* How do you know Vijay Raja Sir */}
            <section className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary">8. How do you know Vijay Raja Sir?</h2>
              </div>
              <Select onValueChange={(value) => handleSelectChange("connection", value)}>
                <SelectTrigger className="border-gray-300 focus:ring-primary w-full max-w-xs rounded-lg">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {connectionOptions.map((option) => (
                    <SelectItem key={option} value={option.toLowerCase()}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </section>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                className="bg-primary hover:bg-primary-600 text-white rounded-lg px-8 py-6 text-lg w-full sm:w-auto shadow-slack-sm transition-all duration-200 hover:shadow-slack"
              >
                Submit Application
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                We review applications weekly. If accepted, you'll be invited to choose a membership tier.
              </p>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
