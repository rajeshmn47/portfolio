import './App.css';
import logo from './images/book.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function App() {
  return (
    <>
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
      <div className='socilamedia'>
      <ul><li> <a><GitHubIcon/></a></li>
      <li> <a><TwitterIcon/></a></li>
      <li> <a><LinkedInIcon/></a></li>
      <li> <a><InstagramIcon/></a></li>
      <li> <a><FacebookIcon/></a></li>
     
      </ul>
      </div>
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
    <div className='aboutme'><h1>ABOUT ME</h1></div>
    <div className='center'>
      <div className='leftskillstitle'>
      <p class="about__content-details-para">
            Hey! It's
            <strong>Rajesh</strong>
            and I'm a <strong> Full stack Web Developer </strong> located in Bangalore
            . I've done
            <strong> remote </strong>
            projects for agencies, consulted for startups, and collaborated with
            talented people to create
            <strong>digital products </strong>
            for both business and consumer use.
          </p>
          <p class="about__content-details-para">
            I'm a bit of a digital product junky. Over the years, I've used
            hundreds of web and mobile apps in different industries and
            verticals. Feel free to
            <strong>contact</strong> me here.
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
<div className='skill'>JAVASCRIPT</div>
<div className='skill'>NODEJS</div>
<div className='skill'>REACTJS</div>
</div>
<div className='row'>
<div className='skill'>MONGODB</div>
<div className='skill'>EXPRESSJS</div>
<div className='skill'>JAVASCRIPT</div>
<div className='skill'>MONGODB</div>
</div>
<div className='row'>
<div className='skill'>EXPRESSJS</div>
<div className='skill'>JAVASCRIPT</div>
</div>
</div>
  
    </div>
    </div>
    </>
    
  )
}

export default App;
