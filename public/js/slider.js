let photolist_2 = ["aorus", "gigabyte", "asrock", "huananzi", "msi", "maxsun", "sus", "bigtreetech", "undefined"]


// function scroll_left() {
//     let mother = document.getElementsByClassName("slider-inner")[0]
//     let elements = document.getElementsByClassName("slider-block")
//     let last_element = elements[elements.length - 1]
//     last_element.remove()
//     let new_element = document.createElement("div")
//     let inner_element = document.createElement("img")
//     let new_element_name = photolist_2[photolist_2.indexOf(last_element.id)]
//     inner_element.src = `../img/${new_element_name}.png`
//     new_element.id = new_element_name
//     new_element.className = "slider-block"
//     new_element.appendChild(inner_element)
//     mother.insertBefore(new_element, mother.firstChild)
// }
//
// function scroll_right() {
//     let mother = document.getElementsByClassName("slider-inner")[0]
//     let elements = document.getElementsByClassName("slider-block")
//
//     let first_element = elements[0]
//     first_element.remove()
//     let new_element = document.createElement("div")
//     let inner_element = document.createElement("img")
//     let new_element_name = photolist_2[photolist_2.indexOf(first_element.id)]
//     if (elements.length > 6) {
//         first_element = elements[0]
//         first_element.remove()
//     }
//     inner_element.src = `../img/${new_element_name}.png`
//     new_element.id = new_element_name
//     new_element.className = "slider-block"
//     new_element.appendChild(inner_element)
//     mother.appendChild(new_element)
// }
function hide(Child) {
    Child.classList.add("_notactive")
    Child.classList.remove("_active")
}

function show(Child) {
    Child.classList.remove("_notactive")
    Child.classList.add("_active")
}

function scroll_left() {
    let mother = document.getElementsByClassName("slider-inner")[0]
    let elements = document.getElementsByClassName("slider-block _active")
    let elements_notactive = document.getElementsByClassName("slider-block _notactive")
    let last_element = elements[elements.length - 1]
    hide(last_element)
    let first_notactive_element = elements_notactive[elements_notactive.length - 1]
    show(first_notactive_element)
    mother.insertBefore(first_notactive_element, mother.firstChild)
}

function scroll_right() {
    let mother = document.getElementsByClassName("slider-inner")[0]
    let elements = document.getElementsByClassName("slider-block _active")
    let elements_notactive = document.getElementsByClassName("slider-block _notactive")
    let first_element = elements[0]
    mother.insertBefore(first_element, elements_notactive[0])
    hide(first_element)
    let first_notactive_element = elements_notactive[elements_notactive.length - 1]
    show(first_notactive_element)
    mother.insertBefore(first_notactive_element, elements_notactive[0])
}