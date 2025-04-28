"use client"

import dynamic from "next/dynamic"

// Exportamos as importações dinâmicas de um componente cliente
export const DynamicComponent = dynamic(() => import("./some-component"), {
  ssr: false,
  loading: () => <p>Carregando...</p>,
})

// Outros componentes dinâmicos podem ser adicionados aqui
