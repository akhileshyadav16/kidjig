'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Brain } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import Link from 'next/link'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Kidjig</span>
            </Link>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="#about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="#services" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <ThemeToggle />
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="#services" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}