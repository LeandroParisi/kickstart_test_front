/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import Tooltip from '../../Components/MainComponents/Tooltip/Tooltip'
import styles from './Icon.module.scss'
import { tooltips } from './iconsLib'

const Icon = ({
  icon, color, className, size, onClick, noTooltip, tooltipText, type, inlineTooltip, isDisabled,
}) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const { iconName } = icon

  const tooltip = tooltipText || tooltips[iconName] || tooltips[icon]
  const hasTooltip = !noTooltip && !!tooltip

  return (
    <div
      onClick={() => !isDisabled && onClick && onClick()}
      className={classNames(
        styles.iconContainer,
        className,
        { [styles[type]]: type },
        { [styles.clickable]: onClick },
        { [styles.disabled]: isDisabled },
      )}
      style={{ fontSize: size }}
      role="button"
      tabIndex={0}
      onFocus={() => hasTooltip && setShowTooltip(true)}
      onMouseOver={() => hasTooltip && setShowTooltip(true)}
      onMouseOut={() => hasTooltip && setShowTooltip(false)}
      onBlur={() => hasTooltip && setShowTooltip(false)}
    >
      <FontAwesomeIcon icon={icon} color={color} size={size} />
      {hasTooltip && showTooltip && <Tooltip text={tooltip} inlineTooltip={inlineTooltip} />}
    </div>
  )
}

Icon.propTypes = {
  icon: PropTypes.shape({
    iconName: PropTypes.string,
  }).isRequired,
  type: PropTypes.oneOf(['default', null]),
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  noTooltip: PropTypes.bool,
  tooltipText: PropTypes.string,
  inlineTooltip: PropTypes.bool,
  isDisabled: PropTypes.bool,
}

Icon.defaultProps = {
  inlineTooltip: false,
  color: 'white',
  className: '',
  size: '25px',
  onClick: null,
  noTooltip: false,
  tooltipText: '',
  type: null,
  isDisabled: false,
}

export default Icon
