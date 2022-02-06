import { useEffect, useState } from 'react'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'

export const STEPS = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
]

const initialState = {
  currentStep: STEPS[0],
}

const StepStore = useCreateStore(() => {
  const [$step, setStep] = useState(initialState)
  const actions = storeActions($step, setStep)
  const selectors = storeSelectors($step)

  useEffect(() => {

  }, [])

  return { $step, ...actions, ...selectors }
})

export const useStep = () => StepStore()
export const StepContext = StepStore.Context
export const StepProvider = StepStore.Provider
