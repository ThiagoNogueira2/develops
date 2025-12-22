<template>
  <footer ref="footerRef1" class="rodape secundary py-4 sm:py-6 flex justify-center items-center opacity-0">
    <div class="container text-white px-4">
      <div class="flex justify-center">
        <p class="text-sm sm:text-base text-center truncate">Horário de atendimento: Segunda a Sexta, 08:00 às 18:00</p>
      </div>
    </div>
  </footer>

  <footer ref="footerRef2" class="rodape primary py-6 sm:py-8 flex justify-center items-center opacity-0">
    <div class="container px-4 sm:px-6">
      <div class="controlar-redes flex flex-wrap justify-center lg:justify-around items-center gap-x-6 gap-y-4 text-white">
        <div class="text-center sm:text-left">
          <p class="text-sm sm:text-base">Avenida Cerro Azul - Jardim Horizonte</p>
        </div>
        <div class="text-center sm:text-left">
          <p class="text-sm sm:text-base">(44) 9 9909-0909</p>
        </div>
        <div class="text-center sm:text-left">
          <p class="text-sm sm:text-base break-words">suporte@ingadigital.com.br</p>
        </div>

        <div class="redes-sociais flex gap-4 justify-center">
          <a href="#" class="hover:opacity-80 transition-opacity">
            <img src="../../assets/images/imgInstagram.png" alt="Instagram" class="w-8 h-8">
          </a>

          <a href="#" class="hover:opacity-80 transition-opacity">
            <img src="../../assets/images/imgFacebo.png" alt="Facebook" class="w-8 h-8">
          </a>
          
        </div>
        
      </div>
      <div class="border-t border-gray-300 mt-4 sm:mt-6 lg:mt-7"></div>
      
      <div class="flex flex-wrap justify-center lg:justify-between items-center gap-4 sm:gap-6 text-white mt-6 sm:mt-8 text-xs sm:text-sm">
        <div class="text-center lg:text-left w-full xxs:w-auto xxs:order-2 lg:order-1">
          <p>Última atualização do site: 18/05/2025</p>
        </div>
        <div class="text-center xxs:order-1 lg:order-2">
          <a href="#" class="hover:underline flex items-center justify-center gap-2">
            <img src="../../assets/images/mapaSite.png" alt="Mapa do Site">
            Mapa do Site
          </a>
        </div>
        <div class="xxs:order-3">
          <img src="../../assets/images/ingadigital.png" alt="Inga Digital" class="w-14 sm:w-16 h-auto">
        </div>
      </div>
    </div>
  </footer>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../../composables/useScrollAnimation'

const footerRef1 = ref<HTMLElement | null>(null)
const footerRef2 = ref<HTMLElement | null>(null)

useScrollAnimation(footerRef1)
useScrollAnimation(footerRef2)
</script>
