import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Footer = () => {
  return (
    <div className="footer">
      <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://scontent.fblr22-1.fna.fbcdn.net/v/t39.30808-6/251091648_4652190114845670_7660568092658345773_n.png?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=zSNa4Yj9BLUAX_oBoGx&_nc_ht=scontent.fblr22-1.fna&oh=00_AfCjv9doPnXSJu1tGae-WpSw8XMMqq1Je3eGnkKRN0o7CA&oe=6514788C" alt="Phonepe" className="d-block w-50 mx-auto " width={'200px'}  />
          </div>
          <div className="carousel-item">
            <img src="https://www.maxlifeinsurance.com/content/dam/corporate/images/MEDICLAIM-PCP-WEB-BANNER-769x475%20(1).jpg" alt="Maxlife" className="d-block w-50 mx-auto" />
          </div>
          <div className="carousel-item">
            <img src="https://i.ytimg.com/vi/BtUoah2KPWM/maxresdefault.jpg" alt="Sbi" className="d-block w-50 mx-auto" />
          </div>
          <div className="carousel-item">
            <img src="https://scontent.fblr22-1.fna.fbcdn.net/v/t1.6435-9/48212694_265244990816094_4051260419149398016_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9267fe&_nc_ohc=MKb3pdJNdQIAX_KPREO&_nc_ht=scontent.fblr22-1.fna&oh=00_AfDHBiKbniCadSztvh-4KTvvbnpEKvtCPb0RuNLr2SzwSw&oe=6535F394" alt="United India" className="d-block w-50 mx-auto" />
          </div>
          <div className="carousel-item">
            <img src="https://www.gibl.in/national-insurance/NI_img.png" alt="National Insurance" className="d-block w-50 mx-auto" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    
    
  );
};

export default Footer;
