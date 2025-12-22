<template>
  <header ref="headerRef" class="header bg-[#076633] p-2 md:p-4 opacity-0">
    <div class="container ">
      <div class=" flex flex-wrap justify-center md:justify-around gap-2 text-gray-300 text-sm md:text-base ">
        <p>Avenida Cerro Azul - Jardim Horizonte</p>
        <p>(44) 9 9909-0909</p>
        <p>suporte@ingadigital.com.br</p>
      </div>
      <div class="border-t border-gray-300 mt-2 md:mt-3"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const headerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (headerRef.value) {
    setTimeout(() => {
      headerRef.value?.classList.add('animate-slide-in-left')
      headerRef.value?.classList.remove('opacity-0')
    }, 50)
  }
})
</script>