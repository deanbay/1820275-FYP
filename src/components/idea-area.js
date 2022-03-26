import React from 'react'

import PropTypes from 'prop-types'

import './idea-area.module.css'

const IdeaArea = (props) => {
  return (
    <div className={`idea-area-blog-post-card ${props.rootClassName} `}>
      <div className="idea-area-container">
        <div className="idea-area-container1">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="idea-area-image"
          />
          <span className="idea-area-text">{props.UserName}</span>
          <span className="idea-area-text1">{props.UserType}</span>
        </div>
        <h1 className="idea-area-heading">{props.ContributionTitle}</h1>
        <span className="idea-area-text2">{props.description}</span>
      </div>
    </div>
  )
}

IdeaArea.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  UserName: 'Bob Smith',
  image_src:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxmYWNlfGVufDB8fHx8MTY0ODEyNzAwMQ&ixlib=rb-1.2.1&w=200',
  ContributionTitle: 'Happy Customers = Happy Company',
  UserType: 'You (if user)',
  description:
    "This company strives for excellence in all that we do, and this includes making sure our Customers are happy. We are constantly looking for new and innovative ways to improve the Customer's user experience, and we believe that this is the key to our success.",
}

IdeaArea.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  UserName: PropTypes.string,
  image_src: PropTypes.string,
  ContributionTitle: PropTypes.string,
  UserType: PropTypes.string,
  description: PropTypes.string,
}

export default IdeaArea