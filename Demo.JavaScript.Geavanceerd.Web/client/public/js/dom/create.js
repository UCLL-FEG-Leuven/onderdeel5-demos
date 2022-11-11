const createParagraphButton = document.getElementById("createParagraph");
const sectionToFillWithParagraphs = document.getElementById("sectionToFillWithParagraphs");

createParagraphButton.addEventListener("click", () => {
    let para = document.createElement("p");
    let node = document.createTextNode("Deze paragraaf werd aangemaakt op " + new Date().toLocaleTimeString());
    para.appendChild(node);    
    sectionToFillWithParagraphs.appendChild(para);
});
