"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Success Stories", href: "#success-stories" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className={cn("text-2xl font-bold transition-colors", isScrolled ? "text-gray-900" : "text-white")}>
              Grey8 Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-gray-600",
                  isScrolled ? "text-gray-800" : "text-white",
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className={cn(
                "ml-4",
                isScrolled ? "bg-gray-800 hover:bg-gray-900 text-white" : "bg-white hover:bg-gray-100 text-gray-900",
              )}
              onClick={() => window.open("https://calendly.com/grey8tech", "_blank")}
            >
              Schedule a Call
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className={isScrolled ? "text-gray-900" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-medium transition-colors hover:text-gray-600 py-2",
                    isScrolled ? "text-gray-800" : "text-white",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className={cn(
                  isScrolled ? "bg-gray-800 hover:bg-gray-900 text-white" : "bg-white hover:bg-gray-100 text-gray-900",
                )}
                onClick={() => window.open("https://calendly.com/grey8tech", "_blank")}
              >
                Schedule a Call
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
