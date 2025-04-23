import React from 'react'
import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <a href="https://www.youtube.com/@AnkitKumar-hl5ye"><img src={youtube_icon} alt=""/></a>
        {/* <img src={youtube_icon} alt=""/> */}
        <a href="https://www.facebook.com/ankit.ashu.794/" target="_blank" rel="noopener noreferrer">
          <img src={facebook_icon} alt="Facebook" />
        </a>
        <a href="https://x.com/ankitashu_794" target="_blank" rel="noopener noreferrer">
          <img src={twitter_icon} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/ankit.ashu.794/" target="_blank" rel="noopener noreferrer">
          <img src={instagram_icon} alt="Instagram" />
        </a>

      </div>
      <ul>
      <li><a href="/audio-description">Audio Description</a></li>
      <li><a href="/help-centre" target="_blank" >Help Centre</a></li>
        <li><a href="/gift-cards" target="_blank" >Gift Cards</a></li>
        <li><a href="/media-centre" target="_blank" >Media Centre</a></li>
        <li><a href="/investor-relations" target="_blank" >Investor Relations</a></li>
        <li><a href="/jobs" target="_blank" >Jobs</a></li>
        <li><a href="/terms-of-use" target="_blank" >Terms of Use</a></li>
        <li><a href="/privacy" target="_blank" >Privacy</a></li>
        <li><a href="/legal-notices" target="_blank" >Legal Notices</a></li>
        <li><a href="/cookie-preferences" target="_blank">Cookie Preferences</a></li>
        <li><a href="/corporate-information" target="_blank">Corporate Information</a></li>
        <li><a href="/contact-us" target="_blank">Contact Us</a></li>
        {/* <li>Audio Description</li> */}
        



      </ul>
      <p className='copyright-text'>© 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer