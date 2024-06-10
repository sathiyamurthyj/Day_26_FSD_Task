

const CourseCard = (props) => {

    return (
        <>
        <div className="card h-100 w-20 text-center ">
            <img src={props.course.cImageUrl} className="card-img-top h-100" alt={props.course.cname} />
            <div className="card-body">
                <p className="card-text fs-6">Course Name: {props.course.cname}</p>
                <div className="row">
                    <div className="col">Language: {props.course.instructionLanguage}</div>
                    <div className="col">Enrolled: {props.course.enrolled}</div>
                </div>
            </div>
        </div>

        </>
    )
}

export default CourseCard;