<script setup>
import { usePaciente } from '@/composables/usePaciente'

const {
  nombreMascota,
  nombreMascotaAttrs,
  nombrePropietario,
  nombrePropietarioAttrs,
  email,
  emailAttrs,
  fechaAlta,
  fechaAltaAttrs,
  sintomas,
  sintomasAttrs,
  errors,
  onSubmit,
  labelButtonForm,
  bgButtonForm
} = usePaciente()
</script>

<template>
  <h2 class="font-black text-3xl text-center">Seguimiento Pacientes</h2>
  <p class="text-lg mt-5 text-center mb-10 font-black">
    Añade Pacientes y
    <span class="text-indigo-600">Administralos</span>
  </p>
  <form @submit="onSubmit" class="bg-white shadow-xl rounded-lg py-10 px-5 space-y-2">
    <div>
      <label for="nombreMascota" class="block text-gray-700 font-bold">
        Nombre Mascota
      </label>
      <input
        type="text"
        id="nombreMascota"
        placeholder="Nombre de la mascota"
        :class="[
          'border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-cyan-500',
          { 'outline-red-500 border-red-500': errors.nombreMascota }
        ]"
        v-model="nombreMascota"
        v-bind="nombreMascotaAttrs"
      />
      <span class="text-red-500" v-if="errors.nombreMascota">* {{ errors.nombreMascota }}</span>
    </div>
    <div>
      <label for="nombrePropietario" class="block text-gray-700 font-bold">
        Nombre Propietario
      </label>
      <input
        type="text"
        id="nombrePropietario"
        placeholder="Nombre de Propietario"
        :class="[
          'border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-cyan-500',
          { 'outline-red-500 border-red-500': errors.nombrePropietario }
        ]"
        v-model="nombrePropietario"
        v-bind="nombrePropietarioAttrs"
      />
      <span class="text-red-500" v-if="errors.nombrePropietario"
        >* {{ errors.nombrePropietario }}</span
      >
    </div>
    <div>
      <label for="email" class="block text-gray-700 font-bold">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Ingrese email"
        :class="[
          'border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-cyan-500',
          { 'outline-red-500 border-red-500': errors.email }
        ]"
        v-model="email"
        v-bind="emailAttrs"
      />
      <span class="text-red-500" v-if="errors.email">{{ errors.email }}</span>
    </div>
    <div>
      <label for="fechaAlta" class="block text-gray-700 font-bold">
        Fecha de Alta
      </label>
      <input
        type="date"
        id="fechaAlta"
        :class="[
          'border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-cyan-500',
          { 'outline-red-500 border-red-500': errors.fechaAlta }
        ]"
        v-model="fechaAlta"
        v-bind="fechaAltaAttrs"
      />
      <span class="text-red-500" v-if="errors.fechaAlta">{{ errors.fechaAlta }}</span>
    </div>
    <div>
      <label for="sintomas" class="block text-gray-700 font-bold">
        Sintomas
      </label>
      <textarea
        type="date"
        id="sintomas"
        :class="[
          'border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md h-28 outline-cyan-500',
          { 'outline-red-500 border-red-500': errors.sintomas }
        ]"
        v-model="sintomas"
        v-bind="sintomasAttrs"
      />
      <span class="text-red-500" v-if="errors.sintomas">{{ errors.sintomas }}</span>
    </div>
    <input
      type="submit"
      class="w-full p-3 text-white uppercase font-black cursor-pointer transition-colors"
      :class="bgButtonForm"
      :value="labelButtonForm"
    />
  </form>
  <!-- <div class="grid grid-cols-2 mt-2">
    <div class="bg-blue-400 p-2">
      {{ values }}
    </div>
    <div class="bg-red-400 p-2">
      {{ errors }}
    </div>
  </div> -->
</template>

<style scoped></style>
