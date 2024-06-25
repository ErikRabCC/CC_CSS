const images = [
    {
        id: 0,
        title: "Good old days",
        url: "https://picsum.photos/id/288/288/300",
        description: "Hmm... cload, hmm..."
    },
    {
        id: 1,
        title: "Weekend house",
        url: "https://picsum.photos/id/289/288/300",
        description: "That's a lot of tree..."
    },
    {
        id: 2,
        title: "Welcome to my home",
        url: "https://picsum.photos/id/290/288/300",
        description: "I would live here for sure."
    },
    {
        id: 3,
        title: "70% of Sweden",
        url: "https://picsum.photos/id/291/288/300",
        description: "Looks like it is going to rain."
    },
    {
        id: 4,
        title: "Shrek",
        url: "https://picsum.photos/id/292/288/300",
        description: "Ogres are like onions."
    },
    {
        id: 5,
        title: "Scandinavian lake",
        url: "https://picsum.photos/id/293/288/300",
        description: "Soo... who is up for some fishing?"
    },
    {
        id: 6,
        title: "Balaton???",
        url: "https://picsum.photos/id/295/288/300",
        description: "The water is soo clean, this surely isn't the Balaton."
    }
]

const favImages = []

function imageHTML(image) {
    return `
        <div class="col-xxl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
            <div class="card" style="width: 18rem;">
                <img src="${image.url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${image.title}</h5>
                    <p class="card-text">${image.description}</p>
                    <a btnType="favButton" id="${image.id}" href="#" class="btn btn-primary">Add to favorite</a>
                </div>
            </div>
        </div>
    `
}

const imageRow = document.querySelector("#imagesRow")
imageRow.innerHTML = images.map(image => imageHTML(image)).join("")

window.addEventListener("click", (e) => {
    if (e.target.id === "homeLink1" || e.target.id === "homeLink2") {
        imageRow.innerHTML = images.map(image => imageHTML(image)).join("")
    }
    else if (e.target.id === "filterBtn") {
        const currentFilter = document.querySelector("#filterInput").value
        imageRow.innerHTML = images.filter(image => image.title.includes(currentFilter) || image.description.includes(currentFilter))
        .map(image => imageHTML(image))
        .join("")
    }
    else if (e.target.id === "favoritesLink") {
        imageRow.innerHTML = favImages.map(imageId => imageHTML(images[parseInt(imageId)]))
        .join("")
    }
    else if (e.target.getAttribute("btnType") === "favButton") {
        if (!favImages.includes(e.target.id)) {
            favImages.push(e.target.id)
        }
    }
})

