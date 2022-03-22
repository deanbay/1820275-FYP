import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from './style.module.css'
import styles from './solid-button1.module.css'

const SolidButton1 = (props) => {
  return (
    <div className={styles['container']}>
      <button
        className={` ${styles['button']} ${projectStyles['button']} ${projectStyles['button']} `}
      >
        {props.button}
      </button>
    </div>
  )
}

SolidButton1.defaultProps = {
  button: 'Click here',
}

SolidButton1.propTypes = {
  button: PropTypes.string,
}

export default SolidButton1
