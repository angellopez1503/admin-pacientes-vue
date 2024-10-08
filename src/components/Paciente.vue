<script setup>
import { usePacienteStore } from '@/stores/paciente';

const props = defineProps({
    paciente:{
        type:Object
    }
})

const pacienteStore = usePacienteStore()

</script>

<template>
    <div class="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p class="font-bold mb-3 text-gray-700 uppercase">ID:
            <span class="font-normal normal-case">
                {{ paciente.id }}
            </span>
        </p>

        <p class="font-bold mb-3 text-gray-700 uppercase">Nombre:
            <span class="font-normal normal-case">
            {{ paciente.nombreMascota }}
            </span>
        </p>

        <p class="font-bold mb-3 text-gray-700 uppercase">Propietario: 
            <span class="font-normal normal-case">
            {{ paciente.nombrePropietario }}
            </span>
        </p>

        <p class="font-bold mb-3 text-gray-700 uppercase">Email: 
            <span class="font-normal normal-case">
            {{ paciente.email }}
            </span>
        </p>

        <p class="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:
            <span class="font-normal normal-case">
            {{ paciente.fechaAlta }}
            </span>
        </p>

        <p class="font-bold mb-3 text-gray-700 uppercase">Síntomas:
            <span class="font-normal normal-case">
            {{ paciente.sintomas }}
            </span>
        </p>

        <div class="grid md:grid-cols-2  gap-5 mt-10 ">
            <button 
                type="button"
                class="block w-full py-2 px-10 bg-green-600 hover:bg-green-700 text-white font-bold uppercase rounded-lg"
                @click="pacienteStore.activeId=paciente.id"
            >Editar</button>

            <button 
                type="button"
                class="block w-full py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                @click="pacienteStore.deletePaciente(paciente.id)"
            >Eliminar</button>
        </div>
    </div>
</template>

<style scoped>

</style>

