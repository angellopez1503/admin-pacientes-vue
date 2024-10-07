<script setup></script>

<template>
  <div class="md:w-1/2">
    <h2 class="font-black text-3xl text-center">Seguimiento Pacientes</h2>
    <p class="text-lg mt-5 text-center mb-10 font-black">
      Añade Pacientes y
      <span class="text-indigo-600">Administralos</span>
    </p>
    <form class="bg-white shadow-xl rounded-lg py-10 px-5 space-y-5">
      <div>
        <label for="nombreMascota" class="block text-gray-700 font-bold">
          Nombre Mascota
        </label>
        <input
          type="text"
          id="nombreMascota"
          placeholder="Nombre de la mascota"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        />
      </div>
      <div>
        <label for="nombrePropietario" class="block text-gray-700 font-bold">
          Nombre Propietario
        </label>
        <input
          type="text"
          id="nombrePropietario"
          placeholder="Nombre de Propietario"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        />
      </div>
      <div>
        <label for="email" class="block text-gray-700 font-bold">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Ingrese email"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        />
      </div>
      <div>
        <label for="fechaAlta" class="block text-gray-700 font-bold">
          Fecha de Alta
        </label>
        <input
          type="date"
          id="fechaAlta"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        />
      </div>
      <div>
        <label for="sintomas" class="block text-gray-700 font-bold">
           Sintomas
        </label>
        <textarea
          type="date"
          id="sintomas"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md h-28"
          
        />
      </div>
      <input type="submit" class="bg-indigo-600 hover:bg-indigo-700 w-full p-3 text-white uppercase font-black cursor-pointer transition-colors" value="Registrar Paciente">
    </form>
  </div>
</template>

<style scoped></style>
