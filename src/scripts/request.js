const baseUrl = 'https://api.github.com/users';
const green = "#22966D";
const red = "#C96047";

export const getUserByName = async (user) => {
    const userInfo = await fetch(`${baseUrl}/${user}`, {
        method: 'GET',
    }).then(response => {
        if(response.ok) {
            return response.json()
        } else  {
            throw new Error('Not Found')
        }
    })
    .catch(error => {
        localStorage.removeItem('user, repos');
        location.replace('./src/pages/error.html')
    })
    return userInfo;
}

export const getRepos = async (user) => {
    const repos = await fetch(`${baseUrl}/${user}/repos`, {
        method:"GET",
    }).then(response => {
        if(response.ok) {
            return response.json()
        } else  {
            throw new Error('Not Found')
        }
    })
    .catch(error => {
        localStorage.removeItem('user, repos');
        location.replace('./src/pages/error.html')
    })
    return repos;
   
}
