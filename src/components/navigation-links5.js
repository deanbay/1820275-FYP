import React from 'react'

import PropTypes from 'prop-types'

import styles from './navigation-links5.module.css'

const NavigationLinks5 = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}>{props.text}</span>
      <span className={styles['text1']}>{props.text1}</span>
      <span className={styles['text2']}>{props.text2}</span>
      <span className={styles['text3']}>{props.text3}</span>
      <span className={styles['text4']}>{props.text4}</span>
    </nav>
  )
}

NavigationLinks5.defaultProps = {
  text1: 'Features',
  text3: 'Team',
  text2: 'Pricing',
  text4: 'Blog',
  rootClassName: '',
  text: 'About',
}

NavigationLinks5.propTypes = {
  text1: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks5
