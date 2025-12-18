<template>
  <nav class="navbar secundary">
    <div class="container">
      <div class="flex items-center justify-between text-white p-3">
        <div class="hidden md:flex justify-around gap-4 w-full">
          <ul>
            <li>
              <a class="font-bold" href="#">Município</a>
            </li>
          </ul>
          <ul>
            <li>
              <a class="font-bold" href="#">Gestão Atual</a>
            </li>
          </ul>
          <ul>
            <li>
              <a class="font-bold" href="#">Secretarias</a>
            </li>
          </ul>
          <ul>
            <li>
              <a class="font-bold" href="#">Imprensa</a>
            </li>
          </ul>
          <ul>
            <li>
              <a class="font-bold" href="#">Serviços</a>
            </li>
          </ul>
          <ul>
            <li>
              <a class="font-bold" href="#">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div
    v-if="isOpen"
    class="secundary md:hidden border-t border-white/20"
  >
    <ul class="flex flex-col gap-2 py-3 text-white font-bold text-sm px-3 items-center">
      <li><a href="#" class="block">Município</a></li>
      <li><a href="#" class="block">Gestão Atual</a></li>
      <li><a href="#" class="block">Secretarias</a></li>
      <li><a href="#" class="block">Imprensa</a></li>
      <li><a href="#" class="block">Serviços</a></li>
      <li><a href="#" class="block">Contato</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  //Propriedade do componente para fazer a chamada do componente no view, posteriormente será usado para chamar no componente Logo.
  //Dentro HOME, no view, criado para abrir o valor do mobile. Assim nao precisa setar novamente os valores do componente.
const props = defineProps<{
  isOpen: boolean
}>()
</script>

