import React from 'react'
import classNames from 'classnames'
import styles from './Tutorial.module.scss'
import box from '../../assets/images/1_box.png'
import { STEPS, useStep } from '../../store/Step'
import StepTooltip from '../StepTooltip/StepTooltip'
import Overlay from '../../shared/templates/Overlay/Overlay'
import Icon from '../../assets/icons/Icon'
import { getIcon } from '../../assets/icons/iconsLib'

const dontHaveOverlay = new Set([4, 11])

const indicator = {
  6: 'plug',
  7: 'plug',
  8: 'switch',
  9: 'switch',
  10: 'switch',
}

const hasIndicator = new Set(Object.keys(indicator).map((n) => Number(n)))

function Tutorial() {
  const { getCurrentStep } = useStep()
  const currentStep = getCurrentStep()

  return (
    <div className={classNames(styles.container, currentStep)}>
      <Overlay isOpened={!dontHaveOverlay.has(currentStep)} />
      <div className={classNames(currentStep, styles.imageContainer)}>
        <img src={box} />
        <div className={styles.indicator}>
          {hasIndicator.has(currentStep) && <Icon icon={getIcon(indicator[currentStep])} className={styles.iconContainer} color="black" />}
        </div>
      </div>
      <StepTooltip />
    </div>
  )
}

export default Tutorial
