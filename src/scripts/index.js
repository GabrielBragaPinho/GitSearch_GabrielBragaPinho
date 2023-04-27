import { getUserByName, getRepos } from "./request.js";
const brand = "#c2255c";

export const handleInput = () => {
    const input = document.querySelector('input');
    const button = document.querySelector('.search__button');
    let count = 0;
    let newUser = '';

    button.addEventListener('click', async (event)=>{
        if(input.value===''){
            toast("Insira o usuário novamente", brand)
        }
        else {
            newUser = input.value;

            const user = await getUserByName(newUser);
            const repos = await getRepos(newUser);

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('repos', JSON.stringify(repos));
            location.replace('/src/pages/profile.html');
        }
    })
}

export function toast(message, color) {
    const body = document.querySelector("body");
    const container = document.createElement("div");
    const text = document.createElement("p");
  
    container.classList.add("toast__container", "toast__add");
    container.style.backgroundColor = color;
  
    text.innerText = message;
  
    container.appendChild(text);
  
    body.appendChild(container);
  
    setTimeout(() => {
      container.classList.add("toast__remove");
    }, 3000);
  
    setTimeout(() => {
      body.removeChild(container);
    }, 3000);
  }

handleInput()