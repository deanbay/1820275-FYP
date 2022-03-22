import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from './style.module.css'
import styles from './solid-button.module.css'

const SolidButton = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button
        className={` ${styles['button']} ${projectStyles['button']} ${projectStyles['button']} `}
      >
        {props.button}
      </button>
    </div>
  )
}

SolidButton.defaultProps = {
  button: 'Contact',
  rootClassName: '',
}

SolidButton.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SolidButton
