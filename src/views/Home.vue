<template>
  <div class="home">
    <Header />
    <Logo :toggleMenu="toggleMenu" />
    <NavBar :isOpen="isMenuOpen" />
    <Banner />
    <AcessoRapido />
    <Noticias />
    <Servicos />
    <Rodape />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/modules/Topo/Header.vue'
import Logo from '@/modules/Logo-Buscar/Logo.vue'
import NavBar from '@/modules/Menu/NavBar.vue'
import Banner from '@/modules/Banner/Banner.vue'
import AcessoRapido from '@/modules/Acesso/AcessoRapido.vue'
import Noticias from '@/modules/Noticias/Noticias.vue'
import Servicos from '@/modules/Botoes/Servicos.vue'
import Rodape from '@/modules/Rodape/Rodape.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>


