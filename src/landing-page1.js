import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks6 from './components/navigation-links6'
import SolidButton from './components/solid-button'
import PlaceCard from './components/place-card'
import projectStyles from './components/style.module.css'
import styles from './landing-page1.module.css'


import { db } from './App'
import { setDoc, doc, getDoc } from "firebase/firestore";



var SHA256 = require("crypto-js/sha256");
const LandingPage1 = (props) => {

  const [Email, updateFormEmail] = React.useState("");
  const [Password, updateFormPassword] = React.useState(""); //react shecudles updates and bundle for efficeny,  

  const signup = async function (email, password) {

    const docRef = doc(db, "Users", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("User exists already:"); 
    } else {

      // Add a new document in collection "USERS"
      await setDoc(doc(db, "Users", email), {
        Username: email,
        EncrytedPassword: SHA256(password).toString(),
        incorrectCountNumb: 0,
        lastAttemptTime: Date.now() 
      });
      console.log("User created");
    }

  }

  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Idealy - main</title>
        <meta property="og:title" content="Idealy" />
      </Helmet>
      <div className={styles['Top-container']}>
        <div className={styles['Hero-Page']}>
          <h1 className={` ${styles['text']} ${projectStyles['heading']} `}>
            Share a piece of your mind
          </h1>
          <div className={styles['Content-container']}>
            <h2
              className={` ${styles['Subheading']} ${projectStyles['subheading']} `}
            >
              Contribute to businesses ideas and plans
            </h2>
            <span className={styles['text01']}>
              <span>
                Each idea is posted by a range of business ,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                waiting to have a piece of your mind on their next business
                endeavours
              </span>
              <br></br>
              <span>nd</span>
            </span>
            <SolidButton button="Explore Ideas"></SolidButton>
          </div>
          <div className={` ${styles['Sign-up']} ${projectStyles['button']} `}>
            <h1>Sign up</h1>
            <span className={styles['text08']}>Email address</span>
            <input
              type="text"
              placeholder="Email"
              className={` ${styles['textinput']} ${projectStyles['input']} `}

              value={Email} onChange={(e) => updateFormEmail(e.target.value)} //onputs 
            />
            <span className={styles['text09']}>Password</span>
            <input
              type="password"
              placeholder="Password"
              className={` ${styles['textinput1']} ${projectStyles['input']} `}
              value={Password} onChange={(e) => updateFormPassword(e.target.value)}

            />
            <button
              className={` ${styles['button']} ${projectStyles['button']} `}
              onClick={() => signup(Email, Password)}      // creating method that takes in 0 arguments, thats why we got empty brackets
            >
              Button
            </button>
          </div>
        </div>
      </div>
      <div id="main-section" className={styles['Main']}>
        <h1>Ideas board</h1>
        <span className={styles['Text10']}>Current posted ideas</span>
        <div className={styles['Cards-container']}>
          <PlaceCard
            image="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE2Mzk0ODY1MTE&amp;ixlib=rb-1.2.1&amp;w=300"
            Idea_name="Obtained allotment ideas"
            description="Newly obtained allotment in local area, have your say in what it should be."
            rootClassName="rootClassName2"
            targetUrl="ideapage"
          ></PlaceCard>
          <PlaceCard
            image="https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxmYXNoaW9ufGVufDB8fHx8MTYzOTQ4Njg3OQ&amp;ixlib=rb-1.2.1&amp;w=300"
            Idea_name="New fashion store"
            description="Gathering opinons on how the store should look within"
            rootClassName="rootClassName3"
          ></PlaceCard>
          <PlaceCard
            image="https://images.unsplash.com/photo-1598368195835-91e67f80c9d7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxkZXNpZ25lcnxlbnwwfHx8fDE2Mzk0ODY4OTE&amp;ixlib=rb-1.2.1&amp;w=300"
            Idea_name="survey testing"
            description="testing a survey before genral release to public"
          ></PlaceCard>
   
        </div>
      </div>
      <div className={styles['Footer']}>
        <div className={styles['Menu']}>
          <h1>Ideally</h1>
          <div className={styles['Links-container']}>
            <div className={styles['container2']}>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link04']}
              >
                About us
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link05']}
              >
                FAQ
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link06']}
              >
                Terms and conditions
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link07']}
              >
                Contact
              </a>
            </div>
          </div>
          <div className={styles['Follow-container']}>
            <span className={styles['text11']}>
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className={styles['Icons-container']}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link08']}
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className={styles['icon10']}
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link09']}
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className={styles['icon12']}
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link10']}
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className={styles['icon14']}
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage1
