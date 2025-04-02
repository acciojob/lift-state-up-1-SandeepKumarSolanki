
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const [showModal , setShowModal] = useState(false)
  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <Child 
          setShowModal={setShowModal}
          showModal={showModal}
        />
        
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
