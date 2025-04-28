"use client"

import { useState, useEffect } from "react"

export function useDevicePerformance() {
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    // Check for low performance indicators
    const checkPerformance = () => {
      // Check if device has low memory (if available)
      const hasLowMemory =
        // @ts-ignore - deviceMemory is not in the standard TypeScript navigator type
        navigator.deviceMemory !== undefined && navigator.deviceMemory < 2

      // Check if device has low CPU cores (if available)
      const hasLowCPU =
        // @ts-ignore - hardwareConcurrency is not in the standard TypeScript navigator type
        navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 2

      // Set as low performance only if BOTH conditions are true
      // Isso vai fazer com que menos dispositivos sejam considerados de baixo desempenho
      setIsLowPerformance(hasLowMemory && hasLowCPU)
    }

    checkPerformance()
  }, [])

  return { isLowPerformance }
}
