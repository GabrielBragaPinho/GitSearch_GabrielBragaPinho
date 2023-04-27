function handleBackButton(){
    const button = document.querySelector('button');

    button.addEventListener('click', ()=>{
        localStorage.removeItem('user, repos');
        location.replace('../../index.html');
    })
}

handleBackButton()