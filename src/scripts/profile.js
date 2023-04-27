import {getUserByName, getRepos} from "./request.js";

export function renderUserCard() {
    const user = JSON.parse(localStorage.getItem('user'));
   
    const header = document.querySelector('span');
    header.innerHTML='';
    
    const img = document.createElement('img');
    img.src = user.avatar_url;
    
    const name = document.createElement('h2');
    name.innerText = user.name;

    header.append(img, name);
}

export function renderRepos(array) {
    const repos = JSON.parse(localStorage.getItem('repos'));
    const container = document.querySelector('ul');

    container.innerHTML='';

    repos.forEach((repo) => {
        const li = document.createElement('li');
        
        const h3 = document.createElement('h3');
        h3.innerText = repo.name;

        const p = document.createElement('p');
        p.innerHTML = repo.description;

        const button = document.createElement('button');
        button.innerHTML = 'Repositório';
        button.className = 'li__button';
        button.addEventListener('click', (event)=> {
            window.open(repo.html_url);
        })

        container.append(li)
        li.append(h3, p, button)
    });
}

export function handleBackButton () {
    const button = document.querySelector('.back__button');
console.log(button)
    button.addEventListener('click', ()=>{
        localStorage.removeItem('user, repos');
        location.replace('../../index.html')
    })
}

handleBackButton()
renderRepos()
renderUserCard()