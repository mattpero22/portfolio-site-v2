import React from "react";


const Education = () => {
    return (
        <div id="education">
            <p className="pageTitle">My Education</p>
            <div className="education_wrapper">
                <img class="school_logo" src="https://seeklogo.com/images/G/general-assembly-logo-82F6D5B9DB-seeklogo.com.png" alt="general assembly school logo" />
                <div className="education_overview">
                    <h2>General Assembly</h2>
                    <h3>Software Engineering Immersive Bootcamp</h3>
                    <h4>Remote, USA<br/> April 2022 - July 2022</h4>
                </div>
                <ul className="education_bullets">
                    <li>400+ hour accelerated pace course on full stack development</li>
                    <li>Highlighted the MERN stack and Django</li>
                    <li>Voted "Best Problem Solver" by classmates in cohort of 75 students</li>
                </ul>
            </div>

            <div className="education_wrapper">
                <img class="school_logo" src="https://www.newpaltz.edu/media/web-assets/logos-images-and-icons/logo_transparent.png" alt="suny new paltz school logo" />
                <div className="education_overview">
                    <h2>SUNY New Paltz</h2>
                    <h3>Bachelor of Science in Mechanical Engineering</h3>
                    <h4>New Paltz, New York<br/> May 2016 - May 2020</h4>
                </div>
                <ul className="education_bullets">
                    <li>Overall GPA : 3.30</li>
                    <li>Academic scholarship recipient</li>
                    <li>4 year NCAA Swim Team member</li>
                    <li>2 year NCAA Swim Team captain</li>
                </ul>

            </div>

        </div>
    )
}

export default Education;