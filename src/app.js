import {element} from "./view/html-util.js"
export class App{
    mount(){
        const formElement = document.querySelector("#js-todo-form");
        const inputElement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoListElement = element`<ul class="list-group bg-light border-dark-subtle"></ul>`;
        formElement.addEventListener("submit",(event) =>{
            event.preventDefault();
            const todoItemElement = element`<li class="list-group-item bg-light border-dark-subtle">${inputElement.value}</li>`;
            todoListElement.appendChild(todoItemElement);
            containerElement.innerHTML = "";
            containerElement.appendChild(todoListElement);
            inputElement.value = "";


        });
    }
}


//入力されたhtml文字列をhtml要素に変換する。
//↓
//html