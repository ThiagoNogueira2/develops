<template>
  <section ref="sectionRef" class="banner w-full pt-20">
    <div class="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] 2xl:h-[550px] opacity-0">
      <img 
        src="../../assets/images/banner1.jpg" 
        alt="Banner" 
        class="w-full h-full object-cover"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../../composables/useScrollAnimation'

const sectionRef = ref<HTMLElement | null>(null)
useScrollAnimation(sectionRef)
</script>
