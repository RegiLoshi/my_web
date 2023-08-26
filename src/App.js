import React from 'react';
import './App.css';
import Design from './components/animated_background/design';
import NavBar from './components/main_page/navigation/nav_bar';
import Introduction from './components/main_page/Introduction/Introduction';
import AboutMe from './components/about_me_page/about_me';
import Projects from './components/projects_page/projects_page';
import Contact from './components/Contact_me_page/Contact';
class App extends React.Component {
  render () {
    return(
    <div className="App">
    <div className='particles'>
    <Design/>
    </div>
    <div className='MainPage'>
    <NavBar />
    <hr />
    <Introduction />
    </div>
    <div className='SecondPage'>
    <hr/>
    <AboutMe />
    </div>
    <hr />
    <div className='project_page'>
    <Projects />
    </div>
    <hr />
    <div className='Conctact me'>
      <Contact />
    </div>
    </div>
    )
  }
}

export default App;
