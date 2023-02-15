const hobbies = [
    {
        title: '<i class="fas fa-futbol"></i> Football',
    },
    {
        title: '<i class="fas fa-guitar"></i> Guitar',
    },
    {
        title: '<i class="fas fa-music"></i> Musical composition',
    },
    {
        title: '<i class="fas fa-book"></i> Read',
    },
    {
        title: '<i class="fa-solid fa-feather"></i> Write',
    },
    {
        title: '<i class="fas fa-film"></i> Movies and Series',
    },
    {
        title: '<i class="fas fa-gamepad"></i> Videogames',
    },
    {
        title: '<i class="fas fa-plane"></i> Travel - Walk in nature',
    },
    {
        title: '<i class="fa-solid fa-table-tennis-paddle-ball"></i> Tennis, paddle and table tennis',
    },
]

const hobbiesMap = hobbies.map(language => 
    `
     <p class="p-hobbies mt-2">${language.title}</p>
    `)

document.getElementById('hobbies').innerHTML = `${hobbiesMap}`