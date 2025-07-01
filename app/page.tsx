"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Code, Cloud, Database, LineChart, Smartphone, Zap } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import ClientCard from "@/components/client-card"
import TechStackSection from "@/components/tech-stack-section"
import ContactForm from "@/components/contact-form"
import HeroBackground from "@/components/hero-background"
import TechShowcase from "@/components/tech-showcase"
import StatsSection from "@/components/stats-section"
import PortfolioGallery from "@/components/portfolio-gallery"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-24 md:py-32 overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Grey8 Tech Solutions</h1>
            <p className="text-xl md:text-2xl mb-6 animate-fade-in-up animation-delay-200">
              Building the Future with Cutting-Edge Technology and Innovation.
            </p>
            <p className="text-gray-300 text-lg mb-8 animate-fade-in-up animation-delay-400">
              IT Services, Digital Transformation, AI & More - Empowering Businesses Worldwide.
            </p>
            <Button
              size="lg"
              className="bg-gray-100 text-gray-900 hover:bg-white animate-fade-in-up animation-delay-600 hover:scale-105 transition-all duration-300"
              onClick={() => window.open("https://calendly.com/grey8tech", "_blank")}
            >
              Schedule a Free Strategy Session
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-30 animate-float">
            <svg viewBox="0 0 400 400" className="w-64 h-64 md:w-96 md:h-96">
              <defs>
                <linearGradient id="heroTechGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
              <circle
                cx="200"
                cy="200"
                r="150"
                fill="none"
                stroke="url(#heroTechGradient)"
                strokeWidth="2"
                opacity="0.3"
              />
              <circle
                cx="200"
                cy="200"
                r="100"
                fill="none"
                stroke="url(#heroTechGradient)"
                strokeWidth="2"
                opacity="0.5"
              />
              <circle cx="200" cy="200" r="50" fill="url(#heroTechGradient)" opacity="0.7" />
              <text x="200" y="210" textAnchor="middle" className="text-2xl font-bold" fill="white">
                AI
              </text>

              {/* Orbiting elements */}
              <g className="animate-spin" style={{ transformOrigin: "200px 200px", animationDuration: "20s" }}>
                <circle cx="200" cy="80" r="8" fill="url(#heroTechGradient)" />
                <circle cx="320" cy="200" r="8" fill="url(#heroTechGradient)" />
                <circle cx="200" cy="320" r="8" fill="url(#heroTechGradient)" />
                <circle cx="80" cy="200" r="8" fill="url(#heroTechGradient)" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        {/* Floating tech icons */}
        <div className="absolute top-20 left-10 animate-bounce-slow">
          <Code className="h-8 w-8 text-white/30" />
        </div>
        <div className="absolute bottom-20 right-20 animate-bounce-slow animation-delay-1000">
          <Database className="h-8 w-8 text-white/30" />
        </div>
        <div className="absolute top-40 right-40 animate-bounce-slow animation-delay-500">
          <Cloud className="h-8 w-8 text-white/30" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-white" id="about">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Grey8 Tech Solutions</h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto mb-8"></div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              Grey8 Tech Solutions is a forward-thinking IT service provider that believes in the power of technology to
              create innovative solutions for businesses of all sizes. Whether it's developing web applications,
              providing strategic consultations, or delivering cutting-edge AI tools, we approach every project with a
              product-first mindset and a commitment to digital transformation.
            </p>
            <p className="text-lg text-gray-700">
              With a global engineering team, we help companies leverage innovation to stay ahead in today's fast-paced
              digital world.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex justify-center animate-fade-in">
              <div className="w-24 h-24">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="aiIcon" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#667eea" />
                      <stop offset="100%" stopColor="#764ba2" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="80" fill="url(#aiIcon)" opacity="0.1" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="url(#aiIcon)" strokeWidth="2" />
                  <circle cx="100" cy="100" r="40" fill="none" stroke="url(#aiIcon)" strokeWidth="2" />
                  <circle cx="100" cy="100" r="20" fill="url(#aiIcon)" />
                  <text x="100" y="110" textAnchor="middle" className="text-lg font-bold" fill="white">
                    AI
                  </text>
                </svg>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in animation-delay-200">
              <div className="w-24 h-24">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="cloudIcon" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4facfe" />
                      <stop offset="100%" stopColor="#00f2fe" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M60 120 Q60 100 80 100 Q80 80 100 80 Q120 80 120 100 Q140 100 140 120 Q140 140 120 140 L80 140 Q60 140 60 120"
                    fill="url(#cloudIcon)"
                    opacity="0.8"
                  />
                  <circle cx="70" cy="110" r="3" fill="white" opacity="0.6" />
                  <circle cx="90" cy="105" r="2" fill="white" opacity="0.6" />
                  <circle cx="110" cy="115" r="2.5" fill="white" opacity="0.6" />
                  <circle cx="130" cy="108" r="2" fill="white" opacity="0.6" />
                </svg>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in animation-delay-400">
              <div className="w-24 h-24">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="mobileIcon" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fa709a" />
                      <stop offset="100%" stopColor="#fee140" />
                    </linearGradient>
                  </defs>
                  <rect x="70" y="40" width="60" height="120" rx="10" fill="url(#mobileIcon)" opacity="0.8" />
                  <rect x="75" y="50" width="50" height="80" rx="5" fill="white" opacity="0.9" />
                  <circle cx="100" cy="145" r="5" fill="white" opacity="0.9" />
                  <rect x="85" y="60" width="30" height="3" rx="1.5" fill="url(#mobileIcon)" />
                  <rect x="85" y="70" width="25" height="2" rx="1" fill="url(#mobileIcon)" opacity="0.6" />
                  <rect x="85" y="75" width="20" height="2" rx="1" fill="url(#mobileIcon)" opacity="0.6" />
                </svg>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in animation-delay-600">
              <div className="w-24 h-24">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="webIcon" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a8edea" />
                      <stop offset="100%" stopColor="#fed6e3" />
                    </linearGradient>
                  </defs>
                  <rect x="40" y="60" width="120" height="80" rx="8" fill="url(#webIcon)" opacity="0.8" />
                  <rect x="45" y="75" width="110" height="60" rx="4" fill="white" opacity="0.9" />
                  <circle cx="55" cy="70" r="3" fill="#ff6b6b" />
                  <circle cx="65" cy="70" r="3" fill="#feca57" />
                  <circle cx="75" cy="70" r="3" fill="#48dbfb" />
                  <rect x="55" y="85" width="40" height="3" rx="1.5" fill="url(#webIcon)" />
                  <rect x="55" y="95" width="60" height="2" rx="1" fill="url(#webIcon)" opacity="0.6" />
                  <rect x="55" y="100" width="50" height="2" rx="1" fill="url(#webIcon)" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Showcase Section */}
      <TechShowcase />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Grey8 Tech Solutions, we offer a comprehensive suite of services that help businesses navigate their
              digital journey with confidence. Our focus is on innovation, quality, and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<LineChart className="h-10 w-10" />}
              title="Digital Transformation & Product Strategy"
              description="Helping businesses evolve with digital-first strategies, ensuring sustainable growth through custom digital solutions."
            />
            <ServiceCard
              icon={<Code className="h-10 w-10" />}
              title="Full Stack Software Engineering"
              description="We build scalable and robust web and mobile applications using the latest technologies."
            />
            <ServiceCard
              icon={<Cloud className="h-10 w-10" />}
              title="Cloud & DevOps Engineering"
              description="Delivering scalable, secure, and cost-effective cloud solutions, with automated infrastructure management and optimized operations."
            />
            <ServiceCard
              icon={<Smartphone className="h-10 w-10" />}
              title="Mobile App Development"
              description="Crafting seamless, intuitive, and high-performance mobile apps for Android and iOS platforms."
            />
            <ServiceCard
              icon={<Database className="h-10 w-10" />}
              title="Data Engineering & AI Enablement"
              description="Transforming raw data into valuable insights and enabling AI to drive smarter decision-making."
            />
            <ServiceCard
              icon={<Zap className="h-10 w-10" />}
              title="Next-Gen Engineering"
              description="From AI tools to blockchain, we provide state-of-the-art solutions that future-proof your business."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Success Stories Section */}
      <section className="py-16 md:py-24 bg-white" id="success-stories">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results for Real Businesses</h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We pride ourselves on delivering measurable success for clients, from dynamic startups to Fortune 500
              companies. Our work is driven by results and our commitment to turning your vision into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ClientCard
              title="Healthcare Startup"
              description="We helped this healthcare startup achieve operational efficiency through a custom mobile application, improving patient engagement and boosting overall productivity by 30%."
              mockup="healthcare"
            />
            <ClientCard
              title="Global Retailer"
              description="Delivered a cutting-edge AI-powered CRM solution for a global retailer, increasing customer retention by 40%."
              mockup="ecommerce"
            />
            <ClientCard
              title="Financial Services Provider"
              description="For this financial services provider, we developed a cloud-based platform that reduced system downtime by 25%, optimizing their service delivery."
              mockup="dashboard"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <PortfolioGallery />

      {/* CEO Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1200 600" className="w-full h-full">
            <defs>
              <pattern id="techPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="white" opacity="0.1" />
                <line x1="0" y1="20" x2="40" y2="20" stroke="white" strokeWidth="0.5" opacity="0.05" />
                <line x1="20" y1="0" x2="20" y2="40" stroke="white" strokeWidth="0.5" opacity="0.05" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#techPattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Message from Udit Chauhan
                </h2>
                <p className="text-gray-300 mb-4 text-lg">Founder & CEO</p>
                <blockquote className="text-xl md:text-2xl italic mb-8 text-gray-100 leading-relaxed">
                  "At Grey8 Tech Solutions, we don't just build tech — we build the future. Whether it's cloud, code, or
                  creative, we've got it covered."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Button
                    className="bg-white text-gray-900 hover:bg-gray-100"
                    onClick={() => window.open("mailto:udit@grey8tech.com", "_blank")}
                  >
                    Connect with Udit
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                    onClick={() => window.open("https://linkedin.com/in/uditchauhan", "_blank")}
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 w-80 h-80 md:w-96 md:h-96 shadow-2xl">
                  <img
                    src="/images/ceo-udit.jpg"
                    alt="Udit Chauhan, Founder & CEO"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating tech elements around the image */}
                <div className="absolute -top-4 -right-4 bg-blue-500/20 backdrop-blur-sm rounded-full p-3 animate-float">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-purple-500/20 backdrop-blur-sm rounded-full p-3 animate-float animation-delay-1000">
                  <Code className="h-6 w-6 text-purple-400" />
                </div>
                <div className="absolute top-1/2 -left-8 bg-green-500/20 backdrop-blur-sm rounded-full p-3 animate-float animation-delay-500">
                  <Database className="h-6 w-6 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white" id="why-choose-us">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-gray-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Delivery</h3>
              <p className="text-gray-700">We keep our clients informed at every stage of the project.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-gray-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Senior Engineers Only</h3>
              <p className="text-gray-700">
                Our team consists of highly experienced professionals who bring deep expertise to every project.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-gray-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Time to MVP</h3>
              <p className="text-gray-700">
                We understand the urgency of market readiness, and we deliver quickly without compromising quality.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-gray-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">DevOps by Default</h3>
              <p className="text-gray-700">
                We integrate DevOps practices into all our solutions to ensure continuous delivery and better
                collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50" id="testimonials">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Here's what some of our clients say about working with us:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Grey8 Tech Solutions helped us transform our outdated system into a cutting-edge web platform. Their team not only met our expectations but exceeded them."
              author="Sarah Johnson"
              company="HealthTech Innovations"
              image="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            />
            <TestimonialCard
              quote="The mobile app they developed has helped us increase engagement by over 50%. Grey8's expertise in mobile and web development is unparalleled."
              author="Michael Chen"
              company="RetailMax Global"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            />
            <TestimonialCard
              quote="We were impressed with the speed and professionalism of the team. Their cloud solutions saved us time and money, enabling us to scale rapidly."
              author="David Rodriguez"
              company="FinanceFlow Solutions"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            />
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Grey8 Tech Solutions - Innovating for Tomorrow. Transforming Your Business Today.
          </h2>
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            onClick={() => window.open("https://calendly.com/grey8tech", "_blank")}
          >
            Get Started Today
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We'd love to discuss how we can help you grow your business with innovative technology. Reach out to us
              today!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gray-800 text-white p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Email</p>
                      <p className="text-gray-800 font-medium">info@grey8tech.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-800 text-white p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Phone</p>
                      <p className="text-gray-800 font-medium">+91 (623) 000-9945</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-800 text-white p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Location</p>
                      <p className="text-gray-800 font-medium">Chandigarh, India & Shimla, Himachal Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2024 Grey8 Tech Solutions - All Rights Reserved</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
