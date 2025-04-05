"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, BookOpen, Briefcase, Instagram, Linkedin } from "lucide-react"
import { Discord } from "@/components/ui/icons/discord"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

const FadeInGrid = ({ children, staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

const FadeInGridItem = ({ children }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default function LandingPage() {
  const featuresCards = [
    <Card key="success" className="bg-[rgb(23,23,23)] border-zinc-900 hover-lift hover-glow h-full">
      <CardContent className="p-6">
        <CheckCircle2 className="h-10 w-10 text-blue-400" />
        <h3 className="mt-4 text-xl font-bold text-white">Success</h3>
        <p className="mt-3 text-gray-400 leading-relaxed">
          Achieve your career goals with our comprehensive resources and support.
        </p>
      </CardContent>
    </Card>,
    <Card key="learn" className="bg-[rgb(23,23,23)] border-zinc-900 hover-lift hover-glow h-full">
      <CardContent className="p-6">
        <BookOpen className="h-10 w-10 text-green-400" />
        <h3 className="mt-4 text-xl font-bold text-white">Learn</h3>
        <p className="mt-3 text-gray-400 leading-relaxed">
          Master industry techniques, methodologies, and cutting-edge tech.
        </p>
      </CardContent>
    </Card>,
    <Card key="experience" className="bg-[rgb(23,23,23)] border-zinc-900 hover-lift hover-glow h-full">
      <CardContent className="p-6">
        <Briefcase className="h-10 w-10 text-purple-400" />
        <h3 className="mt-4 text-xl font-bold text-white">Experience</h3>
        <p className="mt-3 text-gray-400 leading-relaxed">
          Gain hands-on, resume-worthy project experience to stand out.
        </p>
      </CardContent>
    </Card>,
  ]

  const aboutCards = [
    <Card
      key="gabriel"
      className="bg-[rgb(23,23,23)] border-zinc-900 hover-lift w-[320px] h-[360px] flex flex-col relative"
    >
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex flex-col h-full">
          <div className="w-20 h-20 mx-auto overflow-hidden rounded-full bg-gray-700 mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0412.JPG-w3DRK5V1Su1Y5PncMQZQCOhPVVIu6O.jpeg"
              alt="Gabriel Castaneda"
              width={96}
              height={96}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-1">Gabriel Castaneda</h3>
            <p className="text-gray-400 text-base mb-3">President</p>
            <p className="text-gray-500 text-sm">
              Business, Operations and SCM @ SJSU. Passionate about products, AI, space exploration, and startups.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/gmcast/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors hover-grow absolute top-5 right-5"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn Profile</span>
          </a>
        </div>
      </CardContent>
    </Card>,
    <Card
      key="nicolaus"
      className="bg-[rgb(23,23,23)] border-zinc-900 hover-lift w-[320px] h-[360px] flex flex-col relative"
    >
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex flex-col h-full">
          <div className="w-20 h-20 mx-auto overflow-hidden rounded-full bg-gray-700 mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nic%20pic.jpg-nQuxiWRPARjH0qjy5bvcDEEcGy4VM3.jpeg"
              alt="Nicolaus Hilleary"
              width={96}
              height={96}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-1">Nicolaus Hilleary</h3>
            <p className="text-gray-400 text-base mb-3">President</p>
            <p className="text-gray-500 text-sm">
              Business, Entrepreneurship @ SJSU. Cofounder Marketing & Product @ CollegeBot. Product @ CoffeeSpace.
              Passionate about product management and entrepreneurship.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/nicolaushilleary/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors hover-grow absolute top-5 right-5"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn Profile</span>
          </a>
        </div>
      </CardContent>
    </Card>,
    <Card
      key="sachin"
      className="bg-[rgb(23,23,23)] border-zinc-900 hover-lift w-[320px] h-[360px] flex flex-col relative"
    >
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex flex-col h-full">
          <div className="w-20 h-20 mx-auto overflow-hidden rounded-full bg-gray-700 mb-4">
            <Image
              src="/images/new-team-member.png"
              alt="Sachin Syal"
              width={96}
              height={96}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-1">Sachin Syal</h3>
            <p className="text-gray-400 text-base mb-3">VP of Outreach</p>
            <p className="text-gray-500 text-sm">Advertising @ SJSU, Host @ The O'ChakDe Show, Co-Founder @ 3Doshas</p>
          </div>
          <a
            href="http://linkedin.com/in/sachin-syal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors hover-grow absolute top-5 right-5"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn Profile</span>
          </a>
        </div>
      </CardContent>
    </Card>,
    <Card
      key="shreya"
      className="bg-[rgb(23,23,23)] border-zinc-900 hover-lift w-[320px] h-[360px] flex flex-col relative"
    >
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex flex-col h-full">
          <div className="w-20 h-20 mx-auto overflow-hidden rounded-full bg-gray-700 mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3352.jpg-vu18lhmpr5CcVdLTMhQrSGpVaqiDG1.jpeg"
              alt="Shreya Madaan"
              width={96}
              height={96}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-1">Shreya Madaan</h3>
            <p className="text-gray-400 text-base mb-3">VP of Outreach</p>
            <p className="text-gray-500 text-sm">
              Engineering Management Grad @ SJSU. Dedicated to fostering connections and organizing impactful events
              with a passion for product management and community building.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/shreya-madaan-20/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors hover-grow absolute top-5 right-5"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn Profile</span>
          </a>
        </div>
      </CardContent>
    </Card>,
    <Card
      key="ashley"
      className="bg-[rgb(23,23,23)] border-zinc-900 hover-lift w-[320px] h-[360px] flex flex-col relative"
    >
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex flex-col h-full">
          <div className="w-20 h-20 mx-auto overflow-hidden rounded-full bg-gray-700 mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me.jpg-NQ0qZ5SK2mAIJNYaIKq8ird6wt2EQA.jpeg"
              alt="Ashley Irawan"
              width={96}
              height={96}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-1">Ashley Irawan</h3>
            <p className="text-gray-400 text-base mb-3">VP of Outreach</p>
            <p className="text-gray-500 text-sm">
              Artificial Intelligence @ SJSU. Passionate in building transparent AI systems and entrepreneurship
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/ashley-irawan-software-engineer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors hover-grow absolute top-5 right-5"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn Profile</span>
          </a>
        </div>
      </CardContent>
    </Card>,
    <Card
      key="sai"
      className="bg-[rgb(23,23,23)] border-zinc-900 hover-lift w-[320px] h-[360px] flex flex-col relative"
    >
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex flex-col h-full">
          <div className="w-20 h-20 mx-auto overflow-hidden rounded-full bg-gray-700 mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sai-N3w4Dd23txdZe3iazDJFzOBWnRNJmY.png"
              alt="Sai Krishna Mittapalli"
              width={96}
              height={96}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-1">Sai Krishna Mittapalli</h3>
            <p className="text-gray-400 text-base mb-3">VP of Strategy</p>
            <p className="text-gray-500 text-sm">
              Management Information Systems @SJSU. VP @IDEAS SJSU. Passionate about launching ventures from 0 to 100.
              Aspiring Project Manager.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/saikrmit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors hover-grow absolute top-5 right-5"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn Profile</span>
          </a>
        </div>
      </CardContent>
    </Card>,
    <Card
      key="hamza"
      className="bg-[rgb(23,23,23)] border-zinc-900 hover-lift w-[320px] h-[360px] flex flex-col relative"
    >
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex flex-col h-full">
          <div className="w-20 h-20 mx-auto overflow-hidden rounded-full bg-gray-700 mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4fa7262e-1038-4338-aac9-e7fb13eb1dc6.JPG-JR6nkzFJZ4Cuapk4ndTnguPU9kfBXz.jpeg"
              alt="Muhammad Hamza"
              width={96}
              height={96}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-1">Muhammad Hamza</h3>
            <p className="text-gray-400 text-base mb-3">Student Advisor/Consultant</p>
            <p className="text-gray-500 text-sm">
              Bachelors MIS @ SJSU. IT Support Assitant and Recruiter @ HCSS Healthcare. Sponsor Outreach Coordinator @
              IDEAS Club
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/muhammad-hamza3401/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors hover-grow absolute top-5 right-5"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn Profile</span>
          </a>
        </div>
      </CardContent>
    </Card>,
    <Card
      key="marl"
      className="bg-[rgb(23,23,23)] border-zinc-900 hover-lift w-[320px] h-[360px] flex flex-col relative"
    >
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex flex-col h-full">
          <div className="w-20 h-20 mx-auto overflow-hidden rounded-full bg-gray-700 mb-4">
            <Image
              src="/images/marl-jonson.png"
              alt="Marl Jonson"
              width={96}
              height={96}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-1">Marl Jonson</h3>
            <p className="text-gray-400 text-base mb-3">Product Operations Specialist</p>
            <p className="text-gray-500 text-sm">
              Computer Science & Statistics @ SJSU. Dedicated to educating about product analysis, cross-functional
              collaboration, and go-to-market strategies!
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/marl-jonson/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors hover-grow absolute top-5 right-5"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn Profile</span>
          </a>
        </div>
      </CardContent>
    </Card>,
  ]

  return (
    <>
      {/* <style jsx global>
        {scrollStyles}
      </style> */}
      <div className="min-h-screen bg-[#000000] text-gray-100">
        {/* Navbar */}
        <nav className="fixed top-8 left-1/2 z-50 w-full max-w-5xl -translate-x-1/2 rounded-full border border-gray-800 bg-[#111111]/80 backdrop-blur supports-[backdrop-filter]:bg-[#111111]/60">
          <div className="flex h-14 items-center justify-between px-4 sm:px-6">
            <div className="flex items-center h-14">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white%20logo-Da6sEDvZfx817Qvpktqm7j2S2DxVnb.png"
                alt="PM Club Logo"
                width={120}
                height={30}
                className="object-contain ml-2"
              />
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-6 -ml-4">
              <Link
                href="#about"
                className="text-xs sm:text-sm text-white transition-colors hover:text-gray-200 hover-lift"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                About Us
              </Link>
              <Link
                href="#footer"
                className="text-xs sm:text-sm text-white transition-colors hover:text-gray-200 hover-lift"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact
              </Link>
              <Link
                href="#join"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#join")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-100 h-9 px-3 text-xs sm:text-sm hover-lift hover-glow"
              >
                Join Now
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <FadeInSection>
          <section className=" min-h-screen bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tower%20hall-xcMsaF7tWxvSv9f2wJZtC11v4cx7SC.png')] bg-cover bg-center bg-no-repeat md:bg-fixed">
            <div className="container mx-auto max-w-7xl px-6 sm:px-8 flex items-center justify-center min-h-screen">
              <div className="w-full max-w-[850px] relative z-10">
                <div className="w-full bg-[rgb(17,17,17)]/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:py-8 md:px-8 flex items-center justify-center">
                  <div className="flex flex-col items-center space-y-8 w-full max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-center leading-tight">
                      <span className="whitespace-nowrap">Product Management</span>
                      <br />
                      <span className="whitespace-nowrap">Club at SJSU</span>
                    </h1>

                    <div className="w-full">
                      <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center leading-relaxed">
                        PM Club accelerates students' path to succeeding in the job market with opportunities to
                        network, learn, and gain hands-on experience.
                      </p>
                    </div>

                    <Link
                      href="#join"
                      onClick={() => document.querySelector("#join")?.scrollIntoView({ behavior: "smooth" })}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-100 h-9 px-3 text-xs sm:text-sm hover-lift hover-glow"
                    >
                      Join Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Features Section */}
        <FadeInSection>
          <section className="bg-black py-12 sm:py-16">
            <div className="container mx-auto max-w-7xl px-4">
              <FadeInGrid>
                <div className="mx-auto mt-6 grid max-w-5xl gap-6 px-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
                  {featuresCards.map((card, index) => (
                    <FadeInGridItem key={index}>{card}</FadeInGridItem>
                  ))}
                </div>
              </FadeInGrid>
            </div>
          </section>
        </FadeInSection>

        {/* About Section */}
        <FadeInSection>
          <section id="about" className="bg-black py-16 sm:py-20">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h2 className="text-3xl font-bold sm:text-4xl text-white mb-6">About Us</h2>
              </div>

              <div className="mt-10 relative">
                {/* Remove right side gradient fade */}
                <div className="overflow-x-auto pb-6 hide-scrollbar">
                  <div className="flex gap-6 px-4 min-w-max">
                    {aboutCards.map((card, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: index * 0.05 }}
                        viewport={{ once: true, margin: "-50px" }}
                      >
                        {card}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* CTA Section */}
        <FadeInSection>
          <section id="join" className="bg-zinc-900 py-16 sm:py-20">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h2 className="text-3xl font-bold sm:text-4xl text-white mb-4">Ready to Accelerate Your Career?</h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400 mb-8">
                  Add our socials to connect with fellow product managers at SJSU and start your journey with PM Club.
                </p>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://discord.gg/Wh3Nn5nu6r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#5865F2] p-4 rounded-lg hover:bg-[#4752C4] transition-colors hover-lift hover-glow"
                  >
                    <Discord className="h-8 w-8 text-white" />
                    <span className="sr-only">Join our Discord</span>
                  </a>
                  <a
                    href="https://www.instagram.com/pmclubsjsu/profilecard/?igsh=NTc4MTIwNjQ2YQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#E4405F] p-4 rounded-lg hover:bg-[#D63A54] transition-colors hover-lift hover-glow"
                  >
                    <Instagram className="h-8 w-8 text-white" />
                    <span className="sr-only">Follow us on Instagram</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/pmclubsjsu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0A66C2] p-4 rounded-lg hover:bg-[#0958A5] transition-colors hover-lift hover-glow"
                  >
                    <Linkedin className="h-8 w-8 text-white" />
                    <span className="sr-only">Connect with us on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Footer */}
        <FadeInSection>
          <footer id="footer" className="bg-black border-t border-gray-800 py-12">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center">
                <h2 className="text-xl font-bold text-white mb-4">Connect With Us</h2>
                <p className="text-gray-400 mb-4">
                  Reach out to us at{" "}
                  <a href="mailto:outreach@pmclubsjsu.com" className="text-blue-400 hover:underline hover-bright">
                    outreach@pmclubsjsu.com
                  </a>
                </p>
                <p className="mt-6 text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} PM Club SJSU. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </FadeInSection>
      </div>
    </>
  )
}

