    import React, { Component } from 'react'
    
    import '../../Assets/vendor/fancybox/jquery.fancybox.css';

    import contact from "../../Assets/svg/bg/contact.svg"
    import bottom from "../../Assets/svg/bg/bottom.svg"

    import Fancybox from 'fancybox'
    import '../../Assets/css/custom-front.min.css'
    
    class Contact extends Component {
    
        render() {
            return (

                <div>
                {/*Hire Us Title Section*/}
                <div className="position-relative u-gradient-half-primary-v1 z-index-2">
                    <div className="container u-space-4-top u-space-5-top--md u-space-3-bottom u-space-5-bottom--lg">
                        <div className="w-md-80 w-lg-50 text-center mx-auto">
                            <h1 className="text-white">Got a <span className="font-weight-bold">project</span> for us?</h1>
                            <p className="lead u-text-light">We help brands and platforms turn big ideas into beautiful digital products and experiences.</p>
                        </div>
                    </div>

                    <figure className="w-100 w-sm-75 w-md-50 u-content-centered-y z-index-minus-1 ml-9">
                        <img src={contact} alt="bg1" />
                    </figure>

                    {/*SVG Bottom Shape*/}
                    <figure  className="position-absolute-bottom-0">
                        <img src={bottom} />
                    </figure>
                    {/* End SVG Bottom Shape*/}
                </div>
                {/*End Hire Us Title Section*/}
                </div>
            );
        }
    }
    
    export default Contact;
