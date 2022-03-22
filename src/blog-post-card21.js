import React from 'react'

import PropTypes from 'prop-types'

import styles from './blog-post-card21.module.css'

const BlogPostCard21 = (props) => {
  return (
    <div
      className={` ${styles['BlogPostCard']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['container']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
        />
      </div>
    </div>
  )
}

BlogPostCard21.defaultProps = {
  image_src: '0ebaacb5-ab66-415d-a46e-056459ba7f19',
  image_alt: 'image',
  rootClassName: '',
}

BlogPostCard21.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard21
