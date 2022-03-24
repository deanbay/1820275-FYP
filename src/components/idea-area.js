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
          <svg viewBox="0 0 1024 1024" className="idea-area-icon">
            <path
              d="M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="idea-area-icon2">
            <path
              d="M950.857 340.571c0-160.571-108.571-194.286-200-194.286-85.143 0-181.143 92-210.857 127.429-13.714 16.571-42.286 16.571-56 0-29.714-35.429-125.714-127.429-210.857-127.429-91.429 0-200 33.714-200 194.286 0 104.571 105.714 201.714 106.857 202.857l332 320 331.429-319.429c1.714-1.714 107.429-98.857 107.429-203.429zM1024 340.571c0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286s-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429z"
              className=""
            ></path>
          </svg>
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