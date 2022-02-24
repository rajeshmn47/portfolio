import './App.css';
import logo from './images/book.jpg'
import laptop from './images/laptop.jpeg'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import MenuIcon from '@material-ui/icons/Menu';
import {useRef,useState} from 'react'

function App() {
const refer=useRef()
const [t,setT]=useState(true)
const dropdown=()=>{
  if (t){
  console.log('ok')
  console.log(refer)
  refer.current.classList.remove('dropdown')
  refer.current.classList.add('dropdownclick')
  setT(!t)
  }
  else{
    refer.current.classList.add('dropdown')
    refer.current.classList.remove('dropdownclick')
    setT(!t)
  }
}
  return (
    <>
   <div className='menu'>
   <MenuIcon onClick={dropdown}/>
   <div className='dropdown' ref={refer}>
     <li>HOME</li>
   <li>ABOUT</li>
   <li>PROJECTS</li>
   <li>CONTACT</li></div></div>
    <div className='navbar'>
  <div className='navbar-left'>
    <img src={logo} alt='' className='img'/>
  <p>RAJESH</p></div>
  
  <div className='navbar-right'>
<li>HOME</li>
<li>ABOUT</li>
<li>PROJECTS</li>
<li>CONTACT</li>
</div>
    </div>
    <div className='about'>
    <div className='socialmedia'>
      <ul><li> <a href='https://www.github.com/rajeshmn47'><GitHubIcon/></a></li>
      <li> <a href='https://www.twitter.com/rajeshmn47'><TwitterIcon/></a></li>
      <li> <a><LinkedInIcon/></a></li>
      <li> <a><InstagramIcon/></a></li>
      <li> <a><FacebookIcon/></a></li>
     
      </ul>
      </div>
      <div className='aboutone'>
      <div className='firstline'><h1>HEY, MY NAME IS RAJESH</h1> </div>
      <div className='aboutpara'> 
    <p>
    Easy, online quote, fulfillment and free pickup & delivery.Get the best value for your gadgets, quicker   </p>
    <p>
    than ever or Experience the most quickest repair service ever
  </p>
  </div>
  <div>
         <button className='projectbtn'>PROJECTS</button>
       </div>
       </div>
      
    </div>
    <div className='aboutme'><h1>ABOUT ME</h1></div>
    <div className='center'>
      <div className='leftskillstitle'>
      <p className="about__content-details-para">
            Hey! It's
            <strong> Rajesh </strong>
            and I'm a <strong> Full stack Web Developer </strong> located in Bangalore
            . I've done
            <strong> remote </strong>
            projects for agencies, consulted for startups, and collaborated with
            talented people to create
            <strong> digital products </strong>
            for both business and consumer use.
          </p>
          <p class="about__content-details-para">
            I'm a bit of a digital product junky. Over the years, I've used
            hundreds of web and mobile apps in different industries and
            verticals. Feel free to
            <strong> contact</strong> me here.
          </p>
          <div className='gettoknow'>
          <a href="./#contact" class="btncontact"
          >Get to Know me</a>
          </div>
        </div>
      <div>
    <div className='skillstitle'><h1>MY SKILLS</h1></div>
    <div className='skills'>
      <div className='row'>
<div className='skill'>HTML</div>
<div className='skill'>CSS</div>
<div className='skill'>JAVASCRIPT</div>
</div>
<div className='row second'>
<div className='skill'>REACTJS</div>
<div className='skill'>EXPRESSJS</div>
<div className='skill'>NODEJS</div>
<div className='skill'>MONGODB</div>
</div>
<div className='row'>
<div className='skill'>POSTGRESQL</div>
<div className='skill'>MYSQL</div>
</div>
</div>
  
    </div>
    </div>
    <section id="projects" class="projects sec-pad">
  <div className="main-container">
    <h2 class="heading heading-sec heading-sec__mb-bg">
      <span className="heading-sec__main">Projects</span>
      <span className="heading-sec__sub">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        tempora explicabo quae quod deserunt eius sapiente
      </span>
    </h2>

    <div className="projects__content">
      <div className="projects__row">
        <div className="projects__row-img-cont">
          <img
            src={laptop}
            alt="Software Screenshot"
            className="projects__row-img"
            loading="lazy"
            width='300'
          />
        </div>
        <div className="projects__row-content">
          <h3 className="projects__row-content-title">Project 1</h3>
          <p className="projects__row-content-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora, explicabo quae quod deserunt eius sapiente praesentium.
          </p>
          <a
            href="./project-1.html"
            className="btn btn--med btn--theme dynamicBgClr"
            target="_blank"
            >Case Study</a>
        </div>
      </div>
      <div className="projects__row">
        <div className="projects__row-img-cont">
          <img
            src={laptop}
            alt="Software Screenshot"
            className="projects__row-img"
            loading="lazy"
            width='300'
          />
        </div>
        <div class="projects__row-content">
          <h3 class="projects__row-content-title">Project 2</h3>
          <p class="projects__row-content-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora, explicabo quae quod deserunt eius sapiente praesentium.
          </p>
          <a
            href="./project-2.html"
            class="btn btn--med btn--theme dynamicBgClr"
            target="_blank"
            >Case Study</a>
        </div>
      </div>
      <div class="projects__row">
        <div class="projects__row-img-cont">
          <img
            src={laptop}
            alt="Software Screenshot"
            class="projects__row-img"
            loading="lazy"
            width='300'
          />
        </div>
        <div class="projects__row-content">
          <h3 class="projects__row-content-title">Project 3</h3>
          <p class="projects__row-content-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora, explicabo quae quod deserunt eius sapiente praesentium.
          </p>
          <a
            href="./project-3.html"
            class="btn btn--med btn--theme dynamicBgClr"
            target="_blank"
            >Case Study</a>
        </div>
      </div>
    </div>
  </div>
</section>
<div className='contact'>
<h1 className='contacttitle'>CONTACT</h1>
  <div className='contact_wall'> 
  <input type='text' className='input' placeholder='phone number'/>
  <input type='text' className='input' placeholder='email'/>
  <input type='text' className='input' placeholder='message topic'/>
  <input type='text' className='input body' placeholder='body'/>
  </div>
</div>
<footer className='footer'></footer>
    </>
    
  )
}

export default App;
