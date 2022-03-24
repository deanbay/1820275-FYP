import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import styles from './place-card.module.css'
import { Link } from 'react-router-dom'

const PlaceCard = (props) => {
  return (
    <Link to={props.targetUrl}>
      <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
        <img
          alt={props.image_alt}
          src={props.image}
          className={styles['image']}
        />
        <div className={styles['container1']}>
          <span className={styles['text']}>{props.Idea_name}</span>
          <span className={styles['Text1']}>{props.description}</span>
          <OutlineButton button1="Go to Idea portal"></OutlineButton>
        </div>
      </div>
    </Link>
  )
}

PlaceCard.defaultProps = {
image_alt: 'image',
  Idea_name: 'Idea Name',
  rootClassName: '',
  description: 'Description of business idea',
}

PlaceCard.propTypes = {
  image: PropTypes.string,
  image_alt: PropTypes.string,
  Idea_name: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default PlaceCard
