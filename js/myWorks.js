const myWorks = [
    {
        company: "One to One Trade Consulting",
        title: "Website - Admin Crud",
        technologies: "HTML, CSS, JavaScript, Firebase, Bootstrap",
        githubUrl: "``",
        website: "https://inicio-logueo-one.web.app/calculadora.html",
        details: "``",
    },
    {
        company: "National Technological University (UTN)",
        title: "Module React: Final Project",
        technologies: "React, Firebase, Bootstrap",
        githubUrl: "``",
        website: false,
        details: "``",
    },
    {
        company: "Romar Group SRL",
        title: "Website - JS Calculator",
        technologies: "HTML, CSS, JavaScript, Bootstrap",
        githubUrl: "``",
        website: "https://romargroup.com.ar/index.php#nosotros",
        details: "``",
    },
    {
        company: "Cereals Online SRL",
        title: "Landing Page",
        technologies: "HTML, CSS, JavaScript, Bootstrap, SVG",
        githubUrl: "https://github.com/mdr-23/cereals-landing",
        website: "https://mdr-23.github.io/cereals-landing/",
        details: "``",
    },
    {
        company: "National Technological University (UTN)",
        title: "Module React: useState excercise",
        technologies: "React, Bootstrap",
        githubUrl: "``",
        website: false,
        details: "``",
    },
    {
        company: "National Technological University (UTN)",
        title: "JS Calculator",
        technologies: "HTML, CSS, JavaScript",
        githubUrl: "https://github.com/mdr-23/calculatorUTN",
        website: "https://mdr-23.github.io/calculatorUTN/",
        details: "``",
    },
    {
        company: "Coderhouse",
        title: "JavaScript: Final Project",
        technologies: "HTML, CSS, JavaScript",
        githubUrl: "https://github.com/mdr-23/ProyectoFinalJS-Coderhouse",
        website: "https://mdr-23.github.io/ProyectoFinalJS-Coderhouse/",
        details: "``",
    },
    {
        company: "Udemy",
        title: "Bank Account simulator",
        technologies: "Python",
        githubUrl: "https://github.com/mdr-23/bank-accounts",
        website: false,
        details: "``",
    },
    {
        company: "Udemy",
        title: "Digital clock",
        technologies: "Python",
        githubUrl: "https://github.com/mdr-23/digital-clock",
        website: false,
        details: "``",
    },
    {
        company: "Coderhouse",
        title: "Web Development: Final Project",
        technologies: "HTML, CSS, Saas, Bootstrap",
        githubUrl: "https://github.com/mdr-23/Proyecto-Coder",
        website: "https://mdr-23.github.io/Proyecto-Coder/index.html",
        details: "``",
    },
    {
        company: "National Technological University (UTN)",
        title: "Module React: API RESTful challenge",
        technologies: "React, Bootstrap, API RESTful",
        githubUrl: "https://github.com/mdr-23/react-apiweather",
        website: false,
        details: "``",
    },
]

function showButton(website){
    if(website){
        return document.innerHTML = `<a href=${website} target="_blank" class="card-link">Website</a>`
    }else{
        return ""
    }
}

const myWorksMap = myWorks.map(myWork=>
    `<div class="card mt-5 mx-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${myWork.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${myWork.company}</h6>
            <p class="card-text">${myWork.technologies}</p>
            <a href=${myWork.githubUrl} target="_blank" class="card-link">GitHub</a>
            <span id="link-to-website" class="card-link">${showButton(myWork.website)}</span>
        </div>
    </div>`)

document.getElementById("myWorks").innerHTML = `${myWorksMap}`