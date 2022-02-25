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
  <div>
<h3>At the Ethos of our Business Culture</h3>
<p> Bigger Picture - We realize that many a success in business does not happen overnight.</p>
</div>
<div className='mission'>
  <img src={vision} alt='' eight='200'/>
  To constantly add intrinsic value to our customers – in terms of sales, purchases & services.We also benchmark & revolutionize Industry standards and build a customer agnostic business. We have a single point of sale,
 purchase and or service for all your devices – instore and online.</div>
<div className='mission'>
<img src={mission} alt='' eight='200'/>
To be a qualitative service provider and a fair price procurement 
purchaser of devices in the market space. To be a one stop solution for sale of quality certified used devices in the market space. 
To be a benchmarked ethical repair of devices provider in the market space.
  </div><div className='mission'>
  <img src={values} alt='' eight='200'/>
  To work with fair pricing standards and best of market rates as far as possible. We struggled to have ethics in all our business practices – to the highest moral fiber of standards. Also we never compromise on 
  quality at all times because quality is the true differentiating factor.
</div>
</div>
</>
    )
}
export default Gotonew