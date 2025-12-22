<template>
  <section ref="sectionRef" class="noticias  ">

    <div class=" container px-4 sm:px-6 lg:px-12 pt-16 sm:pt-20 lg:pt-16 xl:pt-16 opacity-0">
      <div class="text-center  ">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          <span class="bg-gradient-to-r from-[#076633] to-[#00984B] bg-clip-text text-transparent">
            Notícias
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-[#076633] to-[#00984B] mx-auto mt-4 rounded-full"></div>
      </div>
    </div>

    <div class=" md:p-0 container pb-8 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-12">

      <div class=" p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 opacity-0">
        <div class="lg:col-span-8">
          <article
            class="group relative h-[250px] sm:h-[350px] lg:h-[580px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <img src="../../assets/images/grande1.jpg" alt="Notícia em destaque"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90  opacity-80 group-hover:opacity-90 transition-opacity ">
            </div>

            <div
              class="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 line-clamp-3">
                FURIA é eliminada do Major após confronto épico contra Pain Gaming nas quartas de final
              </h3>

            </div>
          </article>
        </div>


        <div class="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-[2.94rem]">

          <article
            class="group relative flex flex-row items-stretch rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all 
             cursor-pointer border border-gray-100 hover:border-[#076633]/30 h-[110px]">

            <div class="relative w-[110px] h-[110px] overflow-hidden">
              <img src="../../assets/images/menor-1.jpg" alt="Notícia"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>

            <div
              class="flex-1 h-full p-3 flex flex-col justify-center border-l-4 border-black group-hover:border-gray-700  duration-300">
              <p
                class="text-sm text-gray-800 font-bold leading-snug line-clamp-2 group-hover:text-gray-600 duration-300">
                Fallen carregando na fúria perde de 2×1 para Pain nas quartas de finais e são eliminados.
              </p>
            </div>

          </article>


          <article
            class="group relative flex flex-row items-stretch rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all 
             cursor-pointer border border-gray-100 hover:border-[#076633]/30 h-[110px]">
            
            <div class="relative w-[110px] h-[110px] overflow-hidden">
              <img src="../../assets/images/menor2.jpg" alt="Notícia"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div
              class="flex-1 h-full p-3 flex flex-col justify-center border-l-4 border-[#076633]  duration-300">
              <p
                class="text-sm text-gray-800 font-bold leading-snug line-clamp-2 group-hover:text-[#076633] duration-300">
                S1mple jogará hoje contra The Mongols e veremos se irá continuar no Major.
              </p>
            </div>
          </article>


          <article
            class="group relative flex flex-row items-stretch rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all 
             cursor-pointer border border-gray-100 hover:border-blue-500/30 h-[110px]">

            <div class="relative w-[110px] h-[110px] overflow-hidden">
              <img src="../../assets/images/menor3.jpg" alt="Notícia"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div
              class="flex-1 h-full p-3 flex flex-col justify-center border-l-4 border-blue-500  duration-300">
              <p
                class="text-sm text-gray-800 font-bold leading-snug line-clamp-2 group-hover:text-blue-600  duration-300">
                Favorita a ser campeã do major, Vitality joga ainda hoje contra a NAVI.
              </p>
            </div>
          </article>


          <article
            class="group relative flex flex-row items-stretch rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all 
             cursor-pointer border border-gray-100 hover:border-purple-500/30 h-[110px]">

            <div class="relative w-[110px] h-[110px] overflow-hidden">
              <img src="../../assets/images/menor4.jpg" alt="Notícia"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div
              class="flex-1 p-3 flex flex-col justify-center border-l-4 border-purple-500  duration-300">
              <p
                class="text-sm text-gray-800 font-bold leading-snug line-clamp-2 group-hover:text-purple-600  duration-300">
                Donk não consegue avançar com a Spirit e perde para a Mouz nas quartas de finais.
              </p>
            </div>
          </article>

        </div>
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
