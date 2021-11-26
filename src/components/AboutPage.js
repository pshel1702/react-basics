import React from "react";

class AboutPage extends React.Component{
    //class comps have one reqd method: render
    render(){
        return(
            <>
                <h2>About</h2>
                <p>This app uses React</p>
            </>
        ) 
    }
}

//can use React Fragments, which allows to wrap adjacent elements

//just another way to render, but function comps [homepage] are recommended

export default AboutPage