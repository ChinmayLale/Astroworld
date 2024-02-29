import React from 'react'

function ContactMe(props) {
  return (
    <div className="contactform">
        <div className="left" style={{color:'black'}}>
        <h1>Let's get in Touch !</h1>
        <h4 className='h4'>Sekking Backend Developer Position <br /> Contact Me Via Provided Details  </h4>
        <div className="contact-details">
            <i class="ri-map-pin-user-fill" style={{fontSize:'2vw'}}></i>
            <h4>Wagholi , Pune</h4>
        </div>
        <div className="contact-details">
            <i class="ri-mail-send-fill" style={{fontSize:'2vw'}}></i>
            <h4>Connect</h4>
        </div>
        <div className="contact-details">
        <i class="ri-phone-fill" style={{fontSize:'2vw'}}></i>
            <h4> +91-7620704050</h4>
        </div>
        {/* message  */}
        </div>
        <div className="right">
        <h1>Connect Here</h1>
        <input type="text" className='inp' placeholder='Name'  style={{color:props.mode==='light'?'black':'white' , borderColor :props.mode==='light'?'black':'white'}}/>
        <input type="text" className='inp' placeholder='Email'  style={{color:props.mode==='light'?'black':'white' , borderColor :props.mode==='light'?'black':'white'}}/>
        <input type="text" className='inp' placeholder='Message'  style={{color:props.mode==='light'?'black':'white' , borderColor :props.mode==='light'?'black':'white'}}/>

        <button className='btn btn-success btn-lg' style={{marginTop:'15%'}} id='getdetails'>Submit</button>
        </div>


    </div>
  )
}

export default ContactMe