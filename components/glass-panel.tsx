"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface GlassPanelProps {
  children?: React.ReactNode
  className?: string
  variant?: "light" | "medium" | "strong" | "semi" | "contact" | "form"
  noBorder?: boolean
  onClick?: () => void
  as?: React.ElementType
}

export default function GlassPanel({
  children,
  className,
  variant = "medium",
  noBorder = false,
  onClick,
  as: Component = "div",
}: GlassPanelProps) {
  // Atualizando as variantes para usar os novos efeitos de vidro
  const variantClasses = {
    light: "bg-white/15 backdrop-blur-xl", // Mais transparente e mais blur
    medium: "bg-white/25 backdrop-blur-xl", // Mais transparente e mais blur
    strong: "bg-white/35 backdrop-blur-2xl", // Mais transparente e mais blur
    semi: "bg-white/20 backdrop-blur-xl", // Mais transparente e mais blur
    contact: "bg-white/40 backdrop-blur-2xl border-brand/15 shadow-lg hover:shadow-xl transition-all duration-300", // Mais transparente
    form: "bg-white/50 backdrop-blur-2xl border-brand/20 shadow-xl p-6", // Mais transparente
  }

  // Atualizando as classes para bordas mais suaves
  return (
    <Component
      className={cn(
        variantClasses[variant],
        !noBorder && variant !== "contact" && variant !== "form" && "border border-white/20", // Bordas mais suaves
        variant === "contact" && "border border-white/25", // Bordas mais suaves
        variant === "form" && "border border-white/25", // Bordas mais suaves
        "rounded-2xl shadow-glass", // Bordas mais arredondadas
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  )
}

// Exemplos de uso:
//
// Componente de Contato:
// <GlassPanel variant="contact" className="p-4">
//   <h3 className="text-lg font-bold">Entre em contato</h3>
//   <p className="text-sm text-gray-600">Estamos disponíveis para ajudar</p>
//   <div className="flex items-center mt-4">
//     <Mail className="h-5 w-5 text-brand mr-2" />
//     <span>contato@ireaje.net</span>
//   </div>
// </GlassPanel>
//
// Componente de Formulário:
// <GlassPanel variant="form" as="form" className="space-y-4">
//   <h3 className="text-xl font-bold">Envie sua mensagem</h3>
//   <div>
//     <label className="text-sm font-medium">Nome</label>
//     <Input className="mt-1" />
//   </div>
//   <div>
//     <label className="text-sm font-medium">Email</label>
//     <Input className="mt-1" type="email" />
//   </div>
//   <div>
//     <label className="text-sm font-medium">Mensagem</label>
//     <Textarea className="mt-1" />
//   </div>
//   <Button type="submit">Enviar</Button>
// </GlassPanel>
