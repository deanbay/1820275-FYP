import React from 'react'

import PropTypes from 'prop-types'

import styles from './navigation-links2.module.css'

const NavigationLinks2 = (props) => {
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

NavigationLinks2.defaultProps = {
  text2: 'Pricing',
  text4: 'Blog',
  text: 'About',
  text3: 'Team',
  rootClassName: '',
  text1: 'Features',
}

NavigationLinks2.propTypes = {
  text2: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks2
