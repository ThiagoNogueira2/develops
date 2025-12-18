<template>
  <section class="primary">
    <div class="container pb-5 flex justify-between items-center flex-col gap-4 md:flex-row md:gap-0
             animate-[logo-section-enter_0.5s_ease-out_forwards]">

      <img src="../../assets/images/brasao.png" alt="Brasão da Cidade"
        class="w-42  lg:w-38 transition-transform ">

      <div class="flex flex-col gap-3 w-full md:w-auto justify-center flex items-center">
        <div class="flex items-center gap-3 justify-center">

          <input class="hidden xs:block w-[15rem] xs:w-[18rem] md:w-[22rem] rounded-lg p-3 white items-centertransition-all 
               focus:ring-2 focus:ring-white/70" type="text" placeholder="O que você busca ?">

          <button type="button"
            class="xs:hidden inline-flex items-center justify-center p-2 w-10 h-10 
            text-white rounded-lg border focus:ring-2 focus:ring-white/60"
            @click="isSearchOpen = !isSearchOpen">
            <LupaIcon />
          </button>

          <button type="button"
            class="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center 
            text-sm text-white rounded-lg border focus:ring-2 focus:ring-white/60"
            @click="toggleMenu">
            <MenuIcon />
          </button>
        </div>

        <div v-if="isSearchOpen" class="xs:hidden w-[18rem]">
          <input class="w-full rounded-lg p-3 white items-center transition-all
           focus:ring-2 focus:ring-white/70" type="text" placeholder="O que você busca ?">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LupaIcon from './components/Lupa.vue'
import MenuIcon from './components/Menu.vue'

const props = defineProps<{
  toggleMenu: () => void
}>()

const toggleMenu = () => {
  props.toggleMenu()
}

const isSearchOpen = ref(false)
</script>