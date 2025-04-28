"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Send } from "lucide-react"

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formState, setFormState] = useState({
    name: "",
    organization: "",
    challenge: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert("Formulário enviado com sucesso! Em breve entraremos em contato.")
    setFormState({ name: "", organization: "", challenge: "" })
  }

  return (
    <section ref={ref} className="py-24 bg-gray-50 fluid-bg">
      <div className="blob blob-2" style={{ left: "80%", top: "30%" }}></div>
      <div className="blob blob-1" style={{ left: "10%", top: "70%" }}></div>

      {/* Glass Decorative Elements */}
      <div className="absolute left-20 top-1/3 w-36 h-36 glass-panel rounded-full opacity-20 animate-float-slow"></div>
      <div className="absolute right-20 bottom-1/3 w-48 h-48 glass-panel rounded-2xl opacity-30 transform rotate-12 animate-float"></div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              <div className="glass-panel-strong p-8 rounded-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Contato</h2>
                <p className="text-gray-600 leading-relaxed">
                  Estamos prontos para discutir como podemos ajudar sua organização a implementar sistemas que respeitam
                  seus usuários e proporcionam resultados excepcionais.
                </p>
              </div>

              <motion.div
                className="glass-card-strong p-8 rounded-xl relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-bl-[100px] -z-10"></div>

                <div className="flex items-start mb-6">
                  <div className="bg-teal/10 backdrop-blur-md p-3 rounded-full mr-4 shadow-lg">
                    <MessageSquare className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-teal mb-3">
                      Abordamos desafios que outros consideram insolúveis
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Se você enfrenta um problema complexo que parece não ter solução dentro dos paradigmas
                      convencionais, estamos especialmente interessados em conversar.
                    </p>
                  </div>
                </div>

                {/* Glass Divider */}
                <div className="glass-divider mb-6"></div>

                <div className="glass-pill text-teal">Inovação Disruptiva</div>

                {/* Animated Border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass-card-strong p-8 rounded-xl space-y-6 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-md -z-10"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal/5 rounded-full -z-10"></div>

                <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-white/50 border-white/30 focus:border-teal glass-panel"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="organization" className="text-sm font-medium">
                    Organização
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formState.organization}
                    onChange={handleChange}
                    required
                    className="bg-white/50 border-white/30 focus:border-teal glass-panel"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="challenge" className="text-sm font-medium">
                    Desafio atual
                  </label>
                  <Textarea
                    id="challenge"
                    name="challenge"
                    value={formState.challenge}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="bg-white/50 border-white/30 focus:border-teal glass-panel"
                  />
                </div>

                <Button type="submit" className="w-full glass-button-strong bg-teal hover:bg-teal-dark text-white">
                  <Send className="mr-2 h-4 w-4" />
                  <span className="relative z-10">Enviar</span>
                </Button>

                {/* Animated Border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
