import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavbarComponent from './Component/NavbarComponent'
import News from './Component/News'
import About from './Component/About'
import Contact from './Component/Contact'


function App() {

  return (
    <BrowserRouter>
      <NavbarComponent />
      <Switch>
        <Route exact path="/">
          <News />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
       
      </Switch>
    </ BrowserRouter>
  );
}

export default App;