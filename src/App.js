import {Routes, Route, BrowserRouter} from "react-router-dom";
// Home Page
import HomePage from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
/* import Login from "./pages/Login.js";
import Dashboard from "./pages/Dashboard.js";
import Register from "./pages/Register.js";
import Tags from "./pages/Tags.js"; */

function App() {
  return (

      <div className="App">
        <Routes>
          <Route path = "/" element = {<HomePage/>} exact/>
{/*       <Route path = "/login" component = {<Login/>}/>
          <Route path = "/dashboard" component = {<Dashboard/>}/>
          <Route path = "/register" component = {<Register/>}/>
          <Route path = "/tags" component = {<Tags/>}/> */}
        </Routes>
      </div>

  );
}

export default App;