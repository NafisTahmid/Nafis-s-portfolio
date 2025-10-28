import React from "react";
import mridul from "/images/mridul.jpg";
import cinemate from "/images/cinemate-nafis.PNG";
import lifestyleLanding from "/images/landing-page-one.PNG";
import ecommerceOne from "/images/e-commerce-landing-page.PNG";
import barazLanding from "/images/e-commerce-two.PNG";
import instagramClone from "/images/instagram-clone-thumbnail.png";
import figmaOne from "/images/figma-one.PNG";
import webAppick from "/images/webappick.PNG";
const Body = () => {
  return (
    <div className="container">
      <div id="about" className="line">
        <div className="half-width">
          <h1>
            Welcome to <span>Nafis Tahmid</span>'s profile
          </h1>
          <p>
            I am Nafis Tahmid. You could find me on socials with the same name.
            I'm a self-taught Frontend Developer.
          </p>
          <button>
            <a
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              href="https://nafistahmid4.hackerresume.io/f2c2e39c-6d72-4905-865e-73e0e7c77fc8"
              target="blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </button>
        </div>
        <div className="half-width">
          <img className="img-top" src={mridul} alt="" />
        </div>
      </div>

      <div id="projects">
        <h2>My Portfolio</h2>
        <p>
          A small gallery of recent landing pages designed by me. I've done them
          all alone. It's only a drop in the ocean compared to the entire list.
          Interested to see some more? Visit my work page.
        </p>

        <div className="line">
          <div className="half-width mt-5">
            <a
              style={{ textDecoration: "none" }}
              href="https://cinemate-mridul.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="img-project" src={cinemate} alt="" />
              <p className="mt-3">
                Cinemate! A responsive website for movie freaks. It keeps you
                updated with the latest movie news.
              </p>
            </a>
          </div>
          <div className="half-width mt-5">
            <img className="img-project" src={lifestyleLanding} alt="" />
            <p className="mt-3">
              A beautiful, responsive landing page of a fashion site.
            </p>
          </div>
        </div>

        <div className="line mt-5">
          <div className="half-width mt-5">
            <a
              href="https://demoe-commerce.netlify.app/"
              style={{ textDecoration: "none" }}
            >
              <img className="img-project" src={ecommerceOne} alt="" />
              <p className="mt-3">E-commerce landing page</p>
            </a>
          </div>
          <div className="half-width mt-5">
            <a
              style={{ textDecoration: "none" }}
              href="https://baraz-e-commerce.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="img-project" src={barazLanding} alt="" />
              <p className="mt-3">
                Simple, beautiful, responsive landing page of Baraz.
              </p>
            </a>
          </div>
        </div>

        <div className="line mt-5">
          <div className="half-width mt-5">
            <a
              href="https://nafistahmid.github.io/Figma-portfolio-one/"
              style={{ textDecoration: "none" }}
            >
              <img className="img-project" src={figmaOne} alt="" />
              <p className="mt-3">
                A simple portfolio. Designed from a figma file.
              </p>
            </a>
          </div>
          <div className="half-width mt-5">
            <a
              style={{ textDecoration: "none" }}
              href="https://nafistahmid.github.io/Landing-page-webappick/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="img-project" src={webAppick} alt="" />
              <p className="mt-3">
                Another landing page designed from a figma file. It utilizes
                css-positionigs, flex-box jquery more extensively.
              </p>
            </a>
          </div>
        </div>
      </div>
      <div id="full-stack-projects">
        <h2>Full stack projects: </h2>
        <div className="line mt-5">
          <div className="half-width mt-5">
            <a
              style={{ textDecoration: "none" }}
              href="https://instagram-clone-six-khaki.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="img-project" src={instagramClone} alt="" />
              <p className="mt-3">A partial clone on Instagram </p>
            </a>
          </div>
        </div>
      </div>

      <div id="expertise">
        <h2>What I'm Into?</h2>
        <p>
          The primary area of my interest is undoubtedly front-end. Experienced
          with various ways to deal with the advancement of dynamic web
          projects. Knowledgeable in various programming dialects, frameworks
          and libraries including HTML5, CSS3, JavaScript, ReactJS, AngularJS,
          NextJS, NodeJS, MongoDB, MySQL, Python, Django.
          <br />
          <br /> Solid foundation in problem-solving. Have been solving data
          structures and algorithms related problems on Leetcode and Hackerrank
          simultaneously.
          <br />
          <br /> More about my experience and work you'll find on Skills and
          About.
        </p>
      </div>

      {/* <div id="blogs">
        <h2>Blogs</h2>
        <div className="line">
          <div className="half-width">
            <h3>Top Front End Developer Question</h3>
            <small>April 1, 2021</small>
            <p>
              So, here are the Top 50 React Interview Questions and Answers
              which are most likely to be asked by the interviewer. For your
              ease of access, I have categorized the React interview questions{" "}
              <br />
              <span>Read more...</span>
            </p>
          </div>
          <div className="half-width">
            <h3>Web Development Guideline- How to start?</h3>
            <small>January 25, 2021</small>
            <p>
              This article is meant to serve as a practical guide to becoming a
              professional web developer. I've spent over 20 years writing code
              for the web. I work with and help developers daily. In this
              article, I will tell you what you should learn, when you should
              learn it, and where you can learn it from. <br />
              <span>Read more...</span>
            </p>
          </div>
        </div>
        <div className="line">
          <div className="half-width">
            <h3>Looking for ReactJS Developer?</h3>
            <small>March 14, 2021</small>
            <p>
              Toptal offers top React.js developers, programmers, and software
              engineers. For those looking to work remotely with the best
              engineers, look no further
              <br />
              <span>Read more...</span>
            </p>
          </div>
          <div className="half-width">
            <h3>How much a front end developer can make?</h3>
            <small>May 5, 2021</small>
            <p>
              According to Glassdoor, a front end developer in the United States
              can earn an average of $86,178 per year. A "regular" front-end
              developer can earn an average salary of $71,350 a year, according
              to Payscale. <br />
              <span>Read more...</span>
            </p>
          </div>
        </div>
      </div> */}

      <div id="contact">
        <div className="line">
          <div className="half-width">
            <h2>Contact me</h2>
            <p>
              I'm interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other request or question,
              don't hesitate to use the form.
            </p>
            <input type="text" placeholder="Name" />
            <input
              style={{ marginLeft: "5px" }}
              type="email"
              placeholder="Email"
            />
            <br />
            <input type="text" placeholder="Subject" />
            <br />
            <textarea
              id=""
              cols="75"
              rows="10"
              placeholder="Message"
            ></textarea>
            <br />
            <button>Send message!</button>
          </div>
          <div className="half-width">
            <img className="map" src="images/map.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
