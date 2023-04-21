import React from 'react'

function Head() {
  return (
    <section>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="carousel-caption">
                <h5>we Hire</h5>
                <small>
                 Hire our bikes at affordable price.
                </small>
             </div>
              <img class="d-block w-100" src="images/dan.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="images/brayo.jpeg" alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="images/josh.jpeg" alt="Third slide" />
            </div>
          </div>
          
        </div>
      
      <br />
      <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>
      </section>
     
  )
}

export default Head