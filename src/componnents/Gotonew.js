import goto from '../images/gonew1.png'
import logo from '../images/gotonewlogo.png'
import './goto.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import {useRef,useState} from 'react'

export const Gotonew=()=>{
    return(
        <>
        <div className='monavbar'>
            <MenuIcon/>
        </div>
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
Easy, online quote, fulfillment and free pickup & 
delivery.Get the best value for your gadgets, quicker 
than ever or Experience the most quickest repair service ever</p>
<button className='filledbtn'>Sell</button>
<button className='openbtn'>Repair</button>
</div>
<div>
    <img src={goto} height='400' />
</div>
</div>
</>
    )
}
export default Gotonew