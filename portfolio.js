const username = 'fannybillefalt';
const baseURL = ('https://api.github.com/users/');

async function loadPortfolio(){
    try {
        const container = document.getElementById('github-projects');
        container.innerHTML = '<p>Laddar projekt...</p>';
        
        const response = await fetch (`${baseURL}${username}/repos`);
        const repos = await response.json();
        container.innerHTML = '';

        repos.sort((a,b)=> new Date(b.created_at) - new Date(a.created_at));

        repos.forEach(repo => {

            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
            <h4>${repo.name}</h4>
            <p>${repo.description || 'Ingen beskrivning'}</p>
            <a href="${repo.html_url}" target="_blank" class="github-link">Se på GitHub</a>`;

            container.appendChild(card);
        });
    } catch(error) {
        console.log('Misslyckades att ladda projekt:', error);
        document.getElementById('github-projects').innerHTML = '<p>Misslyckades att ladda projekt</p>';
    }
}

loadPortfolio();