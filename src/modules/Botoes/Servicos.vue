<template>
  <section ref="sectionRef" class="servicos bg-gray-100 pt-12 pb-12 md:pt-16 lg:pt-20 lg:pb-20 opacity-0">
      <div class="container px-8">
        <div class="md:p-0 mx-auto grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <a href="#">
        <div class="cadastro-rural flex justify-center items-center">
          <img src="../../assets/images/cadastro-rural.png" alt="Serviços" class="w- [555px] h-auto">
        </div>
      </a>

        <a href="#">
        <div class="cadastro-empresas">
          <img src="../../assets/images/cadastro-empresas.png" alt="Serviços" class="w- [555px] h-auto">
        </div>
      </a>

        <a href="#">
        <div class="cardapios">
          <img src="../../assets/images/cardapios.png" alt="Serviços" class="w-[555px] h-auto">
        </div>
      </a>

        <a href="#">
        <div class="creches">
          <img src="../../assets/images/creches.png" alt="Serviços" class="w-[555px] h-auto">
        </div>
      </a>

        <a href="#">
        <div class="emprego">
          <img src="../../assets/images/empregos.png" alt="Serviços" class="w-[555px] h-auto">
        </div>
      </a>

        <a href="#">
        <div class="lampadas">
          <img src="../../assets/images/lampadas.png" alt="Serviços" class="w-[555px] h-auto">
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
