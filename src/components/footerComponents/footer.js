import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
                <footer className="container text-warning">
                    <div className="row u-space-2">
                        <div className="col-md-4 mb-7 mb-md-0">
                            <div className="media">
                                <div className="d-flex mr-3">
                                 <span className="u-icon u-icon--lg u-icon-primary--air rounded-circle">
                                    <span className="fa fa-phone u-icon__inner"></span>
                                 </span>
                                </div>
                                <div className="media-body">
                                    <h4 className="u-list__link font-weight-normal mb-0">Call us</h4>
                                    <span className="d-block font-size-14">+1 (425) 495-9666</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-7 mb-md-0">
                            <div className="media">
                                <div className="d-flex mr-3">
                                 <span className="u-icon u-icon--lg u-icon-primary--air rounded-circle">
                                    <span className="fa fa-envelope u-icon__inner"></span>
                                 </span>
                                </div>
                                <div className="media-body">
                                    <h4 className="u-list__link font-weight-normal mb-0">Email us</h4>
                                    <span className="d-block font-size-14">info@codeadapt.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-7 mb-md-0">
                            <div className="media">
                                <div className="d-flex mr-3">
                                <span className="u-icon u-icon--lg u-icon-primary--air rounded-circle">
                                 <span className="fa fa-map-marker-alt u-icon__inner"></span>
                                </span>
                                </div>
                                <div className="media-body">
                                    <h4 className="u-list__link font-weight-normal mb-0">Address</h4>
                                    <span className="d-block font-size-14">12818 NE 84th St, Kirkland (98033) - WA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-0">

                        <div className="row u-space-2">
                            <div className="col-6 col-lg-3 mb-7 mb-lg-0">
                                <a className="d-inline-block mb-3" href="#" aria-label="Front">
                                    <img src="../assets/svg/logos/logo.svg" alt="Company Logo"/>
                                </a>

                                <p className="small text-muted">© CodeAdapt. All rights reserved.</p>
                            </div>

                            <div className="col-6 col-lg-3 mb-7 mb-lg-0">
                                <ul className="list-unstyled u-list u-list--light">
                                    <li><a className="u-list__link" href="#">Agency</a></li>
                                    <li><a className="u-list__link" href="#">Start-Up</a></li>
                                    <li><a className="u-list__link" href="#">Business</a></li>
                                    <li><a className="u-list__link" href="#">Contacts</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-lg-3 mb-7 mb-lg-0">

                                <ul className="list-unstyled u-list u-list--light">
                                    <li><a className="u-list__link" href="#">Help</a></li>
                                    <li><a className="u-list__link" href="#">Terms</a></li>
                                    <li><a className="u-list__link" href="#">Privacy</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-lg-3 mb-7 mb-lg-0">
                                <div className="u-list--light">
                                    <h4 className="u-list__link font-weight-normal">Connect</h4>
                                </div>

                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mb-3">
                                        <a className="u-icon u-icon--sm u-icon-primary--air rounded" href="#">
                                            <span className="fab fa-facebook-f u-icon__inner"></span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item mb-3">
                                        <a className="u-icon u-icon--sm u-icon-primary--air rounded" href="#">
                                            <span className="fab fa-google u-icon__inner"></span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item mb-3">
                                        <a className="u-icon u-icon--sm u-icon-primary--air rounded" href="#">
                                            <span className="fab fa-twitter u-icon__inner"></span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item mb-3">
                                        <a className="u-icon u-icon--sm u-icon-primary--air rounded" href="#">
                                            <span className="fab fa-github u-icon__inner"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

             );
        }
    }

    export default Footer;
