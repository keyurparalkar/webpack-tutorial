import "./style.css";
import SvgImage from "./image.svg";
function countLenLog(content){
    console.log("LOG LEN: ", content.length);
}

countLenLog("Second log");

function DOMCreation() {
    const element = document.createElement("div");
    element.innerHTML = "Hello this is div";

    const img = new Image();
    img.src = SvgImage;
    element.appendChild(img);
    for(let i of [1,2,3]){
        console.log("VALUE = ", i);
    }
    return element;
}

document.body.appendChild(DOMCreation());