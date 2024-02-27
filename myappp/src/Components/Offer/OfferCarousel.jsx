import React from "react";
import "bootstrap/js/dist/carousel"

const OfferCarousel = () => {
    return (
        <div className="py-2 mb-3">
            <div className="container">
                {/* Brand Offers Carousel */}
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img
                                src="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/full-width-carousel/mny_nvto-banner_looks_1440x540.jpg?rev=0498729d969d4e88bd32ab3b80c6e3fb&cx=0.55&cy=0.4&cw=1440&ch=540&hash=3CB73B59890C92815620C3B74B2C9DE4"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img
                                src="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/full-width-carousel/mnywebsitefitmetintcarouselbanner-1400x540.jpg?rev=332c8a29466440f5a057a358c70cb032&cx=0.71&cy=0.28&cw=1440&ch=540&hash=D27FD247BEF4353075EB3722E50FECDF"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/full-width-carousel/colossal-banner-1440x540.jpg?rev=8c5e6698d13c4afcba5240748eaf063e&cx=0.5&cy=0.45&cw=1440&ch=540&hash=7FF69ECECEE747AE6AF67C87A5419DD7"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/full-width-carousel/fitmetribe1440x540.jpg?rev=4c774ced6fc249ccbe19917f3098dce7&cx=0.5&cy=0.53&cw=1440&ch=540&hash=6B3E66A4B7D2EB32885A112FE1BE9DD8"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/full-width-carousel/4-ssmi-carousel-desk-banner.jpg?rev=2242e4fe4347479c9c76b2d608507f34&cx=0.28&cy=0.1&cw=1440&ch=540&hash=402ABCF2461F4DD1ED46975A66614D2C"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/full-width-carousel/vinyl-banner-1440x540.jpg?rev=da21fa6acbb84c19a2b9aaa02f328590&cx=0.52&cy=0.54&cw=1440&ch=540&hash=D87E91D2D29C0744F24115D76BA1E212"
                                className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OfferCarousel;
