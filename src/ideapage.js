import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from './components/solid-button';
import NavigationLinks6 from './components/navigation-links6';
import IdeaCard from './blog-post-card2';
import styles from './ideapage.module.css';
import IdeaArea from './components/idea-area'
import ContributionArea from './components/contributionarea'

const Ideapage = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Idea page - Idealy</title>
        <meta property="og:title" content="Idea page - Idealy" />
      </Helmet>
      <div id="main-section" className={styles['Main']}>
        <div className={styles['Idea']}>
          <div className={styles['container3']}>
            <IdeaCard
              profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName3"
            ></IdeaCard>
            <ContributionArea></ContributionArea>
          </div>
          
          
        </div>
      </div>
      </div>
  )
}

export default Ideapage
