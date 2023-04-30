import {goto} from './redirect.js';
import { saveUser } from './saveUser.js';
const formRegister = document.querySelector(".form-register");



formRegister.addEventListener("submit", (e) =>{
    const name = document.querySelector(".inputName").value;
    const lastName = document.querySelector(".inputLastName").value;
    e.preventDefault();
    const target = "/rooms/introducao.html";
    saveUser(name, lastName);
    goto(target);
})
