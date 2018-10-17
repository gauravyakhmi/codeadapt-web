import React, { Component } from 'react'

import '../../Assets/vendor/fancybox/jquery.fancybox.css';

class Home extends Component {
    render() {
        return (

            // <!-- Hero Section -->
        <div class="d-flex align-items-center position-relative u-bg-gradient-v1 u-space-4-top u-space-5-top--md u-space-0--lg min-height-100vh--lg">
            {/*Content*/}
            <div class="container">
            <div class="row">
            <div class="col-lg-5">
            <div class="g-mb-32">
            <h1 class="display-4 font-size-48--md-down mb-3">Introducing Front</h1>
        <p>
            Your company will look
            <span class="text-primary">
              <strong class="u-text-animation u-text-animation--typing"></strong>
            </span>
            <br />
                Covert more visitors, and win more business with Front template.
        </p>
    </div>

    <div class="d-flex align-items-center">
            <a class="btn u-btn-primary--air u-btn-wide transition-3d-hover" href="../../html/pages/login-simple.html">Get Started</a>

        {/* Fancybox*/}
        <a class="js-fancybox media align-items-center u-media-player ml-3" href="javascript:;"
           data-src="//vimeo.com/167434033"
           data-speed="700"
           data-animate-in="zoomIn"
           data-animate-out="zoomOut"
           data-caption="Front - Responsive Website Template">
            <span class="d-flex mr-3">
              <span class="u-media-player__icon u-media-player__icon--success">
                <span class="fa fa-play u-media-player__icon-inner"></span>
              </span>
            </span>
            <span class="media-body">
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
        <div class="col-lg-9 col-xl-7 d-none d-lg-block position-absolute-top-right-0 pr-0">

    </div>
    {/*End SVG Background*/}
        </div>


        );
    }
}

export default Home;
