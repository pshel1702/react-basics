//simple job: which page to render.
// it will look at path name in the url to decide which component to render

import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch } from "react-router";
import NotFoundPage from "./NotFoundPage";
import ManagedCoursePage from "./ManagedCoursePage";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


function App(){
    return (
        <div className="containerFluid">
            <ToastContainer autoclose={3000} hideProgressBar />
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/about" component={AboutPage} />
                <Route path='/course/:slug' component={ManagedCoursePage} />
                <Route path='/course' component={ManagedCoursePage} />
                <Route component= {NotFoundPage} />
            </Switch>
        </div>
    )
}

export default App;