import goto from '../images/gonew1.png'
import logo from '../images/gotonewlogo.png'
import './goto.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import {useRef,useState} from 'react'
import mission from '../images/mission.png'
import vision from '../images/vision.png'
import values from '../images/values.png'

export const Gotonew=()=>{
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
    return(
        <>
      <div className='menu'>
       <MenuIcon onClick={dropdown} style={{marginTop:'2vmax'}}/>
       <div className='dropdown' ref={refer}>
         <li>HOME</li>
       <li>ABOUT</li>
       <li>PROJECTS</li>
       <li>CONTACT</li></div></div>
        <div className='gonavbar'>
            <div className='gonavbar-left'>
<img src={logo} width='100'/>
<li>Home</li>
<li>Repair</li>
<li>Sell</li>
<li>How we work</li>
<li>Company</li>
<li>Contact Us</li>
</div>
<div className='gonavbar-right'>
    <AccountCircleIcon/>
    Login</div>
</div>
<div className='belownavbar'>
<div><h1>We Sell, Repair, Refurbish and Recycle</h1>
<p>
Easier, online quote, fulfillment and free pickup & 
delivery.Get the best value for your gadgets, quicker 
than ever or Experience the most quickest repair service ever</p>
<button className='filledbtn'>Sell</button>
<button className='openbtn'>Repair</button>
</div>
<div>
    <img src={goto} height='400' />
</div>
</div>
<div className='greenbox'>
<img src={logo} height='50' alt=''/>
<img src={logo} height='50' alt=''/>
<img src={logo} height='50' alt=''/>
<img src={logo} height='50' alt=''/>
<img src={logo} height='50' alt=''/>
<img src={logo} height='50' alt=''/>
</div>
<div className='ethos'>
  <div className='etho' >
<h1>At the Ethos of our Business Culture</h1>
<h4 style={{opacity:'0.5'}}> Bigger Picture - We realize that many a success in business does
 not happen overnight.</h4>
</div>
<div className='missions'>
<div className='mission'>
  <h3>Our vision</h3>
  <img src={vision} alt='' height='200'/>
  To constantly add intrinsic value to our customers – in terms of sales, purchases & services.We also benchmark & revolutionize Industry standards and build a customer agnostic business. We have a single point of sale,
 purchase and or service for all your devices – instore and online.</div>
<div className='mission'>
<h3>Our mission</h3>
<img src={mission} alt='' height='200'/>
To be a qualitative service provider and a fair price procurement 
purchaser of devices in the market space. To be a one stop solution for sale of quality certified used devices in the market space. 
To be a benchmarked ethical repair of devices provider in the market space.
  </div><div className='mission'>
  <h3>Our values</h3>
  <img src={values} alt='' height='200'/>
  To work with fair pricing standards and best of market rates as far as possible. We struggled to have ethics in all our business practices – to the highest moral fiber of standards. Also we never compromise on 
  quality at all times because quality is the true differentiating factor.
</div>
</div>
</div>
<div className='middle'>
<div className='title'>
<h1>How We Work</h1>
<h4 style={{opacity:'0.5'}}>Whether you are at home or work, sell your gadgets with these easy steps</h4>
</div>
<div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
</div>
<div className='selling'>
  <div className='sell'>
<h2>Sell</h2>
Contact us for winning deals including exchange offer’s!! IOS / Android app & Algorithm based valuation.

<button className='btn' >Get Started</button>
</div>
<div className='repair'>
<h2>Repair</h2>
OEM parts with warranty at affordable rates genuine ethical repair services at fast turn around.

<button className='btn' >Get Started</button>
</div>
<div className='refurb'>
<h2>Refurb</h2>
Coming soon
We are happy to Refurbish the same for you at bargain prices, refurbish reuse recycle responsibly.

<button className='btn' >Get Started</button>
</div>
</div>
<footer>
  <div className='fot'>
<h2>Services</h2>
Repair
Sell
RefurbComing soon
</div>
<div className='fot'>
<h2>Quick Links</h2>
Company

How We Work
Contact Us
</div>
<div className='fot'>
<h2>Help</h2>
Terms and Conditions
Privacy Policy
E-Waste Policy
</div>
<div className='fot'>
<h2>Contact Us</h2>
2nd Floor, No 23
Nehru Nagar Main Road,
Bengaluru Urban, Karnataka 560020
+918041430926
+918041430926
support@2new.in
</div>
</footer>
<div className='lastdiv'>
  <img src={logo} height='70' alt='' />
  <p style={{marginLeft:'5vw'}}>
With 3 decades of Industry experience we know the industry 
well. We have built back to back eco systems in spares, 
in fair and ethical pricing, in sales 
& after sales standards of excellence,
 and most importantly our singular aim is to earn your 
 unquestioned trust every time – 
we have no shortcuts and never compromise on our ethos,
 and operating principles.
</p>
</div>
</>
    )
}
export default Gotonew