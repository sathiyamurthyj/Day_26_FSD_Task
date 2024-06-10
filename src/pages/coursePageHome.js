import CourseCard from "../components/courseCard";
import data from "../data";
const CoursePageHome = () => {
    let allCourses = [];
    data.map((field) => (
        allCourses = [...allCourses,...field.courses]
    ))
    console.log(allCourses)
    return (
        <>
            <div className="container-fluid ">
                <div className="row g-2 mb-3 justify-content-center">
                    {allCourses.map((course, index) => (
                        <div className="col-sm-6 col-md-4" key={index}><CourseCard course={course}/></div>
                    ))}                    
                </div>
            </div>
        </>
    )
}

export default CoursePageHome;