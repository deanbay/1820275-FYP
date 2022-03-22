import React from 'react'

import PropTypes from 'prop-types'

import styles from './navigation-links6.module.css'

const NavigationLinks6 = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}>{props.text}</span>
      <span className={styles['text1']}>{props.text1}</span>
      <span className={styles['text2']}>{props.text2}</span>
      <span className={styles['text3']}>{props.text3}</span>
    </nav>
  )
}

NavigationLinks6.defaultProps = {
  text3: 'Contact',
  text1: 'About',
  text2: 'Ideas',
  rootClassName: '',
  text: 'Home',
}

NavigationLinks6.propTypes = {
  text3: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks6
