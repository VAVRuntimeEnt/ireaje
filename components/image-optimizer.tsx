"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export default function OptimizedImage({ src, alt, width, height, className, priority = false }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (priority) {
      setIsLoaded(true)
    }
  }, [priority])

  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-500 lazy-load ${isLoaded ? "loaded" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? "eager" : "lazy"}
      />
      {!isLoaded && !priority && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width: `${width}px`, height: `${height}px` }}
        />
      )}
    </div>
  )
}
