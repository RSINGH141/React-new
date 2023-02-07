

import React, { useState,useEffect } from "react";
import Course from "./Course";
import allCourse from '../constant/all-course.constant'

const Allcourses= () =>{
   useEffect(()  =>  {

    document.title="All courses";},[]);
   //  const [courses,setCourses]=useState([
   //      {title:"React course", Description:"This is Just Testing"},
   //      {title:" course" ,Description:"This is Just Testing"},
   //      {title:"j course", Description:"This is Just Testing"},
   //   ]); // 
   
   console.log('data', allCourse);
     
     return(
        <div style={{textAlign:'center',border:'1px solid black'}}>
            <h1>This is </h1>
            <p>List of Allcourses</p>
            {
            allCourse.length &&
            allCourse.map((item)=> <Course course={item}/>)
           } 
            
        </div>

     );
};
export default Allcourses;