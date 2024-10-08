<script setup>
import Header from '@/components/Header.vue'
import Formulario from '@/components/Formulario.vue'
import { usePacienteStore } from '@/stores/paciente'
import Paciente from '@/components/Paciente.vue'

const pacienteStore = usePacienteStore()
</script>

<template>
  <div class="container mx-auto my-20">
    <Header />
    <div class="mt-12 md:flex">
      <div class="md:w-1/2">
        <Formulario />
      </div>
      <div class="md:w-1/2 md:h-screen overflow-y-scroll">
        <h3 class="font-black text-3xl text-center">Administra tus Pacientes</h3>
        <div v-if="pacienteStore.hasPacientes">
          <p class="text-lg mt-5 text-center mb-10 font-black">
            Informacion de
            <span class="text-indigo-600">Pacientes</span>
          </p>
          <Paciente v-for="paciente in pacienteStore.pacientes" :key="paciente.id" :paciente />
        </div>
        <p v-else class="mt-20 text-2xl text-center">
          No hay Pacientes
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
