import React from 'react'
import './Footer.scss';
import map from '../ComponentImages/ballardStreetMap.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footerCtn">
        <div className="leftFooter">
          <h2 className="footerTitle">Come See Us</h2>
          <div className="infoBox">
            <h3>Hours of Operation</h3>
            <p>
              Monday-Saturday 6am-2pm
              <br />
              Sunday 7am-2pm
            </p>
          </div>
          <hr className="hr" />
          <div className="infoBox">
            <h3>Address</h3>
            <p>
              112 N. Ballard Avenue,
              <br />
              Wylie, TX 75098
            </p>
          </div>
          <hr className="hr" />
          <div className="infoBox">
            <h3>Phone Number</h3>
            <p>972-442-0453</p>
          </div>
        </div>
        <div className="rightFooter">
          <h2 className="footerTitle">Directions</h2>
          <a href="https://www.google.com/maps/place/Ballard+Street+Cafe/@33.0147223,-96.5408137,17z/data=!3m1!4b1!4m5!3m4!1s0x864c04669b272f13:0x7565047e2a571f46!8m2!3d33.014718!4d-96.5387475"  target="_blank" rel="noreferrer" className="mapImage">
            <img src={map} alt="Google Map" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
