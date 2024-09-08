const contentArea =  document.querySelector("#contentArea");

console.log(contentArea);

const originalP = contentArea.querySelector("p");

console.log(originalP);

const clonedP = originalP.cloneNode(true);

contentArea.append(clonedP);

clonedP.textContent = "texto clonado";

const list =  document.querySelector("#listArea");

console.log(list);

const itemReplace = list.children[2];

console.log(itemReplace);

itemReplace.replaceWith(clonedP);