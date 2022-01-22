import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import AppHeader from "../appHeader/AppHeader";
import ComicsPage from "../pages/ComicsPage";
import MainPage from "../pages/MainPages";
import Page404 from "../pages/404";
import SingleComicPage from '../pages/SingleComicPage'
import SingleForm from "../pages/singleForm";





const App = () => {
 
    return (
      <Router>
          <div className="app">
            <AppHeader/>
              <main>
                <Routes>
                 
                  <Route exact path='/' element={<MainPage/>}/>

                  <Route exact path='/comics' element={<ComicsPage/>}/>

                  <Route exact path='/comics/:comicId' element={<SingleComicPage/>}/>

                  <Route exact path='/characters/:comicId' element={<SingleForm/>}/>


                  <Route path='*' element={<Page404/>}/>
                     
                </Routes>   
            </main>
        </div> 
      </Router>
    )
    
}

export default App;
