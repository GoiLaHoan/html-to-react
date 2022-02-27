import React from "react";
import testimonial_1 from "./../../img/testimonial-1.jpg";
import testimonial_2 from "./../../img/testimonial-2.jpg";
import Slider from "react-slick";

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        slickArrows: false,
        cssEase: "linear",
    };
    return (
        <>
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Testimonial</h6>
                <Slider {...settings} >
                    <div className="testimonial-item text-center">
                        <img
                            className="img-fluid rounded-circle mx-auto mb-4"
                            src={testimonial_1}
                            alt=''
                            style={{ width: "100px", height: "100px" }}
                        />
                        <h5 className="mb-1">Client Name</h5>
                        <p>Profession</p>
                        <p className="mb-0">
                            Dolor et eos labore, stet justo sed est sed. Diam
                            sed sed dolor stet amet eirmod eos labore diam
                        </p>
                    </div>
                    <div className="testimonial-item text-center">
                        <img
                            className="img-fluid rounded-circle mx-auto mb-4"
                            src={testimonial_2}
                            alt=''
                            style={{ width: "100px", height: "100px" }}
                        />
                        <h5 className="mb-1">Client Name</h5>
                        <p>Profession</p>
                        <p className="mb-0">
                            Dolor et eos labore, stet justo sed est sed. Diam
                            sed sed dolor stet amet eirmod eos labore diam
                        </p>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Testimonial;
