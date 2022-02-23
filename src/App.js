import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className='navbar'>
  <div className='navbar-left'>
  <p>RAJESH</p></div>
  <div className='navbar-right'>
<p>HOME</p>
<p>ABOUT</p>
<p>PROJECTS</p>
<p>CONTACT</p>
</div>
    </div>
    <div className='about'><p>I AM RAJESH</p> 
    <p>I AM A FULL STACK DEVELOPER</p>
    </div>
    <div className='center'>
      <div className='leftskillstitle'>
        <p>i am rajesh i worked with </p><p>following programming languages</p>
      </div>
      <div>
    <div className='skillstitle'><h1>SKILLS</h1></div>
    <div className='skills'>
<div className='skill'>JAVASCRIPT</div>
<div className='skill'>NODEJS</div>
<div className='skill'>REACTJS</div>
<div className='skill'>MONGODB</div>
<div className='skill'>EXPRESSJS</div>
<div className='skill'>JAVASCRIPT</div>
    </div>
    </div>
    </div>
    </>
    
  )
}

export default App;
