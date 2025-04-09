'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Brain, Code, Server, Bot, Cpu, Globe, Sparkles, Zap, MessageSquare, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 dark:bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8"
            >
              <Brain className="h-16 w-16 mx-auto text-primary floating" />
            </motion.div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Welcome to{' '}
              <span className="gradient-text">
                <TypeAnimation
                  sequence={[
                    'Kidjig',
                    2000,
                    'Innovation',
                    2000,
                    'The Future',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-xl dark:text-slate-300 max-w-2xl mx-auto mb-8">
              Building innovative AI solutions and platforms for the next generation of technology
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button size="lg" className="mr-4">Get Started</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Cpu className="h-8 w-8" />,
                title: "Advanced AI",
                description: "State-of-the-art artificial intelligence solutions"
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Global Scale",
                description: "Enterprise-ready infrastructure for worldwide deployment"
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "Innovation",
                description: "Cutting-edge technology and creative solutions"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Card className="relative p-6 dark:bg-slate-900 dark:text-slate-300 h-full">
                  <div className="flex items-center mb-4 text-primary">
                    {feature.icon}
                    <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                  </div>
                  <p className="dark:text-slate-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">About Kidjig</h2>
            <p className="text-lg dark:text-slate-300 max-w-2xl mx-auto">
              Our work spans two core areas: AI Products and Client Services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 dark:bg-slate-900 dark:text-slate-300 h-full group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <Brain className="h-10 w-10 text-primary mr-4 group-hover:animate-pulse" />
                  <h3 className="text-2xl font-semibold">AI Products</h3>
                </div>
                <p className="dark:text-slate-400 mb-6">
                  We build innovative tools and platforms for developers and businesses, including
                  AI Gateway, Kidjig Chat, and our AI Agent Platform.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Zap className="h-5 w-5 text-primary mr-2" />
                    <span>Advanced machine learning models</span>
                  </li>
                  <li className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-primary mr-2" />
                    <span>Natural language processing</span>
                  </li>
                  <li className="flex items-center">
                    <Database className="h-5 w-5 text-primary mr-2" />
                    <span>Scalable AI infrastructure</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 dark:bg-slate-900 dark:text-slate-300 h-full group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <Code className="h-10 w-10 text-primary mr-4 group-hover:animate-pulse" />
                  <h3 className="text-2xl font-semibold">Client Services</h3>
                </div>
                <p className="dark:text-slate-400 mb-6">
                  We work with clients to build custom web applications, end-to-end AI solutions,
                  and scalable backend systems.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Globe className="h-5 w-5 text-primary mr-2" />
                    <span>Global deployment solutions</span>
                  </li>
                  <li className="flex items-center">
                    <Server className="h-5 w-5 text-primary mr-2" />
                    <span>Enterprise infrastructure</span>
                  </li>
                  <li className="flex items-center">
                    <Bot className="h-5 w-5 text-primary mr-2" />
                    <span>Custom AI integration</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Our Services</h2>
            <p className="text-lg dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive solutions for your AI and development needs
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Server className="h-10 w-10 text-primary" />,
                title: "AI Gateway",
                description: "Unified API platform for text, image, and audio processing"
              },
              {
                icon: <Bot className="h-10 w-10 text-primary" />,
                title: "Kidjig Chat",
                description: "Multi-LLM conversational AI platform"
              },
              {
                icon: <Brain className="h-10 w-10 text-primary" />,
                title: "AI Agent Platform",
                description: "Build intelligent agents for automation and marketing"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <Card className="p-8 text-center dark:bg-slate-900 dark:text-slate-300 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex justify-center mb-6"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="dark:text-slate-400">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl dark:text-slate-300 max-w-2xl mx-auto mb-8">
              Join us in building the future of AI technology
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="mr-4">Contact Us</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}