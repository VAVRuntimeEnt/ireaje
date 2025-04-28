"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Send, Calendar, Phone, Mail, Video, MessageCircle, Sparkles, Check, Users } from "lucide-react"
import { cn } from "@/lib/utils"

type ContactMethod = "form" | "call" | "meeting" | "chat"

export default function ContatoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [contactMethod, setContactMethod] = useState<ContactMethod>("form")
  const [formState, setFormState] = useState({
    name: "",
    organization: "",
    challenge: "",
    email: "",
    phone: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormState({
        name: "",
        organization: "",
        challenge: "",
        email: "",
        phone: "",
      })
    }, 3000)
  }

  return (
    <section ref={ref} className="section-spacing py-28 relative overflow-hidden contato-section">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white -z-10"></div>
      <div className="blob blob-2" style={{ left: "80%", top: "30%", background: "rgba(78, 203, 222, 0.15)" }}></div>
      <div className="blob blob-1" style={{ left: "10%", top: "70%", background: "rgba(0, 95, 120, 0.1)" }}></div>

      {/* Geometric Patterns */}
      <div className="geometric-pattern"></div>
      <div className="geometric-dots"></div>
      <div className="geometric-lines"></div>

      {/* Glass Accents */}
      <div className="glass-accent glass-accent-1 top-20 left-10 md:block hidden"></div>
      <div className="glass-accent glass-accent-2 bottom-20 right-10 md:block hidden"></div>
      <div className="glass-accent glass-accent-3 top-1/2 left-1/4 md:block hidden"></div>

      {/* Glass Decorative Elements */}
      <div className="absolute left-20 top-1/3 w-36 h-36 glass-panel rounded-full opacity-20 animate-float-slow md:block hidden"></div>
      <div className="absolute right-20 bottom-1/3 w-48 h-48 glass-panel rounded-2xl opacity-30 transform rotate-12 animate-float md:block hidden"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="glass-panel-strong p-6 md:p-8 rounded-2xl inline-block mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">Fale Conosco</h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Escolha a melhor forma de entrar em contato conosco. Estamos prontos para discutir como podemos ajudar sua
            organização a implementar sistemas que respeitam seus usuários.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Method Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12"
          >
            <button
              onClick={() => setContactMethod("form")}
              className={cn(
                "glass-panel-strong rounded-xl p-3 md:p-4 transition-all duration-300 flex items-center gap-2 md:gap-3",
                contactMethod === "form" ? "shadow-lg scale-105 bg-white/50" : "hover:bg-white/30 hover:scale-[1.02]",
              )}
            >
              <div
                className={cn(
                  "p-1.5 md:p-2 rounded-lg text-white",
                  contactMethod === "form" ? "bg-gradient-to-r from-brand-light to-brand" : "bg-gray-300",
                )}
              >
                <MessageSquare className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <span
                className={cn(
                  "font-medium text-xs md:text-sm",
                  contactMethod === "form" ? "text-gray-900" : "text-gray-600",
                )}
              >
                Formulário
              </span>
            </button>

            <button
              onClick={() => setContactMethod("call")}
              className={cn(
                "glass-panel-strong rounded-xl p-3 md:p-4 transition-all duration-300 flex items-center gap-2 md:gap-3",
                contactMethod === "call" ? "shadow-lg scale-105 bg-white/50" : "hover:bg-white/30 hover:scale-[1.02]",
              )}
            >
              <div
                className={cn(
                  "p-1.5 md:p-2 rounded-lg text-white",
                  contactMethod === "call" ? "bg-gradient-to-r from-brand to-brand-medium" : "bg-gray-300",
                )}
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <span
                className={cn(
                  "font-medium text-xs md:text-sm",
                  contactMethod === "call" ? "text-gray-900" : "text-gray-600",
                )}
              >
                Ligação
              </span>
            </button>

            <button
              onClick={() => setContactMethod("meeting")}
              className={cn(
                "glass-panel-strong rounded-xl p-3 md:p-4 transition-all duration-300 flex items-center gap-2 md:gap-3",
                contactMethod === "meeting"
                  ? "shadow-lg scale-105 bg-white/50"
                  : "hover:bg-white/30 hover:scale-[1.02]",
              )}
            >
              <div
                className={cn(
                  "p-1.5 md:p-2 rounded-lg text-white",
                  contactMethod === "meeting" ? "bg-gradient-to-r from-brand-medium to-brand-dark" : "bg-gray-300",
                )}
              >
                <Calendar className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <span
                className={cn(
                  "font-medium text-xs md:text-sm",
                  contactMethod === "meeting" ? "text-gray-900" : "text-gray-600",
                )}
              >
                Agendar Reunião
              </span>
            </button>

            <button
              onClick={() => setContactMethod("chat")}
              className={cn(
                "glass-panel-strong rounded-xl p-3 md:p-4 transition-all duration-300 flex items-center gap-2 md:gap-3",
                contactMethod === "chat" ? "shadow-lg scale-105 bg-white/50" : "hover:bg-white/30 hover:scale-[1.02]",
              )}
            >
              <div
                className={cn(
                  "p-1.5 md:p-2 rounded-lg text-white",
                  contactMethod === "chat" ? "bg-gradient-to-r from-brand-dark to-brand-deeper" : "bg-gray-300",
                )}
              >
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <span
                className={cn(
                  "font-medium text-xs md:text-sm",
                  contactMethod === "chat" ? "text-gray-900" : "text-gray-600",
                )}
              >
                Chat Instantâneo
              </span>
            </button>
          </motion.div>

          {/* Contact Method Content */}
          <AnimatePresence mode="wait">
            {contactMethod === "form" && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              >
                <div className="glass-card-strong p-6 md:p-8 rounded-xl">
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 gradient-text">Por que nos contatar?</h3>

                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-brand-light to-brand p-2 rounded-lg text-white shadow-md mr-3 md:mr-4">
                        <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-sm md:text-base">Desafios Complexos</h4>
                        <p className="text-xs md:text-sm text-gray-600">
                          Abordamos problemas que outros consideram insolúveis dentro dos paradigmas convencionais.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-brand to-brand-medium p-2 rounded-lg text-white shadow-md mr-3 md:mr-4">
                        <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-sm md:text-base">Tecnologia Proprietária</h4>
                        <p className="text-xs md:text-sm text-gray-600">
                          Nossas soluções são baseadas em tecnologias exclusivas desenvolvidas para superar limitações
                          convencionais.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-brand-medium to-brand-dark p-2 rounded-lg text-white shadow-md mr-3 md:mr-4">
                        <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-sm md:text-base">Resultados Comprovados</h4>
                        <p className="text-xs md:text-sm text-gray-600">
                          Nossos clientes experimentam melhorias significativas em eficiência, segurança e satisfação do
                          usuário.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-divider my-4 md:my-6"></div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-brand-light to-brand flex items-center justify-center text-white">
                        <Mail className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <div className="ml-2 md:ml-3">
                        <p className="text-xs md:text-sm font-medium">Email direto</p>
                        <p className="text-xs text-brand">contato@ireaje.net</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-brand to-brand-medium flex items-center justify-center text-white">
                        <Phone className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <div className="ml-2 md:ml-3">
                        <p className="text-xs md:text-sm font-medium">Telefone</p>
                        <p className="text-xs text-brand">(11) 9999-9999</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card-strong p-6 md:p-8 rounded-xl relative">
                  <AnimatePresence>
                    {formSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl"
                      >
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-brand-light to-brand flex items-center justify-center text-white mb-4">
                          <Check className="h-6 w-6 md:h-8 md:w-8" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                        <p className="text-gray-600 text-center max-w-xs text-sm md:text-base">
                          Obrigado pelo seu contato. Nossa equipe responderá em breve.
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 gradient-text">Envie sua mensagem</h3>

                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div className="space-y-1 md:space-y-2">
                        <label htmlFor="name" className="text-xs md:text-sm font-medium">
                          Nome
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="bg-white/50 border-white/30 focus:border-brand glass-panel text-xs md:text-sm"
                        />
                      </div>

                      <div className="space-y-1 md:space-y-2">
                        <label htmlFor="organization" className="text-xs md:text-sm font-medium">
                          Organização
                        </label>
                        <Input
                          id="organization"
                          name="organization"
                          value={formState.organization}
                          onChange={handleChange}
                          required
                          className="bg-white/50 border-white/30 focus:border-brand glass-panel text-xs md:text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div className="space-y-1 md:space-y-2">
                        <label htmlFor="email" className="text-xs md:text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="bg-white/50 border-white/30 focus:border-brand glass-panel text-xs md:text-sm"
                        />
                      </div>

                      <div className="space-y-1 md:space-y-2">
                        <label htmlFor="phone" className="text-xs md:text-sm font-medium">
                          Telefone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="bg-white/50 border-white/30 focus:border-brand glass-panel text-xs md:text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      <label htmlFor="challenge" className="text-xs md:text-sm font-medium">
                        Como podemos ajudar?
                      </label>
                      <Textarea
                        id="challenge"
                        name="challenge"
                        value={formState.challenge}
                        onChange={handleChange}
                        rows={4}
                        required
                        className="bg-white/50 border-white/30 focus:border-brand glass-panel text-xs md:text-sm"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full glass-button-strong bg-gradient-to-r from-brand-light via-brand to-brand-dark hover:from-brand hover:to-brand-medium text-white border-2 border-white/30"
                    >
                      <Send className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                      <span className="relative z-10 text-xs md:text-sm">Enviar Mensagem</span>
                    </Button>
                  </form>
                </div>
              </motion.div>
            )}

            {contactMethod === "call" && (
              <motion.div
                key="call"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-card-strong p-6 md:p-8 rounded-xl max-w-2xl mx-auto"
              >
                <div className="flex items-center justify-center mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-brand to-brand-medium flex items-center justify-center text-white">
                    <Phone className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 gradient-text">
                  Agende uma ligação
                </h3>
                <p className="text-gray-600 text-center mb-6 md:mb-8 text-sm md:text-base">
                  Prefere conversar por telefone? Deixe seus dados e entraremos em contato no horário mais conveniente
                  para você.
                </p>

                <form className="space-y-4 md:space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-1 md:space-y-2">
                      <label htmlFor="call-name" className="text-xs md:text-sm font-medium">
                        Nome
                      </label>
                      <Input
                        id="call-name"
                        required
                        className="bg-white/50 border-white/30 focus:border-brand glass-panel text-xs md:text-sm"
                      />
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      <label htmlFor="call-phone" className="text-xs md:text-sm font-medium">
                        Telefone
                      </label>
                      <Input
                        id="call-phone"
                        required
                        className="bg-white/50 border-white/30 focus:border-brand glass-panel text-xs md:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <label htmlFor="call-time" className="text-xs md:text-sm font-medium">
                      Melhor horário para contato
                    </label>
                    <Input
                      id="call-time"
                      placeholder="Ex: Terça-feira, entre 14h e 16h"
                      required
                      className="bg-white/50 border-white/30 focus:border-brand glass-panel text-xs md:text-sm"
                    />
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <label htmlFor="call-subject" className="text-xs md:text-sm font-medium">
                      Assunto
                    </label>
                    <Input
                      id="call-subject"
                      placeholder="Sobre o que você gostaria de conversar?"
                      required
                      className="bg-white/50 border-white/30 focus:border-brand glass-panel text-xs md:text-sm"
                    />
                  </div>

                  <Button className="w-full glass-button-strong bg-gradient-to-r from-brand to-brand-medium hover:from-brand-light hover:to-brand text-white border-2 border-white/30">
                    <Phone className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                    <span className="relative z-10 text-xs md:text-sm">Solicitar Ligação</span>
                  </Button>
                </form>
              </motion.div>
            )}

            {contactMethod === "meeting" && (
              <motion.div
                key="meeting"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-card-strong p-6 md:p-8 rounded-xl max-w-2xl mx-auto"
              >
                <div className="flex items-center justify-center mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-brand-medium to-brand-dark flex items-center justify-center text-white">
                    <Calendar className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 gradient-text">
                  Agende uma reunião
                </h3>
                <p className="text-gray-600 text-center mb-6 md:mb-8 text-sm md:text-base">
                  Escolha o formato e horário que melhor se adapta à sua agenda para conversarmos sobre suas
                  necessidades.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-8">
                  <div className="glass-panel p-3 md:p-4 rounded-xl text-center w-32 md:w-40">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-brand-light to-brand flex items-center justify-center text-white mx-auto mb-2 md:mb-3">
                      <Video className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <p className="font-medium text-xs md:text-sm">Videoconferência</p>
                  </div>

                  <div className="glass-panel p-3 md:p-4 rounded-xl text-center w-32 md:w-40">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-brand to-brand-medium flex items-center justify-center text-white mx-auto mb-2 md:mb-3">
                      <Users className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <p className="font-medium text-xs md:text-sm">Presencial</p>
                  </div>
                </div>

                <div className="glass-panel p-4 md:p-6 rounded-xl mb-6 md:mb-8">
                  <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Selecione uma data e horário</h4>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {["Seg", "Ter", "Qua", "Qui", "Sex"].map((day, i) => (
                      <div key={i} className="glass-panel p-2 rounded-lg text-center">
                        <p className="text-xs text-gray-500">{day}</p>
                        <p className="font-medium text-xs md:text-sm">{i + 10}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["09:00", "10:30", "13:00", "15:30", "17:00"].map((time, i) => (
                      <div key={i} className="glass-panel px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full glass-button-strong bg-gradient-to-r from-brand-medium to-brand-dark hover:from-brand hover:to-brand-dark text-white border-2 border-white/30">
                  <Calendar className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                  <span className="relative z-10 text-xs md:text-sm">Agendar Reunião</span>
                </Button>
              </motion.div>
            )}

            {contactMethod === "chat" && (
              <motion.div
                key="chat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-card-strong p-6 md:p-8 rounded-xl max-w-2xl mx-auto"
              >
                <div className="flex items-center justify-center mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-brand-dark to-brand-deeper flex items-center justify-center text-white">
                    <MessageCircle className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 gradient-text">
                  Chat Instantâneo
                </h3>
                <p className="text-gray-600 text-center mb-6 md:mb-8 text-sm md:text-base">
                  Converse em tempo real com nossa equipe para tirar dúvidas ou discutir seu projeto.
                </p>

                <div className="glass-panel p-4 md:p-6 rounded-xl mb-6 md:mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-brand to-brand-medium flex items-center justify-center text-white">
                        <MessageSquare className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <div className="ml-2 md:ml-3">
                        <p className="font-medium text-xs md:text-sm">Atendimento IREAJE</p>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                          <p className="text-xs text-gray-500">Online agora</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Tempo médio de resposta: <span className="font-medium">2 min</span>
                    </div>
                  </div>

                  <div className="h-36 md:h-48 bg-white/30 rounded-lg p-3 md:p-4 mb-4 overflow-y-auto">
                    <div className="flex justify-start mb-3">
                      <div className="bg-white/70 rounded-lg rounded-tl-none p-2 md:p-3 max-w-[80%]">
                        <p className="text-xs md:text-sm">Olá! Como podemos ajudar você hoje?</p>
                        <p className="text-xs text-gray-500 text-right mt-1">10:30</p>
                      </div>
                    </div>

                    <div className="flex justify-end mb-3">
                      <div className="bg-gradient-to-r from-brand-light/20 to-brand/20 rounded-lg rounded-tr-none p-2 md:p-3 max-w-[80%]">
                        <p className="text-xs md:text-sm">Gostaria de saber mais sobre o Runtime Euleriano.</p>
                        <p className="text-xs text-gray-500 text-right mt-1">10:31</p>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="bg-white/70 rounded-lg rounded-tl-none p-2 md:p-3 max-w-[80%]">
                        <p className="text-xs md:text-sm">
                          Claro! O Runtime Euleriano é nossa tecnologia proprietária que...
                        </p>
                        <p className="text-xs text-gray-500 text-right mt-1">10:32</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Input
                      placeholder="Digite sua mensagem..."
                      className="bg-white/50 border-white/30 focus:border-brand glass-panel text-xs md:text-sm"
                    />
                    <Button className="glass-button-strong bg-gradient-to-r from-brand to-brand-medium text-white px-3 md:px-4">
                      <Send className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xs md:text-sm text-gray-500 mb-2">Prefere outros canais?</p>
                  <div className="flex justify-center gap-3 md:gap-4">
                    <div className="glass-pill text-xs">
                      <svg className="h-3 w-3 md:h-4 md:w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      </svg>
                      WhatsApp
                    </div>
                    <div className="glass-pill text-xs">
                      <svg className="h-3 w-3 md:h-4 md:w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                      </svg>
                      Twitter
                    </div>
                    <div className="glass-pill text-xs">
                      <svg className="h-3 w-3 md:h-4 md:w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      </svg>
                      Instagram
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
