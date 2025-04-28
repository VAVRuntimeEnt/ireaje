import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-white/10 backdrop-blur-md py-8 relative">
      {/* Geometric Patterns */}
      <div className="geometric-dots opacity-30"></div>

      {/* Geometric Shapes */}
      <div
        className="geometric-shape geometric-triangle absolute top-[10%] right-[10%] animate-float-geometric"
        style={{ opacity: 0.2 }}
      ></div>
      <div
        className="geometric-shape geometric-square absolute bottom-[20%] left-[15%] animate-float-geometric"
        style={{ opacity: 0.2, animationDelay: "-2s" }}
      ></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center">
              <Image src="/images/logo.png" alt="IREAJE.NET" width={32} height={32} className="h-8 w-auto mr-2" />
              <h3 className="text-lg font-bold gradient-text glass-panel inline-block px-4 py-2 rounded-lg">
                IREAJE.NET
              </h3>
            </div>
            <p className="text-sm text-gray-600">Arquitetura para sistemas que respeitam</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold glass-panel inline-block px-3 py-1 rounded-lg">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-brand transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-brand transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/tecnologias" className="text-gray-600 hover:text-brand transition-colors">
                  Tecnologias
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold glass-panel inline-block px-3 py-1 rounded-lg">Soluções</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solucoes#vintra" className="text-gray-600 hover:text-brand transition-colors">
                  VINTRA
                </Link>
              </li>
              <li>
                <Link href="/solucoes#gopilot" className="text-gray-600 hover:text-brand transition-colors">
                  GoPilot
                </Link>
              </li>
              <li>
                <Link href="/solucoes#concept2code" className="text-gray-600 hover:text-brand transition-colors">
                  CONCEPT2CODE
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold glass-panel inline-block px-3 py-1 rounded-lg">Contato</h4>
            <Link
              href="/contato"
              className="inline-flex items-center text-sm text-brand hover:text-brand-dark transition-colors group"
            >
              Fale conosco
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-4 text-center">
          <p className="text-xs text-gray-500 glass-panel inline-block px-3 py-1 rounded-lg">
            © 2025 IREAJE.NET. Fazendo nascer o novo.
          </p>
        </div>
      </div>
    </footer>
  )
}
