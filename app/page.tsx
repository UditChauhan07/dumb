"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Code2,
  Cloud,
  Smartphone,
  Database,
  Blocks,
  Zap,
  Users,
  Target,
  Shield,
  Clock,
  Rocket,
  Star,
  ChevronUp,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TechNovaWebsite() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight * 0.5)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="bg-gray-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            TechNova Systems
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["Services", "Work", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
            Get Started
          </Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-purple-950" />
          {/* Floating Elements */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Future-Proof Engineering
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            for Digital-First Businesses
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We turn ideas into scalable platforms using cloud, code, and strategy.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-8 py-4 group"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 text-lg px-8 py-4"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Who We Are
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              TechNova Systems is a product-first engineering company that transforms ambitious ideas into
              market-leading digital platforms. Our global team of senior engineers combines deep technical expertise
              with strategic thinking to deliver solutions that scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Product-First Mindset",
                description:
                  "We don't just build features—we engineer products that solve real problems and drive business growth.",
              },
              {
                icon: Users,
                title: "Global Engineering Team",
                description:
                  "Senior engineers across 15+ countries, working in your timezone with proven track records.",
              },
              {
                icon: Zap,
                title: "Innovation Focus",
                description:
                  "From AI/ML to blockchain, we stay ahead of technology curves to future-proof your solutions.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end engineering services that transform your business from concept to scale
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                icon: Target,
                title: "Digital Transformation & Product Strategy",
                description:
                  "Strategic roadmaps, technical architecture, and product discovery to align technology with business goals.",
                tags: ["Strategy", "Architecture", "Product Discovery", "Technical Roadmaps"],
              },
              {
                icon: Code2,
                title: "Full-Stack Software Engineering",
                description:
                  "Enterprise-grade applications built with modern frameworks and best practices for scalability and performance.",
                tags: ["Java", "MERN Stack", "LAMP", "React", "Node.js", "PHP"],
              },
              {
                icon: Cloud,
                title: "Cloud & DevOps Engineering",
                description:
                  "Cloud-native solutions with automated CI/CD, infrastructure as code, and enterprise-grade security.",
                tags: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
              },
              {
                icon: Smartphone,
                title: "Mobile App Development",
                description:
                  "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
                tags: ["React Native", "Flutter", "iOS", "Android", "Progressive Web Apps"],
              },
              {
                icon: Database,
                title: "Data Engineering & AI Enablement",
                description:
                  "Data pipelines, machine learning models, and AI-powered features that unlock business intelligence.",
                tags: ["Python", "TensorFlow", "Data Pipelines", "ML Models", "Analytics"],
              },
              {
                icon: Blocks,
                title: "Next-Gen Engineering",
                description:
                  "Cutting-edge solutions in blockchain, IoT, and AR/VR that position your business for the future.",
                tags: ["Blockchain", "IoT", "AR/VR", "Web3", "Smart Contracts"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-gray-900/30 border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="bg-gray-800 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-colors"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results for real businesses—from startups to Fortune 500 companies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                client: "FinTech Startup",
                goal: "Build secure trading platform",
                solution: "Microservices architecture with real-time data processing",
                result: "500K+ users, $50M+ trading volume",
                stack: ["Java", "React", "AWS", "Kafka"],
              },
              {
                client: "Healthcare Enterprise",
                goal: "Modernize patient management system",
                solution: "Cloud-native platform with AI-powered insights",
                result: "40% efficiency increase, HIPAA compliant",
                stack: ["Node.js", "Vue.js", "Azure", "Python"],
              },
              {
                client: "E-commerce Scale-up",
                goal: "Handle 10x traffic growth",
                solution: "Serverless architecture with auto-scaling",
                result: "99.9% uptime during Black Friday",
                stack: ["React", "Lambda", "DynamoDB", "CDN"],
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-cyan-400 mb-2">{study.client}</h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="text-gray-400">Goal:</span>
                          <span className="text-white ml-2">{study.goal}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Solution:</span>
                          <span className="text-white ml-2">{study.solution}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Result:</span>
                          <span className="text-green-400 ml-2 font-semibold">{study.result}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.stack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-purple-500 text-purple-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <motion.div
                      className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm">View Full Case Study</span>
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Tech Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies and proven frameworks that power modern applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React",
              "Vue.js",
              "Angular",
              "Node.js",
              "Java",
              "Python",
              "PHP",
              "AWS",
              "Azure",
              "GCP",
              "Docker",
              "Kubernetes",
              "Terraform",
              "MongoDB",
              "PostgreSQL",
              "Redis",
              "TensorFlow",
              "PyTorch",
              "Blockchain",
              "GraphQL",
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <Card className="bg-gray-900/30 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{tech}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Why Choose TechNova
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Transparent Delivery",
                description: "Real-time project visibility with daily updates and milestone tracking.",
              },
              {
                icon: Users,
                title: "Senior Engineers Only",
                description: "No junior developers. Every team member has 5+ years of experience.",
              },
              {
                icon: Clock,
                title: "Fast Time to MVP",
                description: "Proven methodologies that get your product to market 40% faster.",
              },
              {
                icon: Rocket,
                title: "DevOps by Default",
                description: "Built-in CI/CD, monitoring, and scaling from day one.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="group"
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 h-full hover:shadow-xl hover:shadow-cyan-500/10">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "TechNova transformed our legacy system into a modern, scalable platform. Their expertise in cloud architecture saved us months of development time.",
                author: "Sarah Chen",
                title: "CTO, FinanceFlow",
                rating: 5,
              },
              {
                quote:
                  "The team's product-first approach helped us identify the right features to build. We launched 6 weeks ahead of schedule with exceptional quality.",
                author: "Marcus Rodriguez",
                title: "Founder, HealthTech Solutions",
                rating: 5,
              },
              {
                quote:
                  "Outstanding technical depth combined with clear communication. They delivered exactly what we needed and provided excellent ongoing support.",
                author: "Emily Watson",
                title: "VP Engineering, RetailNext",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-300 mb-6 italic">"{testimonial.quote}"</blockquote>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-cyan-400 text-sm">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Have an idea? Let's engineer it together.
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's discuss your project and create
              something extraordinary.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-xl px-12 py-6 group"
              >
                Schedule Free Strategy Session
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                TechNova Systems
              </div>
              <p className="text-gray-400 mb-6">Future-proof engineering for digital-first businesses.</p>
              <div className="flex space-x-4">
                {[Linkedin, Twitter, Github].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Digital Transformation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Full-Stack Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Cloud & DevOps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Mobile Development
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>hello@technovasystems.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>San Francisco, New York, London</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechNova Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
