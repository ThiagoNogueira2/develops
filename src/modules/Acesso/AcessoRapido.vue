<template>
  <section class="acesso-rapido">
    <div class="container pt-16 flex justify-center">
      <h1 class="text-4xl text-[#118D4E]">
        ACESSO <strong class="text-[#076633]">RÁPIDO</strong>
      </h1>
    </div>

    <ul class="container flex pt-16 gap-2.5 pb-2">
      <li class=" text-xl flex-1 font-bold cursor-pointer rounded-t-lg h-[75px] flex items-center justify-center" :class="activeTab === 'digital'
      // Utilizei o activeTab pra verificar se a aba digital está selecionada, se estiver selecionada, utiliza o verde, e caso contrario utiliza o cinza
      // O ? e o : são operadores ternários dizendo o seguinte se o ? for verdadeiro utiliza esse o verde, e caso contrario utiliza o cinza
      // Que o : é o contrario do ?, então neste caso vai utilizar o cinza, aba nao selecionada, ficará cinza. 
        ? 'bg-[#0B6C3C] text-white flex items-center justify-center'
        : 'bg-gray-100 text-gray-500'" @click="activeTab = 'digital'">
        SERVIÇOS DIGITAIS
      </li>

      <li class=" text-xl flex-1 font-bold cursor-pointer rounded-t-lg flex items-center justify-center" :class="activeTab === 'servidor'
        ? 'bg-[#0B6C3C] text-white '
        : 'bg-gray-100 text-gray-500'" @click="activeTab = 'servidor'">
        SERVIDOR
      </li>
    </ul>

    <div class="container bg-gray-100 p-8 rounded-b-lg">

      <div v-if="activeTab === 'digital'" class="grid grid-cols-8 gap-6">
        <a v-for="servico in servicosDigitais" :key="servico.nome" :href="servico.link" 

           class="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
         
          <div class="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
            <component :is="getIcon(servico.icone)" :size="33" class="text-[#0B6C3C]" />
          </div>

          <span class="text-sm text-[#0B6C3C] text-center leading-tight font-medium">{{ servico.nome }}</span>

        </a>
      </div>

      <div v-if="activeTab === 'servidor'" class="grid grid-cols-8 gap-6">
        <a v-for="servico in servicosServidor" :key="servico.nome" :href="servico.link"
           class="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
         
          <div class="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
            <component :is="getIcon(servico.icone)" :size="33" class="text-[#0B6C3C]" />
          </div>
        
          <span class="text-sm text-[#0B6C3C] text-center leading-tight font-medium">{{ servico.nome }}</span>
        </a>
      </div>
    </div>
  </section>

</template><script setup lang="ts">
import { ref } from 'vue'
import { servicosDigitais, servicosServidor, getIcon } from './types'

const activeTab = ref<'digital' | 'servidor'>('digital')
</script>

