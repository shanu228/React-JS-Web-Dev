import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  let courses = props.courses;
  // console.log("courses");
  // console.log(courses);
  let allCourses = [];

  const [likedCourses, setLikedCourses] = useState([]);

  let category = props.category;

  // returns you a array of all courses received from the api response
  const getCourses = () => {
    if (category === "All") {
      console.log("Printing Courses");
      console.log(Array.isArray(courses));
      console.log(courses);
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });

      console.log("all courses array ");
      console.log(allCourses);

      return allCourses;
    } else {
      // main sirf specific category ka data array pass krunga
      return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
