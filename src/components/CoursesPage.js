import React, {useEffect, useState} from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from 'react-router-dom';
//allows us to call our mock API and return a list of courses
//smart component
function CoursesPage () {
    const [courses,setCourses] = useState([])

    useEffect(()=>{
        getCourses().then((_courses)=> setCourses(_courses))
    },[])

    return(
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">
                Add Course
            </Link>
            <CourseList courses= {courses} />
        </>
    )
}
/* class CoursesPage extends React.Component {

    state = {
        courses: []
    };
    //component MUST be mounted before setting state
    //handles result's promise:
    componentDidMount(){
        getCourses().then(courses => this.setState({ courses: courses }));
    }
    
    render(){
        return <>
            <h2>Courses</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author ID</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.courses.map(course=>{
                        return <tr key={course.id}>
                            <td>{course.title}</td>
                            <td>{course.authorId}</td>
                            <td>{course.category}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    }
}
 */
export default CoursesPage;



/* constructor(props){
        super(props); //this ensures base class' constructor runs first
        this.state = {
            courses: []
        };
    } */

    
    
   /*  
    //want to get list of courses when the component loads.

    

    render() {
        //declares what our comp renders
        return(
            <h2>Courses</h2>
        )
    } */