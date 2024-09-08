const container = document.querySelector(".container");

const button = document.querySelector("button");

container.addEventListener("mouseover", () => {
    container.style.backgroundColor = "green";
});

container.addEventListener("mouseout", () => {
    container.style.backgroundColor = "blue";
});

const buttonClickCallback = () => {
    alert("click boton");
};

button.addEventListener("click", buttonClickCallback);

setTimeout(() => {

    button.removeEventListener("click", buttonClickCallback);

},2000);

const buttonlicked = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.textContent);
};

button.addEventListener("click",buttonlicked);

