const newPElement =  document.createElement("p");

newPElement.textContent = "creado con createElement";

const contentArea =  document.getElementById("contentArea");

contentArea.append(newPElement);

const newItem = document.createElement("li");

newItem.textContent = "item 5";

const listArea =  document.getElementById("listArea");

listArea.prepend(newItem);

const firstItem =  document.querySelector("li");

firstItem.remove();

const list = document.querySelector("ul");

list.removeChild(list.firstElementChild);