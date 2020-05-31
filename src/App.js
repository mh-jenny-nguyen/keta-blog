import React from 'react';
import './style/App.scss';
import StandardLayout from './layouts/StandardLayout';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import FollowMe from './containers/FollowMe';
import Portfolio from './containers/Portfolio';
import SocialLife from './containers/SocialLife';
import ContactUs from './containers/ContactUs';
import Detail from './containers/Detail';
import Search from './containers/Search';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <StandardLayout>
            <Route path="/" exact component={Home} />
            <Route path="/page/:slug"  component={Home} />
            <Route path="/follow-me"  component={FollowMe}/>
            <Route path="/social-life" component={SocialLife} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact-us" component={ContactUs} />
            <Route exact path="/detail/:slug" component={Detail} />
            <Route exact path="/search" component={Search} />
          </StandardLayout>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
