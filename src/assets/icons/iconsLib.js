import {
  faArrowRight,
  faArrowLeft,
  faPlug,
  faToggleOn,
} from '@fortawesome/free-solid-svg-icons'

export const generalIcons = {
  arrowLeft: faArrowLeft,
  arrowRight: faArrowRight,
  plug: faPlug,
  switch: faToggleOn,
}

export const getIcon = (iconName) => generalIcons[iconName]

// -----
// -----
// TOOLTIPS:

export const tooltips = {
  'arrow-left': 'Previous step',
  'arrow-right': 'Next step',
  plug: 'Indication of a plug on the box',
}
