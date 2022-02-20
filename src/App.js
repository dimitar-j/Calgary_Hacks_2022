import {Routes, Route, BrowserRouter} from "react-router-dom";
// Home Page
import HomePage from './pages/Home.js';
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Dashboard from './pages/Dashboard.js'
import Register from './pages/Register.js'
import Tags from './pages/Tags.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomePage></HomePage>
      </div>
      <switch>
        <Route path = '/' component = {Home} exact/>
        <Route path = '/login' component = {Login}/>
        <Route path = '/dashboard' component = {Dashboard}/>
        <Route path = '/register' component = {Register}/>
        <Route path = '/tags' component = {Tags}/>
      </switch>
    </BrowserRouter>
  );
}


export default App;
