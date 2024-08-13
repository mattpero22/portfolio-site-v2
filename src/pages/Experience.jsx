import React from "react";


const Experience = () => {
    return (
        <div id="experience">
            <p className="pageTitle">Experience</p>
            <div className="exp_wrapper">
                <div className="logo_wrapper">
                    <img class="logo" src="https://www.cpscentral.com/wp-content/uploads/2016/12/cps-logo-dark.png" alt="consumer priority service logo" />
                    <div className="exp_overview">
                        <h2>Consumer Priority Service</h2>
                        <h3>Full Stack Developer</h3>
                        <h4>Brooklyn, New York<br /> March 2023 - July 2024</h4>
                    </div>
                </div>

                <ul className="exp_bullets">
                    <li><a href="https://www.cpscentral.com/" target="_blank">Consumer Priority Service</a> is a family-owned warranty company founded in Brooklyn. During my tenure, I maintained and improved applications built with ASP.NET, generated and optimized SQL queries for statistics pages and data reports, and also oversaw custom JS/CSS/HTML requests for our official Shopify App. Over this period, my debugging skills and cooperation on group projects with version control using Git grew immensely.</li>
                </ul>
            </div>

            <div className="exp_wrapper">
                <div className="logo_wrapper">
                    <img class="logo" src="https://i.imgur.com/Of8y0Xy.png" alt="ametek rotron logo" />
                    <div className="exp_overview">
                        <h2>AMETEK Rotron</h2>
                        <h3>Test Engineer</h3>
                        <h4>Woodstock, New York<br /> December 2020 - March 2022</h4>
                    </div>
                </div>

                <ul className="exp_bullets">
                    <li><a href="https://www.rotron.com/" target="_blank">AMETEK</a> is an aerospace and defense company that specializes in high powered cooling fans for military and commercial vehicles. While working as a Test Engineer, I worked to modernize the Aerolab which measured the air moving capacity of our products. I successfully built a prototype control system to collect environmental data and generate a report while remaining within ASTM accuracy guidelines using an Arduino and serial data communication. I also was able to parse legacy data into excel spreadsheets using Python, pandas, and NumPy, to enable my coworkers to perform analysis without the use of an outdated, in-house software that was incompatible with modern Windows OS.</li>
                </ul>

            </div>
        </div>
    )
}

export default Experience;