import { alertToastify } from '@/helpers'
import { defineStore } from 'pinia'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export const usePacienteStore = defineStore('paciente', () => {
 
  const paciente = reactive({})
  const pacientes = ref([])
  const activeId = ref('')

  onMounted(() => {
    pacientes.value = JSON.parse(localStorage.getItem('pacientes')) ?? []
  })

  watch(
    pacientes,
    () => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes.value))
    },
    {
      deep: true
    }
  )
  watch(activeId, () => {
    console.log("first")
    if (activeId.value) {
      const row = pacientes.value.find((item) => item.id === activeId.value)
      paciente.value = row
    }
  })

  const handleSubmit = (data) => {
    let message = ''
    if (data.id) {
      pacientes.value = pacientes.value.map((item) =>
        item.id === data.id ? { ...data } : item
      )
      message = 'Los datos se actualizaron con exito'
    } else {
      pacientes.value.push({ ...data, id: uuidv4() })
      message = 'Los datos se registraron con exito'
    }
    activeId.value = ''
    paciente.value = {}
    alertToastify(message, 'success')
  }

  const emptyPacientes = computed(() => pacientes.value.length === 0)

  const hasPacientes = computed(() => pacientes.value.length > 0)

  

  const deletePaciente = (id) => {
    pacientes.value = pacientes.value.filter(item=>item.id !== id)
    alertToastify('El Paciente se elimino con exito', 'success')
    if(activeId.value === id){
      activeId.value=''
      paciente.value = {}
    }
  }

  return {
    paciente,
    handleSubmit,
    pacientes,
    emptyPacientes,
    hasPacientes,
    activeId,
    deletePaciente
  
  }
})
