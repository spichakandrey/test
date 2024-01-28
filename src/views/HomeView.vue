<script setup lang="ts">
// import { toDouble } from '../helreps/functions'
import { toDouble } from '@/helreps/functions'


const name = ref<string>('Андрей')
const count = ref<number>(20)
const doubleCount = computed(() => toDouble(count.value))
</script>

<template>
  <main>
    HomePage
    <hr />
    <div>Имя: {{ name }}</div>
    <div>doubleCount: {{ doubleCount }}</div>
  </main>
</template>
