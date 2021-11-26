import React from 'react';
import { Link } from 'react-router-dom';

//defines markup

function CourseList(props){
    //parent component can decide what arguments to pass in
    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author ID</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {props.courses.map(course=>{
                        return <tr key={course.id}>
                            <td><Link to={"/course/" + course.slug}>{course.title}</Link></td>
                            <td>{course.authorId}</td>
                            <td>{course.category}</td>
                        </tr>
                    })}
                </tbody>
            </table>

        </>
    )
}

export default CourseList; 