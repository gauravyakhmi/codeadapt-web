import React, { Component } from 'react'
import { Link} from 'react-router-dom';

import USFlag from "../../Assets/vendor/flag-icon-css/flags/4x3/us.svg"
import companyLogo from "../../Assets/svg/logos/logo.svg"




class Header extends Component {
    render() {
        return (
            <header id="header" className="u-header">

                {/*Search*/}
                <div id="searchPushTop" className="u-search-push-top">
                    <div className="container position-relative">
                        <div className="u-search-push-top__content mx-auto">
                            {/*Close Button */}
                            <button type="button" className="close u-search-push-top__close-btn"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    aria-controls="searchPushTop"
                                    data-unfold-type="jquery-slide"
                                    data-unfold-target="#searchPushTop">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            {/*End Close Button*/}

                            {/*Input*/}
                            <form
                                className="js-focus-state input-group input-group-lg u-form u-form--lg u-form--no-brd">
                                <input type="search" className="form-control u-form__input" placeholder="Search Front"
                                       aria-label="Search Front" />
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-primary u-btn-primary">Search</button>
                                    </div>
                            </form>
                            {/*End Input*/}

                            {/*Link Lists*/}
                            <div className="row d-none d-md-flex mt-7">
                                <div className="col-sm-6">
                                    <strong className="d-block mb-2">Quick Links</strong>

                                    <div className="row">
                                        {/*List */}
                                        <ul className="col-sm-6 list-unstyled u-list">
                                            <li>
                                                <a className="u-list__link" href="#">
                                                    <span className="fa fa-angle-right u-list__link-icon mr-1"></span>
                                                    Search Results List
                                                </a>
                                            </li>
                                            <li>
                                                <a className="u-list__link" href="#">
                                                    <span className="fa fa-angle-right u-list__link-icon mr-1"></span>
                                                    Search Results Grid
                                                </a>
                                            </li>
                                            <li>
                                                <a className="u-list__link" href="../pages/about-agency.html">
                                                    <span className="fa fa-angle-right u-list__link-icon mr-1"></span>
                                                    About
                                                </a>
                                            </li>
                                            <li>
                                                <a className="u-list__link" href="../pages/services-agency.html">
                                                    <span className="fa fa-angle-right u-list__link-icon mr-1"></span>
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a className="u-list__link" href="#">
                                                    <span className="fa fa-angle-right u-list__link-icon mr-1"></span>
                                                    Invoice
                                                </a>
                                            </li>
                                        </ul>
                                        {/*End List*/}

                                        {/*List*/}
                                        <ul className="col-sm-6 list-unstyled u-list">
                                            <li>
                                                <a className="u-list__link" href="#">
                                                    <span className="fa fa-angle-right u-list__link-icon mr-1"></span>
                                                    Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a className="u-list__link" href="#">
                                                    <span className="fa fa-angle-right u-list__link-icon mr-1"></span>
                                                    User Contacts
                                                </a>
                                            </li>
                                            <li>
                                                <a className="u-list__link" href="#">
                                                    <span className="fa fa-angle-right u-list__link-icon mr-1"></span>
                                                    Reviews
                                                </a>
                                            </li>
                                            <li>
                                                <a className="u-list__link" href="#">
                                                    <span className="fa fa-angle-right u-list__link-icon mr-1"></span>
                                                    Settings
                                                </a>
                                            </li>
                                        </ul>
                                        {/*End List*/}
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    {/*Banner*/}
                                    <div className="rounded u-search-push-top__banner">
                                        <div className="d-flex align-items-center">
                                            <div className="u-search-push-top__banner-container">
                                                <img className="img-fluid u-search-push-top__banner-img"
                                                     src="../../assets/img/mockups/img3.png" alt="Image Description"/>
                                                    <img className="img-fluid u-search-push-top__banner-img"
                                                         src="../../assets/img/mockups/img2.png"
                                                         alt="Image Description" />
                                            </div>

                                            <div>
                                                <div className="mb-4">
                                                    <strong className="d-block mb-2">Featured Item</strong>
                                                    <p>Create astonishing web sites and pages.</p>
                                                </div>
                                                <a className="btn btn-xs u-btn-success--air transition-3d-hover"
                                                   href="index.html">Apply Now <span
                                                    className="fa fa-angle-right ml-2"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Banner*/}
                                </div>
                            </div>
                            {/*End Link Lists*/}
                        </div>
                    </div>
                </div>
                {/*End Search*/}

                <div className="u-header__section">
                    {/*Topbar*/}
                    <div className="container u-header__hide-content pt-2">
                        <div className="d-flex align-items-center mb-0">
                            {/*Language*/}
                            <div className="position-relative">
                                <a id="languageDropdownInvoker" className="d-flex align-items-center u-unfold-wrapper"
                                   href="javascript:;" role="button"
                                   aria-controls="languageDropdown"
                                   aria-haspopup="true"
                                   aria-expanded="false"
                                   data-unfold-event="hover"
                                   data-unfold-target="#languageDropdown"
                                   data-unfold-type="css-animation"
                                   data-unfold-duration="300"
                                   data-unfold-delay="300"
                                   data-unfold-hide-on-scroll="true"
                                   data-unfold-animation-in="slideInUp"
                                   data-unfold-animation-out="fadeOut">
                                    <img className="u-unfold__icon"
                                         src={USFlag} alt="SVG" />
                                        <span className="d-inline-block d-sm-none">US</span>
                                        <span className="d-none d-sm-inline-block">United States</span>
                                        <span className="fa fa-angle-down u-unfold__icon-pointer"></span>
                                </a>

                                <div id="languageDropdown" className="u-unfold mt-2"
                                     aria-labelledby="languageDropdownInvoker">
                                    <a className="active u-list__link" href="#">English</a>
                                    <a className="u-list__link" href="#">Deutsch</a>
                                    <a className="u-list__link" href="#">Español‎</a>
                                </div>
                            </div>
                            {/*End Language*/}

                            <div className="ml-auto">
                                {/*Jump To*/}
                                <div className="d-inline-block d-sm-none position-relative mr-2">
                                    <a id="jumpToDropdownInvoker" className="d-flex align-items-center u-unfold-wrapper"
                                       href="javascript:;" role="button"
                                       aria-controls="jumpToDropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false"
                                       data-unfold-event="hover"
                                       data-unfold-target="#jumpToDropdown"
                                       data-unfold-type="css-animation"
                                       data-unfold-duration="300"
                                       data-unfold-delay="300"
                                       data-unfold-hide-on-scroll="true"
                                       data-unfold-animation-in="slideInUp"
                                       data-unfold-animation-out="fadeOut">
                                        Jump to
                                        <span className="fa fa-angle-down u-unfold__icon-pointer"></span>
                                    </a>

                                    <div id="jumpToDropdown" className="u-unfold mt-2"
                                         aria-labelledby="jumpToDropdownInvoker">
                                        <a className="u-list__link" href="../pages/help.html">Help</a>
                                        <a className="u-list__link" href="../pages/contacts-agency.html">Contacts</a>
                                    </div>
                                </div>
                                {/*End Jump To*/}

                                {/*Links*/}
                                <div className="d-none d-sm-inline-block ml-sm-auto">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                            <a className="u-header__topbar-nav-link" href="../pages/help.html">Help</a>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                            <a className="u-header__topbar-nav-link"
                                               href="../pages/contacts-agency.html">Contacts</a>
                                        </li>
                                    </ul>
                                </div>
                                {/*  End Links*/}
                            </div>

                            <ul className="list-inline ml-2 mb-0">
                                {/*  Search*/}
                                <li className="list-inline-item">
                                    <a className="btn btn-xs u-btn--icon u-btn-text-secondary" href="javascript:;"
                                       role="button"
                                       aria-haspopup="true"
                                       aria-expanded="false"
                                       aria-controls="searchPushTop"
                                       data-unfold-type="jquery-slide"
                                       data-unfold-target="#searchPushTop">
                                        <span className="fa fa-search u-btn--icon__inner"></span>
                                    </a>
                                </li>
                                {/*  End Search*/}

                                {/*  Shopping Cart*/}
                                <li className="list-inline-item position-relative">
                                    <a id="shoppingCartDropdownInvoker"
                                       className="btn btn-xs u-btn--icon u-btn-text-secondary" href="javascript:;"
                                       role="button"
                                       aria-controls="shoppingCartDropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false"
                                       data-unfold-event="hover"
                                       data-unfold-target="#shoppingCartDropdown"
                                       data-unfold-type="css-animation"
                                       data-unfold-duration="300"
                                       data-unfold-delay="300"
                                       data-unfold-hide-on-scroll="true"
                                       data-unfold-animation-in="slideInUp"
                                       data-unfold-animation-out="fadeOut">
                                        <span className="fa fa-shopping-cart u-btn--icon__inner"></span>
                                    </a>

                                    <div id="shoppingCartDropdown" className="text-center u-unfold right-0 p-7 mt-2"
                                         aria-labelledby="shoppingCartDropdownInvoker" >
                <span className="u-shopping-cart-icon mb-4">
                  <span className="fa fa-shopping-basket u-shopping-cart-icon__inner"></span>
                </span>
                                        <span className="d-block">Your Cart is Empty</span>
                                    </div>
                                </li>
                                {/*  End Shopping Cart*/}

                                {/*  Account Login*/}
                                <li className="list-inline-item">
                                    {/*  Account Sidebar Toggle Button*/}
                                    <a id="sidebarNavToggler"
                                       className="btn btn-xs u-btn--icon u-btn-text-secondary u-sidebar__toggler"
                                       href="javascript:;" role="button"
                                       aria-controls="sidebarContent"
                                       aria-haspopup="true"
                                       aria-expanded="false"
                                       data-unfold-event="click"
                                       data-unfold-hide-on-scroll="false"
                                       data-unfold-target="#sidebarContent"
                                       data-unfold-type="css-animation"
                                       data-unfold-animation-in="fadeInRight"
                                       data-unfold-animation-out="fadeOutRight"
                                       data-unfold-duration="500">
                                        <span className="fa fa-user-circle u-btn--icon__inner font-size-14"></span>
                                    </a>
                                    {/*  End Account Sidebar Toggle Button*/}
                                </li>
                                {/*  End Account Login*/}
                            </ul>
                        </div>
                    </div>
                    {/*  End Topbar*/}

                    <div id="logoAndNav" className="container">
                        {/*  Nav*/}
                        <nav className="js-mega-menu navbar navbar-expand-md u-header__navbar">
                            {/*  Logo*/}
                            <a className="navbar-brand u-header__navbar-brand u-header__navbar-brand-top-space"
                               href="../home/index.html" aria-label="Front">
                                <img src={companyLogo} alt="Logo" />
                            </a>
                            {/*  End Logo*/}

                            {/*  Responsive Toggle Button*/}
                            <button type="button" className="navbar-toggler btn u-hamburger"
                                    aria-label="Toggle navigation"
                                    aria-expanded="false"
                                    aria-controls="navBar"
                                    data-toggle="collapse"
                                    data-target="#navBar">
            <span id="hamburgerTrigger" className="u-hamburger__box">
              <span className="u-hamburger__inner"></span>
            </span>
                            </button>
                            {/*  End Responsive Toggle Button*/}

                            {/*  Navigation*/}
                            <div id="navBar" className="collapse navbar-collapse py-0">
                                <ul className="navbar-nav u-header__navbar-nav ml-lg-auto">
                                    {/*  Home*/}
                                    <li className="nav-item hs-has-mega-menu u-header__nav-item"
                                        data-event="hover"
                                        data-animation-in="slideInUp"
                                        data-animation-out="fadeOut"
                                        data-position="left">
                                        <a id="homeMegaMenu" className="nav-link u-header__nav-link pl-0"
                                           href="javascript:;"
                                           aria-haspopup="true"
                                           aria-expanded="false">
                                            Home
                                            <span className="fa fa-angle-down u-header__nav-link-icon"></span>
                                        </a>

                                        {/*  Home - Mega Menu*/}
                                        <div
                                            className="hs-mega-menu u-header__sub-menu w-100 u-header__mega-menu-wrapper-v2"
                                            aria-labelledby="homeMegaMenu">
                                            <div className="row p-0 mr-0">
                                                <div className="col-lg-6 pr-0">
                                                    {/*  Banner Image*/}
                                                    <div className="d-none d-lg-block u-header__banner-v1"
                                                         data-bg-img-src="../../assets/img/750x750/img1.jpg">
                                                        <div
                                                            className="w-100 text-center u-header__banner-v1-content u-content-centered-y p-4">
                                                            <div className="mb-4">
                                                                <strong
                                                                    className="d-block u-header__banner-v1-title mb-2">Branding
                                                                    Works</strong>
                                                                <span className="u-header__banner-v1-text">Experience a level of our quality in both design &amp; customization works.</span>
                                                            </div>
                                                            <a className="btn btn-primary u-btn-primary btn-sm transition-3d-hover"
                                                               href="#">Learn More <span
                                                                className="fa fa-angle-right ml-2"></span></a>
                                                        </div>
                                                    </div>
                                                    {/*  End Banner Image*/}
                                                </div>

                                                <div className="col-lg-6 u-header__mega-menu-wrapper-v3">
                                                    <div className="row u-header__mega-menu-wrapper-v1">
                                                        <div className="col-sm-6">
                                                            <strong className="d-block mb-2">Classic</strong>

                                                            {/*  Links*/}
                                                            <ul className="list-unstyled mb-4">
                                                                <li><a className="nav-link u-list__link py-2 px-0"
                                                                       href="../home/index.html">Classic Agency</a></li>
                                                                <li><a className="nav-link u-list__link py-2 px-0"
                                                                       href="../home/classic-crypto.html">Classic
                                                                    Crypto</a></li>
                                                                <li><a className="nav-link u-list__link py-2 px-0"
                                                                       href="../home/classic-business.html">Classic
                                                                    Business</a></li>
                                                                <li><a className="nav-link u-list__link py-2 px-0"
                                                                       href="../home/classic-marketing.html">Classic
                                                                    Marketing</a></li>
                                                                <li><a className="nav-link u-list__link py-2 px-0"
                                                                       href="../home/classic-consulting.html">Classic
                                                                    Consulting</a></li>
                                                            </ul>
                                                            {/*  End Links*/}

                                                            <strong className="d-block mb-2">Corporate</strong>

                                                            {/*  Links*/}
                                                            <ul className="list-unstyled mb-4">
                                                                <li><a className="nav-link u-list__link py-2 px-0"
                                                                       href="../home/corporate-agency.html">Corporate
                                                                    Agency</a></li>
                                                                <li><a className="nav-link u-list__link py-2 px-0"
                                                                       href="../home/corporate-start-up.html">Corporate
                                                                    Start-Up</a></li>
                                                                <li><a className="nav-link u-list__link py-2 px-0"
                                                                       href="../home/corporate-business.html">Corporate
                                                                    Business <span
                                                                        className="badge badge-success ml-1">New</span></a>
                                                                </li>
                                                            </ul>
                                                            {/*  End Links*/}
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <strong className="d-block mb-2">Landing</strong>

                                                            {/*  Links*/}
                                                            <ul className="list-unstyled mb-4">
                                                                <li><a className="nav-link u-list__link py-2 px-0"
                                                                       href="../home/landing-house.html">Landing
                                                                    House <span
                                                                        className="badge badge-success ml-1">New</span></a>
                                                                </li>
                                                                <li><a className="nav-link u-list__link py-2 px-0"
                                                                       href="../home/landing-job.html">Landing Job <span
                                                                    className="badge badge-success ml-1">New</span></a>
                                                                </li>
                                                            </ul>
                                                            {/*  End Links*/}

                                                            <strong className="d-block mb-2">Blog</strong>

                                                            {/*  Links*/}
                                                            <ul className="list-unstyled mb-4">
                                                                <li><a className="nav-link u-list__link py-2 px-0"
                                                                       href="../home/blog-agency.html">Blog Agency</a>
                                                                </li>
                                                                <li><a className="nav-link u-list__link py-2 px-0"
                                                                       href="../home/blog-start-up.html">Blog
                                                                    Start-Up</a></li>
                                                                <li><a className="nav-link u-list__link py-2 px-0"
                                                                       href="../home/blog-business.html">Blog
                                                                    Business</a></li>
                                                            </ul>
                                                            {/*  End Links*/}

                                                            <strong className="d-block mb-2">Portfolio</strong>

                                                            {/*  Links*/}
                                                            <ul className="list-unstyled u-list">
                                                                <li><a className="nav-link u-list__link py-2 px-0"
                                                                       href="../home/portfolio-agency.html">Portfolio
                                                                    Agency</a></li>
                                                                <li><a className="nav-link u-list__link py-2 px-0"
                                                                       href="../home/portfolio-profile.html">Portfolio
                                                                    Profile</a></li>
                                                            </ul>
                                                            {/*  End Links*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  End Home - Mega Menu*/}
                                    </li>
                                    {/*  End Home*/}

                                    {/*  Pages*/}
                                    <li className="nav-item hs-has-sub-menu u-header__nav-item"
                                        data-event="hover"
                                        data-animation-in="slideInUp"
                                        data-animation-out="fadeOut">
                                        <a id="pagesMegaMenu" className="nav-link u-header__nav-link"
                                           href="javascript:;"
                                           aria-haspopup="true"
                                           aria-expanded="false"
                                           aria-labelledby="pagesSubMenu">
                                            Pages
                                            <span className="fa fa-angle-down u-header__nav-link-icon"></span>
                                        </a>

                                        {/*  Pages - Submenu*/}
                                        <ul id="pagesSubMenu"
                                            className="list-inline hs-sub-menu u-header__sub-menu py-3 mb-0"
                                            aria-labelledby="pagesMegaMenu">
                                            {/*  Account*/}
                                            <li className="dropdown-item hs-has-sub-menu">
                                                <a id="navLinkPagesAccount"
                                                   className="nav-link u-header__sub-menu-nav-link u-list__link py-2"
                                                   href="javascript:;"
                                                   aria-haspopup="true"
                                                   aria-expanded="false"
                                                   aria-controls="navSubmenuPagesAccount">
                                                    Account
                                                    <span className="badge badge-success ml-1">New</span>
                                                    <span
                                                        className="fa fa-angle-right u-header__sub-menu-nav-link-icon"></span>
                                                </a>

                                                {/*  Submenu (level 2)*/}
                                                <ul id="navSubmenuPagesAccount"
                                                    className="hs-sub-menu list-unstyled u-header__sub-menu u-header__sub-menu-menu-gutter--y u-header__sub-menu-offset"
                                                    aria-labelledby="navLinkPagesAccount">
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../account/dashboard.html">Dashboard</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../account/profile.html">Profile</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../account/my-tasks.html">My tasks</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../account/projects.html">Projects</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../account/members.html">Members</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../account/edit-profile.html">Edit profile</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../account/change-password.html">Change password</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../account/notifications.html">Notifications</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../account/activity.html">Activity</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../account/payment-methods.html">Payment methods</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../account/invite-friends.html">Invite friends</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../account/plans.html">Plans</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../account/api-token.html">API Token</a>
                                                    </li>
                                                </ul>
                                                {/*  End Submenu (level 2)*/}
                                            </li>
                                            {/*  End Account*/}

                                            {/*  About*/}
                                            <li className="dropdown-item hs-has-sub-menu">
                                                <a id="navLinkPagesAbout"
                                                   className="nav-link u-header__sub-menu-nav-link u-list__link py-2"
                                                   href="javascript:;"
                                                   aria-haspopup="true"
                                                   aria-expanded="false"
                                                   aria-controls="navSubmenuPagesAbout">
                                                    About
                                                    <span
                                                        className="fa fa-angle-right u-header__sub-menu-nav-link-icon"></span>
                                                </a>

                                                {/*  Submenu (level 2)*/}
                                                <ul id="navSubmenuPagesAbout"
                                                    className="hs-sub-menu list-unstyled u-header__sub-menu u-header__sub-menu-menu-gutter--y u-header__sub-menu-offset"
                                                    aria-labelledby="navLinkPagesAbout">
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/about-agency.html">About Agency</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/about-start-up.html">About Start-Up</a>
                                                    </li>
                                                </ul>
                                                {/*  End Submenu (level 2)*/}
                                            </li>
                                            {/*  About*/}

                                            {/*  Services*/}
                                            <li className="dropdown-item hs-has-sub-menu">
                                                <a id="navLinkPagesServices"
                                                   className="nav-link u-header__sub-menu-nav-link u-list__link py-2"
                                                   href="javascript:;"
                                                   aria-haspopup="true"
                                                   aria-expanded="false"
                                                   aria-controls="navSubmenuPagesServices">
                                                    Services
                                                    <span
                                                        className="fa fa-angle-right u-header__sub-menu-nav-link-icon"></span>
                                                </a>

                                                {/*  Submenu (level 2)*/}
                                                <ul id="navSubmenuPagesServices"
                                                    className="hs-sub-menu list-unstyled u-header__sub-menu u-header__sub-menu-menu-gutter--y u-header__sub-menu-offset"
                                                    aria-labelledby="navLinkPagesServices">
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/services-agency.html">Services Agency</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/services-start-up.html">Services Start-Up</a>
                                                    </li>
                                                </ul>
                                                {/*  End Submenu (level 2)*/}
                                            </li>
                                            {/*  Services*/}

                                            {/*  Careers*/}
                                            <li className="dropdown-item hs-has-sub-menu">
                                                <a id="navLinkPagesCareers"
                                                   className="nav-link u-header__sub-menu-nav-link u-list__link py-2"
                                                   href="javascript:;"
                                                   aria-haspopup="true"
                                                   aria-expanded="false"
                                                   aria-controls="navSubmenuPagesCareers">
                                                    Careers
                                                    <span
                                                        className="fa fa-angle-right u-header__sub-menu-nav-link-icon"></span>
                                                </a>

                                                {/*  Submenu (level 2)*/}
                                                <ul id="navSubmenuPagesCareers"
                                                    className="hs-sub-menu list-unstyled u-header__sub-menu u-header__sub-menu-menu-gutter--y u-header__sub-menu-offset"
                                                    aria-labelledby="navLinkPagesCareers">
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/careers.html">Careers</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/careers-single.html">Careers Single</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/hire-us.html">Hire Us</a>
                                                    </li>
                                                </ul>
                                                {/*  End Submenu (level 2)*/}
                                            </li>
                                            {/*  Careers*/}

                                            {/*  Login*/}
                                            <li className="dropdown-item hs-has-sub-menu">
                                                <a id="navLinkPagesLogin"
                                                   className="nav-link u-header__sub-menu-nav-link u-list__link py-2"
                                                   href="javascript:;"
                                                   aria-haspopup="true"
                                                   aria-expanded="false"
                                                   aria-controls="navSubmenuPagesLogin">
                                                    Login &amp; Signup
                                                    <span
                                                        className="fa fa-angle-right u-header__sub-menu-nav-link-icon"></span>
                                                </a>

                                                {/*  Submenu (level 2)*/}
                                                <ul id="navSubmenuPagesLogin"
                                                    className="hs-sub-menu list-unstyled u-header__sub-menu u-header__sub-menu-menu-gutter--y u-header__sub-menu-offset"
                                                    aria-labelledby="navLinkPagesLogin">
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/login-simple.html">Login Simple</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/signup-simple.html">Signup Simple</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/recover-account.html">Recover Account</a>
                                                    </li>
                                                </ul>
                                                {/*  End Submenu (level 2)*/}
                                            </li>
                                            {/*  Signup*/}

                                            {/*  Contacts*/}
                                            <li className="dropdown-item hs-has-sub-menu">
                                                <a id="navLinkContactsServices"
                                                   className="nav-link u-header__sub-menu-nav-link u-list__link py-2"
                                                   href="javascript:;"
                                                   aria-haspopup="true"
                                                   aria-expanded="false"
                                                   aria-controls="navSubmenuContactsServices">
                                                    Contacts
                                                    <span
                                                        className="fa fa-angle-right u-header__sub-menu-nav-link-icon"></span>
                                                </a>

                                                {/*  Submenu (level 2)*/}
                                                <ul id="navSubmenuContactsServices"
                                                    className="hs-sub-menu list-unstyled u-header__sub-menu u-header__sub-menu-menu-gutter--y u-header__sub-menu-offset"
                                                    aria-labelledby="navLinkContactsServices">
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/contact.html">Contacts Agency</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/contacts-start-up.html">Contacts Start-Up</a>
                                                    </li>
                                                </ul>
                                                {/*  End Submenu (level 2)*/}
                                            </li>
                                            {/*  Contacts*/}

                                            {/*  Utilities*/}
                                            <li className="dropdown-item hs-has-sub-menu">
                                                <a id="navLinkPagesUtilities"
                                                   className="nav-link u-header__sub-menu-nav-link u-list__link py-2"
                                                   href="javascript:;"
                                                   aria-haspopup="true"
                                                   aria-expanded="false"
                                                   aria-controls="navSubmenuPagesUtilities">
                                                    Utilities
                                                    <span
                                                        className="fa fa-angle-right u-header__sub-menu-nav-link-icon"></span>
                                                </a>

                                                {/*  Submenu (level 2)*/}
                                                <ul id="navSubmenuPagesUtilities"
                                                    className="hs-sub-menu list-unstyled u-header__sub-menu u-header__sub-menu-menu-gutter--y u-header__sub-menu-offset"
                                                    aria-labelledby="navLinkPagesUtilities">
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/help.html">Help</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/pricing.html">Pricing</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/terms.html">Terms &amp; Conditions</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/privacy.html">Privacy &amp; Policy</a>
                                                    </li>
                                                </ul>
                                                {/*  End Submenu (level 2)*/}
                                            </li>
                                            {/*  Utilities*/}

                                            {/*  Specialty*/}
                                            <li className="dropdown-item hs-has-sub-menu">
                                                <a id="navLinkPagesSpecialty"
                                                   className="nav-link u-header__sub-menu-nav-link u-list__link py-2"
                                                   href="javascript:;"
                                                   aria-haspopup="true"
                                                   aria-expanded="false"
                                                   aria-controls="navSubmenuPagesSpecialty">
                                                    Specialty
                                                    <span
                                                        className="fa fa-angle-right u-header__sub-menu-nav-link-icon"></span>
                                                </a>

                                                {/*  Submenu (level 2)*/}
                                                <ul id="navSubmenuPagesSpecialty"
                                                    className="hs-sub-menu list-unstyled u-header__sub-menu u-header__sub-menu-menu-gutter--y u-header__sub-menu-offset"
                                                    aria-labelledby="navLinkPagesSpecialty">
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/cover-page.html">Cover Page</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/coming-soon.html">Coming Soon</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/maintenance-mode.html">Maintenance Mode</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../pages/error-404.html">Error 404</a>
                                                    </li>
                                                </ul>
                                                {/*  End Submenu (level 2)*/}
                                            </li>
                                            {/*  Specialty*/}
                                        </ul>
                                        {/*  End Pages - Submenu*/}
                                    </li>
                                    {/*  End Pages*/}

                                    {/*  Works*/}
                                    <li className="nav-item hs-has-mega-menu u-header__nav-item"
                                        data-event="hover"
                                        data-animation-in="slideInUp"
                                        data-animation-out="fadeOut"
                                        data-position="right">
                                        <a id="worksMegaMenu" className="nav-link u-header__nav-link"
                                           href="javascript:;"
                                           aria-haspopup="true"
                                           aria-expanded="false">
                                            Work
                                            <span className="fa fa-angle-down u-header__nav-link-icon"></span>
                                        </a>

                                        {/*  Works - Mega Menu*/}
                                        <div
                                            className="hs-mega-menu w-100 u-header__sub-menu u-header__mega-menu-wrapper-v1"
                                            aria-labelledby="worksMegaMenu">
                                            <div className="row">
                                                <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
                                                    <strong className="d-block mb-2">Boxed Layouts</strong>

                                                    {/*  Links*/}
                                                    <ul className="list-unstyled u-list">
                                                        <li><a className="nav-link u-list__link py-2 px-0"
                                                               href="../portfolio/boxed-classic.html">Portfolio
                                                            Classic</a></li>
                                                        <li><a className="nav-link u-list__link py-2 px-0"
                                                               href="../portfolio/boxed-grid.html">Portfolio Grid</a>
                                                        </li>
                                                        <li><a className="nav-link u-list__link py-2 px-0"
                                                               href="../portfolio/boxed-masonry.html">Portfolio
                                                            Masonry</a></li>
                                                        <li><a className="nav-link u-list__link py-2 px-0"
                                                               href="../portfolio/boxed-modern.html">Portfolio
                                                            Modern</a></li>
                                                    </ul>
                                                    {/*  End Links*/}
                                                </div>

                                                <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
                                                    <strong className="d-block mb-2">Full Width Layouts</strong>

                                                    {/*  Links*/}
                                                    <ul className="list-unstyled u-list">
                                                        <li><a className="nav-link u-list__link py-2 px-0"
                                                               href="../portfolio/fullwidth-classic.html">Portfolio
                                                            Classic</a></li>
                                                        <li><a className="nav-link u-list__link py-2 px-0"
                                                               href="../portfolio/fullwidth-grid.html">Portfolio
                                                            Grid</a></li>
                                                        <li><a className="nav-link u-list__link py-2 px-0"
                                                               href="../portfolio/fullwidth-masonry.html">Portfolio
                                                            Masonry</a></li>
                                                        <li><a className="nav-link u-list__link py-2 px-0"
                                                               href="../portfolio/fullwidth-modern.html">Portfolio
                                                            Modern</a></li>
                                                    </ul>
                                                    {/*  End Links*/}
                                                </div>

                                                <div className="col-sm-6 col-lg-3 mb-3 mb-sm-0">
                                                    <strong className="d-block mb-2">Single Pages</strong>

                                                    {/*  Links*/}
                                                    <ul className="list-unstyled u-list">
                                                        <li><a className="nav-link u-list__link py-2 px-0"
                                                               href="../portfolio/single-page-simple.html">Single Page
                                                            Simple</a></li>
                                                        <li><a className="nav-link u-list__link py-2 px-0"
                                                               href="../portfolio/single-page-grid.html">Single Page
                                                            Grid</a></li>
                                                        <li><a className="nav-link u-list__link py-2 px-0"
                                                               href="../portfolio/single-page-masonry.html">Single Page
                                                            Masonry</a></li>
                                                    </ul>
                                                    {/*  End Links*/}
                                                </div>

                                                <div className="col-sm-6 col-lg-3">
                                                    <strong className="d-block mb-2">Case Studies</strong>

                                                    {/*  Links*/}
                                                    <ul className="list-unstyled u-list">
                                                        <li><a className="nav-link u-list__link py-2 px-0"
                                                               href="../portfolio/case-studies-simple.html">Case Studies
                                                            Simple</a></li>
                                                        <li><a className="nav-link u-list__link py-2 px-0"
                                                               href="../portfolio/case-studies-modern.html">Case Studies
                                                            Modern</a></li>
                                                    </ul>
                                                    {/*  End Links*/}
                                                </div>
                                            </div>
                                        </div>
                                        {/*  End Works - Mega Menu*/}
                                    </li>
                                    {/*  End Works*/}

                                    {/*  Blog*/}
                                    <li className="nav-item hs-has-sub-menu u-header__nav-item"
                                        data-event="hover"
                                        data-animation-in="slideInUp"
                                        data-animation-out="fadeOut">
                                        <a id="blogMegaMenu" className="nav-link u-header__nav-link" href="javascript:;"
                                           aria-haspopup="true"
                                           aria-expanded="false"
                                           aria-labelledby="blogSubMenu">
                                            Blog
                                            <span className="fa fa-angle-down u-header__nav-link-icon"></span>
                                        </a>

                                        {/*  Blog - Submenu*/}
                                        <ul id="blogSubMenu"
                                            className="list-inline hs-sub-menu u-header__sub-menu py-3 mb-0"
                                            aria-labelledby="blogMegaMenu">
                                            {/*  Classic*/}
                                            <li className="dropdown-item hs-has-sub-menu">
                                                <a id="navLinkBlogClassic"
                                                   className="nav-link u-header__sub-menu-nav-link u-list__link py-2"
                                                   href="javascript:;"
                                                   aria-haspopup="true"
                                                   aria-expanded="false"
                                                   aria-controls="navSubmenuBlogClassic">
                                                    Classic
                                                    <span
                                                        className="fa fa-angle-right u-header__sub-menu-nav-link-icon"></span>
                                                </a>

                                                {/*  Submenu (level 2)*/}
                                                <ul id="navSubmenuBlogClassic"
                                                    className="hs-sub-menu list-unstyled u-header__sub-menu u-header__sub-menu-menu-gutter--y u-header__sub-menu-offset"
                                                    aria-labelledby="navLinkBlogClassic">
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/classic-left-sidebar.html">Left Sidebar</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/classic-right-sidebar.html">Right Sidebar</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/classic-full-width.html">Full Width</a>
                                                    </li>
                                                </ul>
                                                {/*  End Submenu (level 2)*/}
                                            </li>
                                            {/*  Classic*/}

                                            {/*  Grid*/}
                                            <li className="dropdown-item hs-has-sub-menu">
                                                <a id="navLinkBlogGrid"
                                                   className="nav-link u-header__sub-menu-nav-link u-list__link py-2"
                                                   href="javascript:;"
                                                   aria-haspopup="true"
                                                   aria-expanded="false"
                                                   aria-controls="navSubmenuBlogGrid">
                                                    Grid
                                                    <span
                                                        className="fa fa-angle-right u-header__sub-menu-nav-link-icon"></span>
                                                </a>

                                                {/*  Submenu (level 2)*/}
                                                <ul id="navSubmenuBlogGrid"
                                                    className="hs-sub-menu list-unstyled u-header__sub-menu u-header__sub-menu-menu-gutter--y u-header__sub-menu-offset"
                                                    aria-labelledby="navLinkBlogGrid">
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/grid-left-sidebar.html">Left Sidebar</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/grid-right-sidebar.html">Right Sidebar</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/grid-full-width.html">Full Width</a>
                                                    </li>
                                                </ul>
                                                {/*  End Submenu (level 2)*/}
                                            </li>
                                            {/*  Grid*/}

                                            {/*  List*/}
                                            <li className="dropdown-item hs-has-sub-menu">
                                                <a id="navLinkBlogList"
                                                   className="nav-link u-header__sub-menu-nav-link u-list__link py-2"
                                                   href="javascript:;"
                                                   aria-haspopup="true"
                                                   aria-expanded="false"
                                                   aria-controls="navSubmenuBlogList">
                                                    List
                                                    <span
                                                        className="fa fa-angle-right u-header__sub-menu-nav-link-icon"></span>
                                                </a>

                                                {/*  Submenu (level 2)*/}
                                                <ul id="navSubmenuBlogList"
                                                    className="hs-sub-menu list-unstyled u-header__sub-menu u-header__sub-menu-menu-gutter--y u-header__sub-menu-offset"
                                                    aria-labelledby="navLinkBlogList">
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/list-left-sidebar.html">Left Sidebar</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/list-right-sidebar.html">Right Sidebar</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/list-full-width.html">Full Width</a>
                                                    </li>
                                                </ul>
                                                {/*  End Submenu (level 2)*/}
                                            </li>
                                            {/*  List*/}

                                            {/*  Modern*/}
                                            <li className="dropdown-item hs-has-sub-menu">
                                                <a id="navLinkBlogCard"
                                                   className="nav-link u-header__sub-menu-nav-link u-list__link py-2"
                                                   href="javascript:;"
                                                   aria-haspopup="true"
                                                   aria-expanded="false"
                                                   aria-controls="navSubmenuBlogCard">
                                                    Modern
                                                    <span
                                                        className="fa fa-angle-right u-header__sub-menu-nav-link-icon"></span>
                                                </a>

                                                {/*  Submenu (level 2)*/}
                                                <ul id="navSubmenuBlogCard"
                                                    className="hs-sub-menu list-unstyled u-header__sub-menu u-header__sub-menu-menu-gutter--y u-header__sub-menu-offset"
                                                    aria-labelledby="navLinkBlogCard">
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/modern-left-sidebar.html">Left Sidebar</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/modern-right-sidebar.html">Right Sidebar</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/modern-full-width.html">Full Width</a>
                                                    </li>
                                                </ul>
                                                {/*  End Submenu (level 2)*/}
                                            </li>
                                            {/*  Grid Modern*/}

                                            {/*  Masonry*/}
                                            <li className="dropdown-item hs-has-sub-menu">
                                                <a id="navLinkBlogGridMinimal"
                                                   className="nav-link u-header__sub-menu-nav-link u-list__link py-2"
                                                   href="javascript:;"
                                                   aria-haspopup="true"
                                                   aria-expanded="false"
                                                   aria-controls="navSubmenuBlogGridMinimal">
                                                    Masonry
                                                    <span
                                                        className="fa fa-angle-right u-header__sub-menu-nav-link-icon"></span>
                                                </a>

                                                {/*  Submenu (level 2)*/}
                                                <ul id="navSubmenuBlogGridMinimal"
                                                    className="hs-sub-menu list-unstyled u-header__sub-menu u-header__sub-menu-menu-gutter--y u-header__sub-menu-offset"
                                                    aria-labelledby="navLinkBlogGridMinimal">
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/masonry-left-sidebar.html">Left Sidebar</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/masonry-right-sidebar.html">Right Sidebar</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/masonry-full-width.html">Full Width</a>
                                                    </li>
                                                </ul>
                                                {/*  End Submenu (level 2)*/}
                                            </li>
                                            {/*  Masonry*/}

                                            {/*  Single Article*/}
                                            <li className="dropdown-item hs-has-sub-menu">
                                                <a id="navLinkBlogGridMasonry"
                                                   className="nav-link u-header__sub-menu-nav-link u-list__link py-2"
                                                   href="javascript:;"
                                                   aria-haspopup="true"
                                                   aria-expanded="false"
                                                   aria-controls="navSubmenuBlogGridMasonry">
                                                    Single Article
                                                    <span
                                                        className="fa fa-angle-right u-header__sub-menu-nav-link-icon"></span>
                                                </a>

                                                {/*  Submenu (level 2)*/}
                                                <ul id="navSubmenuBlogGridMasonry"
                                                    className="hs-sub-menu list-unstyled u-header__sub-menu u-header__sub-menu-menu-gutter--y u-header__sub-menu-offset"
                                                    aria-labelledby="navLinkBlogGridMasonry">
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/single-article-classic.html">Classic</a>
                                                    </li>
                                                    <li className="dropdown-item px-0">
                                                        <a className="nav-link u-list__link px-4"
                                                           href="../blog/single-article-simple.html">Simple</a>
                                                    </li>
                                                </ul>
                                                {/*  End Submenu (level 2)*/}
                                            </li>
                                            {/*  Single Article*/}
                                        </ul>
                                        {/*  End Submenu*/}
                                    </li>
                                    {/*  End Blog*/}

                                    {/*  Shop*/}
                                    <li className="nav-item hs-has-mega-menu u-header__nav-item"
                                        data-event="hover"
                                        data-animation-in="slideInUp"
                                        data-animation-out="fadeOut"
                                        data-max-width="440px"
                                        data-position="right">
                                        <a id="shopMegaMenu" className="nav-link u-header__nav-link" href="javascript:;"
                                           aria-haspopup="true"
                                           aria-expanded="false">
                                            Shop
                                            <span className="fa fa-angle-down u-header__nav-link-icon"></span>
                                        </a>

                                        {/*  Shop - Mega Menu*/}
                                        <div className="hs-mega-menu u-header__sub-menu" aria-labelledby="shopMegaMenu">
                                            <div className="u-header__mega-menu-wrapper-v1">
                                                <strong className="d-block mb-2">Shop Elements</strong>

                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        {/*  Links*/}
                                                        <ul className="list-unstyled u-list">
                                                            <li><a className="nav-link u-list__link py-2 px-0"
                                                                   href="classic.html">Classic</a></li>
                                                            <li><a className="nav-link u-list__link py-2 px-0"
                                                                   href="masonry.html">Masonry</a></li>
                                                            <li><a className="nav-link u-list__link py-2 px-0"
                                                                   href="single-product.html">Single Product</a></li>
                                                        </ul>
                                                        {/*  End Links*/}
                                                    </div>

                                                    <div className="col-sm-6">
                                                        {/*  Links*/}
                                                        <ul className="list-unstyled u-list">
                                                            <li><a className="nav-link u-list__link py-2 px-0"
                                                                   href="cart.html">Cart</a></li>
                                                            <li><a className="nav-link u-list__link py-2 px-0"
                                                                   href="checkout.html">Checkout</a></li>
                                                        </ul>
                                                        {/*  End Links*/}
                                                    </div>
                                                </div>
                                            </div>

                                            {/*  Mega Menu Banner*/}
                                            <div className="d-none d-md-block u-header__banner-v2 pr-4">
                                                <div className="d-flex align-items-end">
                                                    <img className="img-fluid mr-4"
                                                         src="../../assets/img/mockups/img4.png" alt="Image Description" />
                                                        <div className="py-4">
                                                            <div className="mb-4">
                                                                <strong
                                                                    className="d-block u-header__banner-v2-title mb-2">Win
                                                                    T-shirt</strong>
                                                                <span className="d-block u-header__banner-v2-text">Win one of our Front brand T-shirts.</span>
                                                            </div>
                                                            <a className="btn btn-sm u-btn-primary--air transition-3d-hover"
                                                               href="classic.html">Learn More <span
                                                                className="fa fa-angle-right ml-2"></span></a>
                                                        </div>
                                                </div>
                                            </div>
                                            {/*  End Mega Menu Banner*/}
                                        </div>
                                        {/*  End Shop - Mega Menu*/}
                                    </li>
                                    {/*  End Shop*/}

                                    {/*  Starter - Link*/}
                                    <li className="nav-item">
                                        <a className="nav-link u-header__nav-link" href="../../starter/index.html">
                                            Starter
                                        </a>
                                    </li>
                                    {/*  End Starter - Link*/}

                                    {/*  Button*/}
                                    <li className="nav-item d-none d-md-inline-block pl-3 pr-0">
                                        <a className="btn btn-sm btn-primary u-btn-primary transition-3d-hover"
                                           href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/"
                                           target="_blank">
                                            Buy Now
                                        </a>
                                    </li>
                                    {/*  End Button*/}
                                </ul>
                            </div>
                            {/*  End Navigation*/}
                        </nav>
                        {/*  End Nav*/}
                    </div>
                </div>
            </header>





        );
    }
}

export default Header;
