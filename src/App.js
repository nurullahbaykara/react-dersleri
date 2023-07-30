
import React, { useEffect } from "react";

function App() {

  useEffect(()=> {
    if(process.env.NODE_ENV === 'production') {
      // analytici bilgilendir
    }
  }, [])

  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
     <p>
      {
        process.env.REACT_APP_API_URL
      }
     </p>
    </div>
  );
}

export default App; 
