import React from 'react'
import classNames from 'classnames'
import { STEPS, useStep } from '../../store/Step'
import styles from './StepTooltip.module.scss'
import Button from '../MainComponents/Button/Button'
import Icon from '../../assets/icons/Icon'
import { getIcon } from '../../assets/icons/iconsLib'

const tooltipMessageFactory = {
  1: 'Welcome to Portable studio.co',
  2: 'We will guide you through the setup step of your Portable Studio Box',
  3: 'First open the box',
  4: 'Do you see a power cord coming out of the box? Plug on a 110V energy source',
  5: 'Now, take the microphone out of the box',
  6: 'Do you see a plug on the right side of the box with a microphone logo? ',
  7: 'Plug the mic there',
  8: "Now let's turn on the lights",
  9: "Do you see a switch on the right side of the box with 'POWER' written on it?",
  10: 'Please turn it on',
  11: 'Now just open your app and await further instructions from our operator which will help will during our recording session',

}

function StepTooltip() {
  const {
    getCurrentStep,
    previousStep,
    nextStep,
    $step,
  } = useStep()
  const currentStep = getCurrentStep()
  console.log($step)

  return (
    <div className={styles.container}>
      <p>{tooltipMessageFactory[currentStep]}</p>
      <div className={styles.footer}>
        <Icon
          icon={getIcon('arrowLeft')}
          onClick={() => previousStep()}
          isDisabled={currentStep === STEPS[0]}
          className={classNames({ [styles.unClickable]: currentStep === STEPS[0] })}
        />
        <Icon
          icon={getIcon('arrowRight')}
          onClick={() => nextStep()}
          isDisabled={currentStep === STEPS[STEPS.length - 1]}
          className={classNames({ [styles.unClickable]: currentStep === STEPS[STEPS.length - 1] })}
        />
      </div>
    </div>
  )
}

export default StepTooltip
