import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

//includes

// CSS Global Compulsory
import '../src/Assets/vendor/bootstrap/bootstrap.css';

// CSS Implementing Plugins
import './Assets/vendor/font-awesome/css/fontawesome-all.min.css';

// CSS Front Template
import './Assets/css/front.min.css';

import './Assets/css/front-components.min.css';
import './Assets/css/front-core.min.css';
import './Assets/css/custom-front.min.css';


import './Assets/vendor/animate.css/animate.min.css';
import './Assets/vendor/hs-megamenu/src/hs.megamenu.css';
import './Assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';


//import './Assets/vendor/jquery/dist/jquery.js';
 //import './Assets/vendor/popper.js/dist/umd/popper.min.js';
//import './Assets/vendor/bootstrap/bootstrap.min.js';
// import './assets/js/hs.core.js';


// components
import Header from './components/headerComponents/header'
import Footer from './components/footerComponents/footer'
import Home from './components/pages/home'
import Services from './components/pages/services'

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">

            <Header className="text-success" />

            <Route exact path='/' component={Home} />
            <Route exact path='/Services' component={Services} />

            <Footer/>
         </div>
        </Router>
    );
  }
}

export default App;
