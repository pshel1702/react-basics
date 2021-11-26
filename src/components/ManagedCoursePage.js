import React, {useState} from "react";
import CourseForm from "./CourseForm";
import * as courseApi from '../api/courseApi'
import { toast } from 'react-toastify';

const ManagedCoursePage = (props) => {
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title:"",
        authorId: null,
        category: ""
    });

    function handleChange({target}){
        setCourse({...course, [target.name]: target.value});
    }

    function handleSubmit(evt){
        evt.preventDefault();
        courseApi.saveCourse(course).then(()=>{
            props.history.push("/courses")
            toast.success("Courses saved.")
        });

    }
    return (
        <>
            <h2>Managed Courses</h2>
            <CourseForm 
                course = {course} 
                onChange={handleChange} 
                onSubmit={handleSubmit}
            />
        </>
    )
}

export default ManagedCoursePage;