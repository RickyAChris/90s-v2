import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
            <div className="resident_banner">
                <img src="https://www.eklecty-city.fr/wp-content/uploads/2012/09/Resident-Evil-2-1998-Banner-01.jpg" className="background-img" alt="Cover photo for Resident Evil 2"/>
            </div>
            <div className="capcom_price">
                <section>
                    <p className="info"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/cb/20200920122730%21ESRB_2013_Mature.svg/88px-ESRB_2013_Mature.svg.png" style={{"width":"25px", "height":"30px"}}/> Warning! Rated M for Mature Audiences Only!
                    <br/>
                        Purchase Price: $50.00 USD
                    </p>

                    <h2>&copy;CAPCOM CO, LTD 1998 ALL RIGHTS RESERVED</h2>
                </section>
            </div>
            <div className="Promo-1">
                <h1>Resident Evil 2</h1>
                    <p className="main" style={{"textAlign":"left"}}>
                        Driving through the ruined streets, Leon S. Kennedy and Claire Redfield discover that the only people in sight are zombies.
                        <br/>
                        Seperated by an explosion, Claire and Leon must make their way through the zombies infested street on Raccoon City and find refuge inside the Raccoon City Police Department.
                        <br/>
                        Little do they know, getting to the police station will be the easiest part of their journey, as mystery and horror lurks throughout. 
                    </p>
                    <img src="https://pbs.twimg.com/media/EP8hVBdWoAAF_AR?format=jpg&name=small" className="promo" alt="Picture of Claire Redfield and Leon S. Kennedy, two playable characters in Resident Evil 2."/>
                    <p className="main">Choose to play as Leon S. Kennedy (left pictured) or Claire Redfield (right pictured)!</p>
            </div>
            <div className="Promo-2">
                <img src="https://iplayoldgames.files.wordpress.com/2013/03/resident-evil-2-4.jpg" style={{"width":"100%"}} alt="Resident Evil 2 Brochure, 1998."/>
            </div>
            <div className="copyright">
                <p>&copy;CAPCOM CO, LTD 1998 ALL RIGHTS RESERVED</p>
                <img src="https://wallpapercave.com/dwp1x/wp3250062.jpg" style={{"width":"150px", "height":"auto", "padding":"0", "margin":"0"}} alt="Capcom logo"/>
                
            </div>
      </div>  

      // inline styles are set using a json object Ex: from HTML/CSS **style="text-align:left";** -- becomes **style={{"textAlign":"left"}}** // use , to seperate inline style declarations
      // Hyphenated css attributes become camel case in JSX. Ex: text-align becomes textAlign
      // CSS class syntax for JSX is to change, for example, class="container" is to edit class and add Name to it. className="container"
      // Self closing html elements, like <br> or <img>, add a '/' at the end to close the element. For instance, <img/> or <br/> 
  )
}

export default App;
