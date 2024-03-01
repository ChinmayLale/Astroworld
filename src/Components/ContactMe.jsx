import React from 'react'
// import './FirebaseData';
import { collection, addDoc ,getFirestore } from "firebase/firestore";
import {initializeApp} from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyBHSrM8x5npeBstGoK2XRyfpU_zCF0x5Bk",
  authDomain: "portfolio-react-407f1.firebaseapp.com",
  projectId: "portfolio-react-407f1",
  storageBucket: "portfolio-react-407f1.appspot.com",
  messagingSenderId: "247407166265",
  appId: "1:247407166265:web:75d49413c840934e9d1ee8"
};

// Initialize Firebase

// Firebase Done
const app = initializeApp(firebaseConfig);
function ContactMe(props) {
  const db = getFirestore(app);
  const docRef = async () =>  {
    const username = document.getElementById('uname');
    const uemail = document.getElementById('umail');
    const msg = document.getElementById('umsg');
    addDoc(collection(db, "ContactInfo"), {
      name: username.value,
      email: uemail.value,
      message : msg.value 
    });
    console.log("Data Uploaded ! ");
  }
  console.log("Document written with ID: ", docRef.id);






return (
  <div className="contactform">
    <div className="left" style={{ color: 'black' }}>
      <h1>Let's get in Touch !</h1>
      <h4 className='h4'>Sekking Backend Developer Position <br /> Contact Me Via Provided Details  </h4>
      <div className="contact-details">
        <i className="ri-map-pin-user-fill" style={{ fontSize: '2vw' }}></i>
        <h4>Wagholi , Pune</h4>
      </div>
      <div className="contact-details">
        <i className="ri-mail-send-fill" style={{ fontSize: '2vw' }}></i>
        <h4>Connect</h4>
      </div>
      <div className="contact-details">
        <i className="ri-phone-fill" style={{ fontSize: '2vw' }}></i>
        <h4> +91-7620704050</h4>
      </div>
      {/* message  */}
    </div>
    <div className="right">
      <h1>Connect Here</h1>
      <input type="text" className='inp' placeholder='Name' style={{ color: props.mode === 'light' ? 'black' : 'white', borderColor: props.mode === 'light' ? 'black' : 'white' }} id='uname'/>
      <input type="text" className='inp' placeholder='Email' style={{ color: props.mode === 'light' ? 'black' : 'white', borderColor: props.mode === 'light' ? 'black' : 'white' }} id='umail' />
      <input type="text" className='inp' placeholder='Message' style={{ color: props.mode === 'light' ? 'black' : 'white', borderColor: props.mode === 'light' ? 'black' : 'white' }} id='umsg' />

      <button className='btn btn-success btn-lg' style={{ marginTop: '15%' }} id='getdetails' onClick={docRef}>Submit</button>
    </div>


  </div>
)
}

export default ContactMe