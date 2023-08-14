import React from 'react'
import Logo from './Capture.PNG'
import './Footer.css'
import {GrNext} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import {AiOutlineTool} from 'react-icons/ai'
import {FaRegPenToSquare} from 'react-icons/fa6'

export const Footer = () => {
  return (
    <div id='footer' >
        <div  id='FooterTopDiv'>   
            <div className='FooterTopbarImage' ><img src={Logo} alt=""  /> </div>
            <div>
              <div className='FooterTopbarInnerDiv' >
                <h2>FREE DELIVERY</h2>
                <p>for order  over € 59.99</p>
              </div>
              <div className='FooterTopbarInnerDiv' >
                <h2>PAYMENT SECURITY</h2>
                <p>via PayPal</p>
              </div>
              <div className='FooterTopbarInnerDiv' >
                <h2>FREE RETURNS</h2>
                <p>within 14 days</p>
              </div>
            </div>
        </div>
        <div id='FooterMiddleDiv'  >
          <div id='FooterMiddleLeftDiv' > 
          <div> <p>Sign up for our newsletter</p>
            <h1>YOU WILL RECEIVE AN IMMEDIATE 10%</h1>
            <h1>DISCOUNT ON YOUR FIRST ORDER</h1>
            </div>
            <div>
              <input type="text"  placeholder='name@gmail.com'/>
              <button>SUBMIT<GrNext/></button>
            </div>
            <div>
              <input type="checkbox"  />
              <p>I agree that my personal data is sorted and processed according to the <u>privacy policy.</u></p>
            </div>
            <div>
              <FiFacebook/>
              <BsInstagram/>
            </div>
            <div>
              <p>About Us</p>
              <p>Our History</p>
              <p>Career</p>
              <p>Investor relation</p>
            </div>
          </div>
          <div id='FooterMiddleRightDiv' >
            <div id='UnorderListDiv' >
            <div className='UnorderListContent' >
            <h1>LEGAL</h1>
              <ul>
                <li>Cookies</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditons</li>
                <li>Selling Condition</li>
                <li>Regulation</li>
                <li>B2B</li>
                <li>Coffee Card</li>
                <li>Quality</li>
              </ul>
            </div>
            <div className='UnorderListContent' >
            <h1>SUPPORT</h1>
              <ul>
                <li>FAQ</li>
                <li>Dispute resolution</li>
                <li>Payment Method</li>
                <li>Delivery Times</li>
                
              </ul>
            </div>
            <div className='UnorderListContent' >
            <h1>ADDRESS</h1>
              <ul>
                <li>Registered Office</li>
                <li>Via Fogliano 1</li>
                <li>25030 Caccagilo BS</li>
                <li>Italia</li>
                
              </ul>
            </div>
            </div>
            <div>
              <div> <FaRegPenToSquare/>&nbsp; <p>CONTACT US</p></div>
              <div> <AiOutlineTool/>&nbsp; <p>SERIVCE CENTER</p></div>
            </div>
            <div>
            <p>2023@ Bailetti Industires Industrie S.P /Cap.Sec Euro 14.180,00/ Cod Firs numero</p>
    <p>Registor @ Gourav Prasad 030040304</p>
            </div>
        </div>
        
        </div>
        
    </div>
  )
}
