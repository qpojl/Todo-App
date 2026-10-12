const formElement = document.querySelector("#js-todo-form");
const inputElement = document.querySelector("#js-form-input");
formElement.addEventListener("submit",(event) =>{
    event.preventDefault();
    console.log(inputElement.value);
});