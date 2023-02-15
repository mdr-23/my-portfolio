const languages = [
    {
        title: 'Spanish',
        level: 'Native',
    },
    {
        title: 'English',
        level: 'B2'
    },
    {
        title: 'German',
        level: 'B1'
    },
]

const languagesMap = languages.map(language => 
    `<div class="mt-3 mb-sm-5"><h4>${language.title}</h4>
    <p class="p-works">Level: ${language.level}</p></div>
    `)

document.getElementById('languages').innerHTML = `${languagesMap}`