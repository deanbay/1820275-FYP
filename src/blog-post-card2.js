import React from 'react'

import PropTypes from 'prop-types'

import styles from './blog-post-card2.module.css'

const BlogPostCard2 = (props) => {
  return (
    <div
      className={` ${styles['BlogPostCard']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container']}>
        <div className={styles['container1']}>
          <span className={styles['text']}>{props.label}</span>
          <span className={styles['text1']}>{props.when}</span>
        </div>
        <h1 className={styles['text2']}>{props.title}</h1>
        <span className={styles['text3']}>{props.description}</span>
        <div className={styles['Container2']}>
          <div className={styles['Profile']}>
            <span className={styles['text4']}>{props.author}</span>
          </div>
          <span className={styles['text5']}>Read More -&gt;</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  title: 'Lorem ipsum dolor sit amet',
  image_alt: 'image',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  author: 'Bryan',
  when: '3 days ago',
  label: 'ENTERPRISE',
  image_src: '/playground_assets/brain%20drawing-400w.jpg',
  rootClassName: '',
}

BlogPostCard2.propTypes = {
  title: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  when: PropTypes.string,
  label: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard2
