import * as yup from 'yup'
import { usePacienteStore } from '@/stores/paciente'
import { useForm } from 'vee-validate'
import { computed, watch } from 'vue'

export const usePaciente = () => {
  const pacienteStore = usePacienteStore()

  const validationSchema = yup.object({
    nombreMascota: yup.string().required().min(3).max(60),
    nombrePropietario: yup.string().required().min(3).max(60),
    email: yup.string().required().email(),
    fechaAlta: yup.string().required(),
    sintomas: yup.string().required().min(3).max(150)
  })
  const { defineField, errors, resetForm, handleSubmit } = useForm({ validationSchema })

  const [nombreMascota, nombreMascotaAttrs] = defineField('nombreMascota')
  const [nombrePropietario, nombrePropietarioAttrs] = defineField('nombrePropietario')
  const [email, emailAttrs] = defineField('email')
  const [fechaAlta, fechaAltaAttrs] = defineField('fechaAlta')
  const [sintomas, sintomasAttrs] = defineField('sintomas')

  watch(pacienteStore.paciente, () => {
    if (Object.keys(pacienteStore.paciente.value).length) {
      resetForm({ values: pacienteStore.paciente.value })
    } else {
      resetForm({ values: pacienteStore.paciente.value }, { force: true })
    }
  })

//   watch(pacienteStore.hasActiveId,()=>{
//     console.log(pacienteStore.activeId)
//   })

  const onSubmit = handleSubmit((value) => {
    pacienteStore.handleSubmit(value)
  })

  const labelButtonForm = computed(() =>
    pacienteStore.activeId ? 'Actualiza Paciente' : 'Registrar Paciente'
  )

  const bgButtonForm = computed(()=>pacienteStore.activeId
  ? 'bg-green-600 hover:bg-green-700'
  : 'bg-indigo-600 hover:bg-indigo-700')

  return {
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
  }
}
