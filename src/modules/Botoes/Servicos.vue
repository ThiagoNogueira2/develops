<template>
  <section ref="sectionRef" class="servicos bg-gray-100 pt-12 pb-12 md:pt-16 lg:pt-20 lg:pb-20 opacity-0">
      <div class="container px-8">
        <div class="md:p-0 mx-auto grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <a href="#" class="group block rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-105">
        <div class="cadastro-rural flex justify-center items-center bg-white">
          <img src="../../assets/images/cadastro-rural.png" alt="Serviços" class="w-[555px] h-auto group-hover:brightness-110 transition-all duration-300">
        </div>
      </a>

        <a href="#" class="group block rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-105">
        <div class="cadastro-empresas bg-white">
          <img src="../../assets/images/cadastro-empresas.png" alt="Serviços" class="w-[555px] h-auto group-hover:brightness-110 transition-all duration-300">
        </div>
      </a>

        <a href="#" class="group block rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-105">
        <div class="cardapios bg-white">
          <img src="../../assets/images/cardapios.png" alt="Serviços" class="w-[555px] h-auto group-hover:brightness-110 transition-all duration-300">
        </div>
      </a>

        <a href="#" class="group block rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-105">
        <div class="creches bg-white">
          <img src="../../assets/images/creches.png" alt="Serviços" class="w-[555px] h-auto group-hover:brightness-110 transition-all duration-300">
        </div>
      </a>

        <a href="#" class="group block rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-105">
        <div class="emprego bg-white">
          <img src="../../assets/images/empregos.png" alt="Serviços" class="w-[555px] h-auto group-hover:brightness-110 transition-all duration-300">
        </div>
      </a>

        <a href="#" class="group block rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-105">
        <div class="lampadas bg-white">
          <img src="../../assets/images/lampadas.png" alt="Serviços" class="w-[555px] h-auto group-hover:brightness-110 transition-all duration-300">
        </div>
      </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../../composables/useScrollAnimation'

const sectionRef = ref<HTMLElement | null>(null)
useScrollAnimation(sectionRef)
</script>
