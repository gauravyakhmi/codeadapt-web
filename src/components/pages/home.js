import React, { Component } from 'react'

import '../../Assets/vendor/fancybox/jquery.fancybox.css';

import Typed from 'typed.js'
import Fancybox from 'fancybox'


class Home extends Component {

    componentDidMount() {

        const options = {
            strings: ["more professional.", "perfect in every way.", "astonishing."],
            typeSpeed: 60,
            loop: true,
            backSpeed: 25,
            backDelay: 1500
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(".u-text-animation--typing", options);


        // initialization of popups
        //$.HSCore.components.HSPopup.init('.js-fancybox');

    }

    render() {
        return (

            // <!-- Hero Section -->
        <div className="d-flex align-items-center position-relative u-bg-gradient-v1 u-space-4-top u-space-5-top--md u-space-0--lg min-height-100vh--lg">
            {/*Content*/}
            <div className="container">
            <div className="row">
            <div className="col-lg-5">
            <div className="g-mb-32">
            <h1 className="display-4 font-size-48--md-down mb-3">CodeAdapt</h1>
        <p>
            Your company will look&nbsp;
            <span className="text-primary">
               <strong className="u-text-animation u-text-animation--typing"></strong>
            </span>
            <br />
                Covert more visitors, and win more business with Front template.
        </p>
    </div>

    <div className="d-flex align-items-center">
            <a className="btn u-btn-primary--air u-btn-wide transition-3d-hover" href="../../html/pages/login-simple.html">Get Started</a>

        {/* Fancybox*/}
        <a className="js-fancybox media align-items-center u-media-player ml-3" href="javascript:;"
           data-src="//vimeo.com/167434033"
           data-speed="700"
           data-animate-in="zoomIn"
           data-animate-out="zoomOut"
           data-caption="Front - Responsive Website Template">
            <span className="d-flex mr-3">
              <span className="u-media-player__icon u-media-player__icon--success">
                <span className="fa fa-play u-media-player__icon-inner"></span>
              </span>
            </span>
            <span className="media-body">
              Play video
            </span>
        </a>
        {/*End Fancybox*/}
        </div>
    </div>
    </div>
    </div>
    {/*End Content*/}

        {/*SVG Background*/}
        <div className="col-lg-9 col-xl-7 d-none d-lg-block position-absolute-top-right-0 pr-0">

    </div>
    {/*End SVG Background*/}
        </div>


        );
    }
}

export default Home;
