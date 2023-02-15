const works=[
    {
        year: "2022 - Present",
        title: "Technical support",
        company: "Sitel - Project: PlayStation Spain",
        site: "Remote - Germany"
    },
    {
        year: "2020 - Present",
        title: "Web Developer",
        company: "Freelance",
        site: "Argentina - Germany - Spain"
    },
    {
        year: "2014 - 2021",
        title: "Administrative - Frontend Developer",
        company: "University of Buenos Aires",
        site: "Buenos Aires, Argentina"
    },
    {
        year: "2013 - 2014",
        title: "Register taker - Administrative",
        company: "National Technological University",
        site: "Buenos Aires, Argentina"
    },
    {
        year: "2012 - 2013",
        title: "Cashier - Sales",
        company: "Cúspide Libros Bookstore",
        site: "Buenos Aires, Argentina"
    },
    {
        year: "2011 - 2012",
        title: "Customer service",
        company: "DDM International Agency - Project: Columbia Bank",
        site: "Buenos Aires, Argentina"
    },
]


const workExperience = works.map(work => 
    `<div class="mt-3 mb-sm-5 p-2"><h3>${work.year}</h3>
    <h4>${work.title}</h4>
    <p class="p-works"><i class="fas fa-building"></i> ${work.company}</p>
    <p class="p-works"><i class="fas fa-map-marker-alt"></i><span class="mx-2">${work.site}</span></p></div>
    `)

document.getElementById('jobs').innerHTML = `${workExperience}`