import React from 'react'
import './Main.scss'
import old from '../ComponentImages/oldschool-pic-og.png'

function Main() {
  return (
    <div className="main">
      <div className="icon">
        <a href="https://www.facebook.com/BallardStreetCafe" target="_blank" rel="noreferrer"><i class="fa-solid fa-thumbs-up fa-3x"></i> <span>Like us on Facebook!</span></a>
      </div>
      <div className="mainContentCtn">
        <div className="mainInfo">
          <div className="hoursCtn">
            <h3 className="mainTitles">Hours</h3>
            <hr className="hr" />
            <p>
              Monday-Saturday 6am-2pm
              <br />
              Sunday 7am-2pm
            </p>
          </div>
          <div className="contactLocationCtn">
            <h3 className="mainTitles">Contact/Location</h3>
            <hr className="hr" />
            <p>
              972-442-0453
              <br />
              112 N. Ballard Avenue, Wylie, TX 75098
            </p>
          </div>
        </div>
        <div className="mainImage">
          <img src={old} alt="Front of Ballard Street Cafe" />
        </div>
        <div className="aboutCtn">
          <h3 className="mainTitles">About Us</h3>
          <hr className="hr" />
          <p>
            If you’re looking for high quality and personal service, you’ve come to the right place. At Ballard Street Cafe we’ll give you the attention and personal service you’ll come to expect and enjoy. We offer the best in Home Cooking, Best Breakfast around and Best Chicken Fried Steak. Ballard Street Cafe has been located in Wylie since 1997. Let us feed you the best homecooking you've had since Grandma's house.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
