// Array de dados dos projetos
const projectsData = [
    {
        title: "Memory Game 🍎",
        description: "Um jogo da memória interativo desenvolvido para desafiar a capacidade de memorização dos jogadores. O objetivo do jogo é encontrar pares de cartas idênticas em um tabuleiro.",
        imageUrl: "./assets/projects/memory-game.png",
        skills: ['fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-js'],
        link: "https://memory-game-zeta-ten.vercel.app/"
    },
    {
        title: "MilkMania 🍨",
        description: "Landing page do Milkmania apresenta a loja e seus produtos. Com um design simples e convidativo, destaca a variedade de opções e convida os clientes a conhecerem mais.",
        imageUrl: "./assets/projects/milkmania.png",
        skills: ['fa-brands fa-html5', 'fa-brands fa-css3-alt'],
        link: "https://milkmania.vercel.app/"
    },
];

// Função para criar e adicionar um card
function createProjectCard(project) {
    const boxCards = document.getElementById('box-cards');

    // Cria o elemento do card
    const card = document.createElement('div');
    card.className = 'card-project';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-duration', '2000');

    // Adiciona o conteúdo do card
    card.innerHTML = `
        <div class="dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="card-image">
            <img src="${project.imageUrl}" alt="${project.title}">
        </div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.description}</p>
        <div class="card-skills">
            ${project.skills.map(skill => `<i class="${skill}"></i>`).join('')}
        </div>
        <div class="footer-card">
            <p><i class="fa-solid fa-arrow-up-right-from-square"></i>Acesse o site: <a href="${project.link}" target="_blank">${project.link}</a></p>
        </div>
    `;

    // Adiciona o card ao container
    boxCards.appendChild(card);
}

// Função para adicionar todos os projetos do array
function addAllProjectCards() {
    projectsData.forEach(project => createProjectCard(project));
}

// Chame a função para adicionar os projetos
addAllProjectCards();
