import React from 'react'

import PropTypes from 'prop-types'

import './contributionarea.css'

const Contributionarea = (props) => {
  return (
    <div className={`contributionarea-container ${props.rootClassName} `}>
      <img
        src={props.UserProfilePic}
        alt={props.image_alt}
        className="contributionarea-image"
      />
      <span className="contributionarea-text">{props.NameOfUser}</span>
      <span className="contributionarea-text1">{props.UserDescription}</span>
      <span className="contributionarea-text2">{props.TimeOfPost}</span>
      <span className="contributionarea-text3">
        {props.TitleOfIdeaContribution}
      </span>
      <span className="contributionarea-text4">
        {props.IdeaContributionDesc}
      </span>
    </div>
  )
}

Contributionarea.defaultProps = {
  UserProfilePic:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGZhY2V8ZW58MHx8fHwxNjQ4MTI3MDAx&ixlib=rb-1.2.1&w=200',
  image_alt: 'image',
  NameOfUser: 'Name',
  UserDescription: "You(if user see's post)",
  TimeOfPost: 'X minutes/hours/days',
  TitleOfIdeaContribution: 'Happy Customers = Successful company',
  IdeaContributionDesc:
    'This company strives for excellence in all that we do, and this includes making sure our customers are happy. We are constantly looking for new and innovative ways to improve the customer experience, and we believe that this is the key to our success.',
  rootClassName: '',
}

Contributionarea.propTypes = {
  UserProfilePic: PropTypes.string,
  image_alt: PropTypes.string,
  NameOfUser: PropTypes.string,
  UserDescription: PropTypes.string,
  TimeOfPost: PropTypes.string,
  TitleOfIdeaContribution: PropTypes.string,
  IdeaContributionDesc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Contributionarea
