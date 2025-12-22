import { onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'

export function useScrollAnimation(elementRef: Ref<HTMLElement | null>, options = {}) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!elementRef.value) return

    const defaultOptions = {
      threshold: 0.1, 
      rootMargin: '0px 0px -50px 0px',
      ...options
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-left')
          entry.target.classList.remove('opacity-0')
          observer?.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    if (elementRef.value.classList.contains('opacity-0')) {
      observer.observe(elementRef.value)
    }
    const animatedElements = elementRef.value.querySelectorAll('.opacity-0')
    animatedElements.forEach((el) => {
      observer?.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { observer }
}

