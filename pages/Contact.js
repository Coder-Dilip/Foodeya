import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import {useEffect,useState} from 'react'
import Footer from '../components/Footer'
const Contact = () => {

    const [width, setwidth] = useState(0)
    const [copied, setcopied] = useState('')


    useEffect(() => {
     setwidth(window.innerWidth)
    }, [])
    
  return (
      <>
      <Header/>
      <div style={{display:'block',margin:'auto',maxWidth:'1400px',width:'90vw',marginTop:'100px'}}>
      <div style={{marginTop:'100px',display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
            <div className={styles.active_details} style={{width:'100%',marginTop:'80px'}}>
          <p style={{textAlign:'center',color:'grey'}}>What&apos;s in your mind?</p>
                  <p className={styles.hello} style={{textAlign:'center',width:'75%',margin:
                  'auto', fontSize:
                width > 768
                  ? "46px"
                  : '46px',marginTop:'-9px',fontFamily:'sans-serif',animation:'none'}}>Let&apos;s talk about you</p>
                  <p style={{fontSize:'1.5rem',fontWeight:'light',opacity:'0.8', textAlign:'center',lineHeight:'1.9rem',width:'90%', maxWidth:'580px',margin:'auto',marginTop:'25px',marginBottom:'50px'}}>If you have the delicious recipes in your mind and you want to contribute in this site then please, feel free to contact and work with us :)</p>
                  <div style={{display:'flex',alignItems:'center',width:'100%',justifyContent:'center',margin:'auto',marginTop:'-20px'}}>
<div style={{height:'12px', width:'12px', backgroundColor:'#2ffd0f', borderRadius:'20px',marginRight:'10px'}}></div>
<p><strong>Reply time :</strong></p>
<p style={{color:'gray',marginLeft:'5px'}}>within 5-6 hours</p>

                  </div>
                  <div style={{display:'flex', width:'100%', justifyContent:'center',marginTop:'20px'}}>
                 <input onClick={() => {
    navigator.clipboard.writeText('foodyearecipes@gmail.com');
    setcopied('copied!')
    }} readOnly={true} contentEditable={false} value='foodyearecipes@gmail.com' style={{outline:'none',border:'none', background:'orange',padding:'15px 30px', color:'white',fontFamily:'sans-serif', fontWeight:'bold',textAlign:'center',borderRadius:'3px',cursor:'pointer'}} />
                 </div>
    {copied?<p style={{color:'gray',textAlign:'center'}}>copied!</p>:<p style={{opacity:'0'}}>copying</p>}
                  </div>
                  </div>

                  <div style={{marginTop:'160px',display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
            <div className={styles.active_details} style={{width:'100%'}}>
          <p style={{textAlign:'center',color:'grey'}}>How We work</p>
                  <p style={{textAlign:'center',fontWeight:'bold',width:'90%',margin:
                  'auto', fontSize:
                width > 768
                  ? "40px"
                  : width > 660
                  ? "41px"
                  : width > 400
                  ? "30px"
                  : width > 300
                  ? "22px"
                  : "20px",lineHeight:'3rem',marginTop:'-9px',animation:'none'}}>Recommendation</p>
                  <p style={{fontSize:'1.4rem',fontWeight:'light',opacity:'0.8', textAlign:'center',width:'90%', maxWidth:'650px',margin:'auto',marginTop:'25px',marginBottom:'50px'}}>After the delicious food recipes are mailed to our email then we will wisely review the food and ask you for making keywords and write the details about instructions and ingredients . This much data is enough for making your product visible to the market. <br/><br/>90% of the food recipes are being viral and popular because of the powerful recommendation algorithm implemented in this site.</p>

             
                  </div>
                  </div>
                 

        </div>
        <Footer />
      </>
    
  )
}

export default Contact