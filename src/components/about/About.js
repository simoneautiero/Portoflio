import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="About me">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <p>
              I am Simone{' '}
              <span role="img" aria-label="lightning">
                😄
              </span>{' '}
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              I am a Computer Science graduate with a strong passion for Web
              Development.
            </p>
            <p>
              Throughout my projects and work experiences, I have gained
              valuable skills in both front-end and back-end development. My
              final year project,{' '}
              <Link
                className="textLink"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                SkillCupid
              </Link>
              , was developed using Node.js, ReactJS and Firebase.
            </p>

            <p>
              I also have a great understanding of other web technologies such
              as PHP, MySQL, Python, JavaScript, CSS and HTML. However, my
              innate passion for Software Engineering allows me to learn new
              technlogies quickly when a new project comes up.
              <br></br>
            </p>
            <p>
              <Link
                className="textLink"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                My projects
              </Link>{' '}
              below have allowed me to further develop my skills and knowledge,
              which led me to pursue a career in Web development.
              <p>
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I am currently working at South Bank University as a Web
                Developer.
              </p>{' '}
              <p>
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I am eager to learn more about Web Development and constantly
                improve myself with more challenging opportunities in the
                future.
              </p>{' '}
              <br></br>
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I love
              </p>
              <Typewriter
                options={{
                  strings: [
                    'learning new technologies',
                    'solving complex problems',
                    'designing new components',
                    'fixing hidden bugs',
                    'trying new things',
                    'collaborating with others',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p> London, United Kingdom</p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
