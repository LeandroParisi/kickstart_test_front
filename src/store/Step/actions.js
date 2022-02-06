import { STEPS } from '.'
import { setState } from '../sharedMethods/actions'

export default (store, setStore) => {
  const setField = setState(setStore)

  const nextStep = () => {
    setField('currentStep', STEPS[store.currentStep])
  }

  const previousStep = () => {
    setField('currentStep', STEPS[store.currentStep - 2])
  }

  return {
    setField,
    nextStep,
    previousStep,
  }
}
