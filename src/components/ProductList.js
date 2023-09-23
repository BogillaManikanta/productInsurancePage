import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ProductList = () => {


  return (
    <div className="product-list">
      <div className="product-info" style={{float:'left'}}>
        <h2>Product Name<span>: Health Insurance</span></h2>
        <p><span style={{fontWeight:'bold'}}>Product Description:</span>Critical illnesses and diseases are some things that most people do not worry about on a daily basis. However, with most of us leading a sedentary lifestyle, common lifestyle illnesses like diabetes, hypertension, stress, and mental health have become common causes of concern. Add to this, the ever-rising cost of treatments and medical emergencies and it becomes a financially challenging affair. So, to help you meet such challenges, a Health Insurance policy comes into the picture.</p>
      
      <div className="recommended-products" style={{float:'right'}}>
        <h2>Best Recommended Products</h2>
        <div class="embed-responsive embed-responsive-16by9">
        <div id="videoCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <iframe
            title="Video 1"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kY8uDYsG4qg?si=UPO0Ca_CMRyV4neB"
              allowFullScreen
            ></iframe>
          </div>
          <div className="carousel-item">
            <iframe
              title="Video 2"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/d1Isr2tSvMI?si=xj7QXnxCV3pIZmQx"
              allowFullScreen
            ></iframe>
          </div>
          <div className="carousel-item">
            <iframe
              title="Video 3"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PGnWUA06CwQ?si=3mXiWBDxWvfpszdP"
              allowFullScreen
            ></iframe>
          </div>

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#videoCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#videoCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

</div>
</div>
    
      </div>
    </div>
  );
};

export default ProductList;
