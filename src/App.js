import './App.css';
import Navbar from './components/Navbar'
import Alerts from './components/Alerts'
import Textform from './components/Textform'
import React,{useState} from 'react'



 
function App() {

      const [mode, setMode]= useState('light');
      const [alert, setAlert]= useState(null);

      const showalert=(message,type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
      }

 const removebodyclasses =()=>{
document.body.classList.remove('bg-success');
document.body.classList.remove('bg-danger');
document.body.classList.remove('bg-secondary');
document.body.classList.remove('bg-primary');
document.body.classList.remove('bg-info');
 }

      const enablemode=(cls)=>{
            removebodyclasses();
            document.body.classList.add('bg-'+cls);
if(mode==='light')
{setMode('dark')
document.body.style.background='#042743';
showalert("Dark mode has been enable", "Successfully")}
else
{setMode('light')
document.body.style.background='white';
showalert("light mode has been enable", "Successfully")
}

}

 return( 
<>

      <Navbar   title="EasyText"  contact="Home" about="About" mode={mode} enablemode={enablemode}/>
         <Alerts alert={alert}/>
         <div className='container  my-3'> <Textform showalert={showalert} heading="Enter The Text To Analyze" mode={mode}/></div>
      
</>


 );

}

export default App;
