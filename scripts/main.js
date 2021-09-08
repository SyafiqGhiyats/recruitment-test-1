import { status, words } from "./words.js";

const button = document.querySelector('#add')
const checklistEl = document.querySelector('.checklist')
function genRandomNumber(max) {
    return Math.ceil(Math.random() * max)
}
button.onclick = (e) => {
    const text = words[genRandomNumber(words.length)]
    const status = status[genRandomNumber(status.length)]

    const item = document.createElement('div')
    item.className = "checklist-item"

    const label = document.createElement('label')
    label.className = "checkbox-container"
    label.innerText = text

    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.className = "checkbox"

    const checkmark = document.createElement('span')
    checkmark.className = "checkmark"

    let colorStatus = "";
    const btnStatus = document.createElement('button')
    switch (status) {
        case "Approved":
            colorStatus = "text-primary"
            break;
        case "In Review":
            colorStatus = "text-danger"
            break;
        default:
            break;
    }
    btnStatus.className = `btn btn-status ${colorStatus}`
    console.log(status, text, colorStatus)
}