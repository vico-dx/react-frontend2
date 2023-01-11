import React from "react";

function Job(props) {
    const {salary, position, company} = props;
     
        return (
            <div className="work">

        <h2> {props.salary} </h2>
        <h2>{props.position}</h2>
        <h2>{props.company}</h2>

            </div>
        );
    
}
export default Job;

