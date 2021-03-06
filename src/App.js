import {Routes, Route, BrowserRouter} from "react-router-dom";
// Home Page
import HomePage from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
import Register from "./pages/Register.js";
import { db } from "./firebase-config";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

/* import Login from "./pages/Login.js";
import Dashboard from "./pages/Dashboard.js";
import Register from "./pages/Register.js";
import Tags from "./pages/Tags.js"; */

function App() {
  const [businesses, setBusinesses] = useState([]);
  const businessCollectionRef = collection(db, "business");

  useEffect(() => {
    
    const getBusinesses = async () => {
      const data = await getDocs(businessCollectionRef);
      setBusinesses(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getBusinesses();

  }, []);
  return (
      <div className="App">
        <Routes>
          <Route path = "/" element = {<HomePage/>} exact/>
          <Route path = "/dashboard" element = {<Dashboard listings={businesses} fake={["abc","def"]}/>} exact/>
          <Route path = "/register" element = {<Register/>}exact/>
        </Routes>
      </div>

  );
}

export default App;