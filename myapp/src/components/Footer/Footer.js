import React  from 'react'
import "./Footer.css"

function Footer () {

    return (
      <div class="main-footer">
       
      <div class="container main-footer-container">
        <h3 class="band-name">The Generics</h3>
        <ul class="nav footer-nav">
          <li>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <img src="Images/YouTube Logo.png" />
            </a>
          </li>
          <li>
            <a href="https://www.spotify.com" target="_blank" rel="noreferrer">
              <img src="Images/Spotify Logo.png" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src="Images/Facebook Logo.png" />
            </a>
          </li>
        </ul>
      </div>
        
      </div>
    )
  }
export default Footer
