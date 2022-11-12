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