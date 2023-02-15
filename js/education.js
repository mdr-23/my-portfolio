const education=[
    {
        year: "2023 (In progress)",
        title: "IT Automation with Python",
        institute: "Coursera - Inco (DACH)",
        site: "Remote - Germany",
        modalId: "staticBackdrop",
        modalButton: `#staticBackdrop`,
        details: 
        `<p class='p-modal'>This six-course certificate, developed by Google, is designed to provide IT professionals with in-demand skills 
        -- including Python, Git, and IT automation -- that can help you advance your career. Knowing how to write code to 
        solve problems and automate solutions is a crucial skill for anybody in IT. Python, in particular, is now the most 
        in-demand programming language by employers. This program builds on your IT foundations to help you take your career 
        to the next level. It’s designed to teach you how to program with Python and how to use Python to automate common 
        system administration tasks. You'll also learn to use Git and GitHub, troubleshoot and debug complex problems, and 
        apply automation at scale by using configuration management and the Cloud. This certificate can be completed in about 
        6 months and is designed to prepare you for a variety of roles in IT, like more advanced IT Support Specialist or Junior 
        Systems Administrator positions. Upon completion, you can share your information with potential employers, like Walmart, 
        Sprint, Hulu, Bank of America, Google (of course!), and more. We recommend that you have Python installed on your machine. 
        For some courses, you’ll need a computer where you can install Git or ask your administrator to install it for you. If 
        you’d like to learn the fundamentals of IT support, check out the beginner level Google IT Support Professional Certificate. 
        Check out all Google Career Certificates here."</p>
        <p class='p-modal'>Skills:</p>
        <ul class='modal-list'>
            <li>Python</li>
            <li>Git</li>
            <li>IT automation</li>
        </ul>`,
        certificate: ""
    },
    {
        year: "2022 - 2023 (In progress)",
        title: "Professional Full Stack Developer",
        institute: "UTN (National Technological University)",
        site: "Remote - Argentina",
        modalId: "staticBackdrop1",
        modalButton: `#staticBackdrop1`,
        details:         
        `<p class='p-modal'>The general objective is to create web applications using Angular based on the MVC design pattern 
        applying the standards that this requires. Apply and adapt the knowledge in web programming to the development of SPA 
        applications, exploiting the advantages offered by React js in terms of data flow. Integrate both platforms to the backend 
        through a rest api developed with Node js.</p>
        <p class='p-modal'>Modules:</p>
        <ol class='modal-ol'>
            <li>Development in React JS</li>
            <li>Configuration of the environment and components</li>
            <li>Virtual DOM. Routes. Firebase</li>
            <li>Development in Angular</li>
            <li>Development in Node JS</li>
        </ol>`,
        certificate: ""
    },
    {
        year: "2021",
        title: "Python Programming: From basics to advanced level",
        institute: "Udemy",
        site: "Remote",
        modalId: "staticBackdrop2",
        modalButton: `#staticBackdrop2`,
        details:
        `
        <p class='p-modal'>Objectives:</p>
        <ul class='modal-list'>
            <li>Introduction to Python and Python 3</li>
            <li>Understand the basics: Data types, Loops, Conditional statements, Functions and Modules</li>
            <li>Learn object oriented programming in Python</li>
            <li>Know how to Read and Parse JSON and XML files</li>
            <li>Learn how to make your own web-scraping tool using Python</li>
        </ul>`,
        certificate: ""
    },
    {
        year: "2021",
        title: "Responsive Web Design",
        institute: "freeCodeCamp",
        site: "Remote",
        modalId: "staticBackdrop3",
        modalButton: `#staticBackdrop3`,
        details:
        `
        <p class='p-modal'>In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: 
        HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.
        First, you'll build a cat photo app to learn the basics of HTML and CSS. Later, you'll learn modern techniques like CSS variables 
        by building a penguin, and best practices for accessibility by building a quiz site.
        Finally, you'll learn how to make webpages that respond to different screen sizes by building a photo gallery with Flexbox, and a 
        magazine article layout with CSS Grid.</p>
        `,
        certificate: ""
    },
    {
        year: "2019",
        title: "Frontend Developer",
        institute: "Coderhouse",
        site: "Buenos Aires, Argentina",
        modalId: "staticBackdrop4",
        modalButton: `#staticBackdrop4`,
        details:
        `
        <p class='p-modal'>The main objective of this Front End career is to learn how to create a website and
        immerse yourself in the best practices of web design,
        working with HTML and CSS. In addition, gain knowledge to program
        with Javascript and React Js, which will allow you to make sites more
        complex, dynamic and scalable. At the end of the race you will be able to
        Develop yourself as a Front End Developer.</p>
        <p class='p-modal'>Modules:</p>
        <ol class='modal-ol'>
            <li>HTML, CSS, Sass, Bootstrap und Git</li>
            <li>JavaScript und jQuery</li>
            <li>React</li>
        </ol>`,
        certificate: ""
    },
    {
        year: "2017 - 2023",
        title: "Bachelor in Anthropology",
        institute: "University of Buenos Aires",
        site: "Buenos Aires, Argentina",
        modalId: "staticBackdrop5",
        modalButton: `#staticBackdrop5`,
        details:
        `
        <p class='p-modal'>Orientation: Sociocultural Anthropology</p>
        <p class='p-modal'>Average: 7.60</p>
        <p class='p-modal'>College seminares:</p>
        <ul class='modal-list'>
            <li>Anthropology of Death. 2019. University of Buenos Aires, Argentina.</li>
            <li>Environment, culture and power: water as socio-anthropological knowledge. 2019. University of
            Buenos Aires, Argentina.</li>
            <li>Practice of Devotion and Sacred Symbols: Religion and Other Cults in Anthropological Key. 2019.
            University of Buenos Aires, Argentina.</li>
            <li>Annual research seminar. 2021. University of Buenos Aires, Argentina.</li>
        </ul>`,
        certificate: ""
    },
]

const educationMap = education.map(course => 
    `<div class="mt-3 mb-sm-5 p-2"><h3>${course.year}</h3>
    <h4>${course.title}</h4>
    <p class="p-works"><i class="fas fa-university"></i></i> ${course.institute}</p>
    <p class="p-works"><i class="fas fa-map-marker-alt"></i><span class="mx-2">${course.site}</span></p>
    <p class="p-works"><button class='btn-details' data-bs-toggle="modal" data-bs-target="${course.modalButton}">Details</button></p>
    <div class="modal fade" id=${course.modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title" id="staticBackdropLabel">${course.title}</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ${course.details}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-modal" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    `)

document.getElementById('education').innerHTML = `${educationMap}`