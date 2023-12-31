
import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
    BrowserRouter,
    Routes,
    Route
    // Link
  } from "react-router-dom";

  const App=()=> {

  const apiKey=process.env.REACT_APP_NEWS_API
  // state={
  //   progress:0
  // }

  const [progress, setProgress] = useState(0)

// setProgress=(progress)=>{
//   .setState({progress:progress})
// }

  
    return (
      <div>
        <BrowserRouter>
       <Navbar/>
       <LoadingBar
       height={3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
       {/* <News setProgress={setProgress} pageSize={3} country="in" Category="science"/> */}
       <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={3} country="in" category="general"/>}/>
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={3} country="in" category="business"/>}/>
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={3} country="in" category="entertainment"/>}/>
        <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={3} country="in" category="general"/>}/>
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={3} country="in" category="health"/>}/>
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={3} country="in" category="science"/>}/>
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={3} country="in" category="sports"/>}/>
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={3} country="in" category="technology"/>}/>
        
       </Routes>
       </BrowserRouter>
      </div>
    )
  }

  export default App;

