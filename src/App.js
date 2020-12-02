import './App.css';
import Aux from './HOC/Aux'
import Navbar from './Components/Navigation/Navbar/Navbar'
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects'
import Mountain from './Components/Mountains/Mountains';


const App = () => {
  return (
    <Aux>
    <Navbar/>
    <div>
      <Mountain/>
      <AboutMe/>
      <Projects/>
    </div>
    </Aux>
  );
}

export default App;
