/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "blue"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likes = document.querySelector("#profile .likes")
likes.textContent = `${traveler.likes} Likes`


/***** Deliverable 4 *****/
function renderAnimalSightingPost (animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightinObject) {
    renderAnimalSightingPost(animalSightinObject)
})

/***** Deliverable 5 *****/
const animalToRemove = document.querySelector("[data-id='3'")
animalToRemove.remove()

/***** End of Starter Code *****/
/************************** EVENTS JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/
header.addEventListener('click', function(title){
    // console.log(title)
    if (title.target.style.color === "purple") {
        title.target.style.color = "pink"
    } else {
        title.target.style.color = "purple"
    }
})


/***** Deliverable 2 *****/

const likeButton = document.querySelector('#profile button.like-button')
// const likes = document.querySelector("#profile > p")

likeButton.addEventListener('click', function(likes){
    const likeCounter = document.querySelector("#profile > p")
    console.log(likes)
    traveler.likes+=1
        // likes.path[1].childNodes[7].textContent + 1
    likeCounter.innerHTML = `${traveler.likes} Likes`
})


/***** Deliverable 3 *****/

const newForm = document.querySelector('form#new-animal-sighting-form')
newForm.addEventListener('submit', function(event){
    console.log('form submitted', event.target)
    event.preventDefault()
    
    const speciesInput = event.target.species.value
    const videoInput = event.target.link.value
    const photoInput = event.target.photo.value
    const decsInput = event.target.description.value

    const newObject = {
        species: speciesInput,
        video: videoInput,
        photo: photoInput,
        description: decsInput
    }
    renderAnimalSightingPost(newObject)
})

