'use client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false
export function useGsapRegister() {
  if (!registered) {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
      registered = true
    }
  }
  return gsap
}