import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import ComputersCanvas from '../components/canvas/Computers'
import GithubLogin from '../components/GithubLogin'
import partner_1 from '../images/partner_1.png'
import partner_2 from '../images/partner_2.png'
import partner_3 from '../images/partner_3.png'
import partner_5 from '../images/partner_5.jpg'
import partner_6 from '../images/partner_6.png'
import partner_7 from '../images/partner_7.png'
import example from '../images/team_eg.jpeg'


const Home = ({ isAuth }) => {

  const partnersDivRef = useRef(null);

  const TeamImages = [
    example, example, example, example, example, example, example
  ];

  const scrollLeft = () => {
    if (partnersDivRef.current) {
      partnersDivRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (partnersDivRef.current) {
      partnersDivRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='home'>
      <div className="title">
        <p>CodeSapiens Summer Of Code</p>
      </div>
      <div className="hero">
        <div className="left">
          <h1>The most</h1>
          <h1>BEGINNER FRIENDLY</h1>
          <h1>Open source event</h1>
          <p>July 15th - August 15th | Online | 50k+ Prizes</p>
          <h3>From being clueless to becoming timeless<br />
            Become busy with open source</h3>
          <div className="links">
            {isAuth ?
              <Link to='/dashboard'>
                <FontAwesomeIcon icon={faArrowRight} /> Go To Dashboard
              </Link>
              : <div className='login-home'>
                <FontAwesomeIcon icon={faGithub} /> <GithubLogin />
              </div>}
          </div>
        </div>
        <div className="right">
          <ComputersCanvas />
        </div>
      </div>

      <section className="what-soc">
        <h1>What is Summer Of Code ?</h1>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Summer of Code is a program where students work on <span className="green">open-source projects</span>, learn coding skills, and get mentored by experts during the summer break.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Apart from the general internships, participating in Summer of Code actively adds value to students resume as they work on real time projects that are supervised by industry experts.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Students getting selected and participating are generally hired by the top companies as the competition is high.</p>
      </section>

      <section className="what-soc">
        <h1>Who is Code Sapiens?</h1>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Code Sapiens is a student run community of <span className="green">1100+ students</span> in and around Tamil Nadu.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> We conduct technical events, sessions with industry experts and hackathons.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Founded by <span className="green">Thiyaga B (Senior Engineer at Walmart Global Tech)</span></p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Now run by a 10 member student team from across various colleges in Tamil Nadu.</p>
      </section>

      <section className="what-soc">
        <h1>What is CSSOC?</h1>
        <p> <FontAwesomeIcon icon={faArrowRight} /> In our latest effort to empower the student community in Tamil Nadu, we are hosting a beginner friendly summer of code with cash prize and other benefits.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Students can learn from our beginner friendly sessions and will benefit from networking with fellow peers.</p>
        <p className="quote">
          A <span className="green">not for profit</span> initiative <span className="green">by</span> the students <span className="green">for</span> the students.<br /> To put it simply, CSSOC is an event where a senior helps junior but just done at a different larger scale that is loved by students and wanted by companies
        </p>
      </section>

      <section className="partners">
        <h1>Our Partners</h1>
        <div className="partners-container">
          <div className="partner-left" onClick={scrollLeft}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="partners-div" ref={partnersDivRef}>
              <div className="partner-slide">
                <div className="partner-img">
                  <img src={partner_1} alt={`Partner 1`} />
                </div>
                <div className="partner-name">
                GDSC<br/> Rajalakshmi Engineering College
                </div>
              </div>
              <div className="partner-slide">
                <div className="partner-img">
                  <img src={partner_2} alt={`AWS India`} />
                </div>
                <div className="partner-name">
                AWS India
                </div>
              </div>
              <div className="partner-slide">
                <div className="partner-img">
                  <img src={partner_3} alt={`Trio Devs`} />
                </div>
                <div className="partner-name">
                Trio Devs
                </div>
              </div>
              <div className="partner-slide">
                <div className="partner-img">
                  <img src={partner_1} alt={`GDSC- Sai Ram Engineering College`} />
                </div>
                <div className="partner-name">
                GDSC<br/> Sai Ram Engineering College
                </div>
              </div>
              <div className="partner-slide">
                <div className="partner-img">
                  <img src={partner_6} alt={`Flutter Chennai`} />
                </div>
                <div className="partner-name">
                Flutter Chennai
                </div>
              </div>
              <div className="partner-slide">
                <div className="partner-img">
                  <img src={partner_5} alt={`Chennai Geeks`} />
                </div>
                <div className="partner-name">
                Chennai Geeks
                </div>
              </div>
              <div className="partner-slide">
                <div className="partner-img">
                  <img src={partner_7} alt={`Chennai React`} />
                </div>
                <div className="partner-name">
                Chennai React
                </div>
              </div>
          </div>
          <div className="partner-right" onClick={scrollRight}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </section>

      <section className="our-team">
        <h1>Our Team</h1>
        <div className="partners-container">
          <div className="partner-left" onClick={scrollLeft}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="partners-div" ref={partnersDivRef}>
            {TeamImages.map((team, index) => (
              <div key={index} className="partner-slide">
                <div className="partner-img">
                  <img src={team} alt={`Partner ${index + 1}`} />
                </div>
                <div className="partner-name">
                  Partner {index + 1}
                </div>
              </div>
            ))}
          </div>
          <div className="partner-right" onClick={scrollRight}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home