// Adiciona um listener para os ícones das habilidades
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os ícones dentro de '.box-skills' e o elemento de informações
    const icons = document.querySelectorAll('.box-skills > div');
    const info = document.getElementById('skill-info');

    // Adiciona um evento de clique a cada ícone
    icons.forEach(icon => {
        icon.addEventListener('click', function () {
            // Remove a classe 'active' de todos os ícones
            icons.forEach(i => i.classList.remove('active'));
            // Adiciona a classe 'active' ao ícone clicado
            this.classList.add('active');
            // Atualiza o texto das informações com o valor do atributo 'data-info' do ícone clicado
            info.textContent = this.getAttribute('data-info');
        });
    });
});

// Função para carregar mais projetos ao clicar no botão 'Load More'
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão de carregar mais e todos os projetos
    const loadMoreButton = document.getElementById('btn-load-more');
    const allProjects = Array.from(document.querySelectorAll('.card-project'));
    const boxCards = document.getElementById('box-cards');
    const initialProjectsToShow = 3; // Quantidade inicial de projetos a serem exibidos
    const projectsToShow = 3; // Quantidade de projetos a serem exibidos a cada clique

    let currentProjectIndex = initialProjectsToShow;

    // Inicializa a exibição dos projetos
    function initializeProjects() {
        allProjects.forEach((project, index) => {
            if (index < initialProjectsToShow) {
                project.classList.remove('hidden'); // Mostra projetos iniciais
            } else {
                project.classList.add('hidden'); // Esconde projetos adicionais
            }
        });

        // Oculta o botão se houver menos ou igual projetos que o inicial
        if (allProjects.length <= initialProjectsToShow) {
            loadMoreButton.style.display = 'none';
        }
    }

    // Atualiza a exibição de projetos ao clicar no botão 'Load More'
    function updateProjectDisplay() {
        const hiddenProjects = Array.from(document.querySelectorAll('.card-project.hidden'));

        // Seleciona os próximos projetos a serem exibidos
        const projectsToShowNow = hiddenProjects.slice(0, projectsToShow);
        projectsToShowNow.forEach(project => {
            project.classList.remove('hidden');
        });

        // Atualiza o índice dos projetos atuais
        currentProjectIndex += projectsToShow;

        // Oculta o botão se não houver mais projetos para mostrar
        if (currentProjectIndex >= allProjects.length) {
            loadMoreButton.style.display = 'none';
        }

        // Ajusta o alinhamento dos projetos no container
        const visibleProjects = boxCards.querySelectorAll('.card-project:not(.hidden)');
        if (visibleProjects.length <= 2) {
            boxCards.classList.add('center');
        } else {
            boxCards.classList.remove('center');
        }
    }

    initializeProjects(); // Inicializa a exibição dos projetos
    loadMoreButton.addEventListener('click', updateProjectDisplay); // Adiciona o evento de clique ao botão
});

// Exibe o botão de voltar ao topo quando o usuário rola para baixo
window.onscroll = function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block"; // Mostra o botão
    } else {
        backToTopButton.style.display = "none"; // Oculta o botão
    }
};

// Adiciona um evento de clique ao botão de voltar ao topo para rolar suavemente para o topo
document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Função para calcular a idade com base na data de nascimento
function calculateAge(dateBirth) {
    const today = new Date(); // Data atual
    const birth = new Date(dateBirth); // Data de nascimento
    let age = today.getFullYear() - birth.getFullYear(); // Calcula a idade com base no ano
    const month = today.getMonth() - birth.getMonth(); // Calcula a diferença de meses

    // Ajusta a idade se o mês ou dia de nascimento ainda não ocorreram este ano
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

// Função para substituir o span pela idade
function updateAge() {
    const dateBirth = '2004-09-05'; // Data de nascimento
    const ageElement = document.getElementById('age'); // Seleciona o elemento com o ID 'age'
    ageElement.textContent = calculateAge(dateBirth); // Atualiza o conteúdo do elemento com a idade calculada
}

updateAge(); // Chama a função para atualizar a idade imediatamente

// Configurações do menu

// Abre o menu quando o botão com ID 'btn-open' é clicado
document.getElementById('btn-open').addEventListener('click', () => {
    document.getElementById('menu-mobile').classList.add('open-menu'); // Adiciona a classe 'open-menu' ao elemento com ID 'menu-mobile'
});

// Fecha o menu quando o botão com ID 'btn-close' é clicado
document.getElementById('btn-close').addEventListener('click', () => {
    document.getElementById('menu-mobile').classList.remove('open-menu'); // Remove a classe 'open-menu' do elemento com ID 'menu-mobile'
});

// Fecha o menu quando o overlay é clicado
document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('menu-mobile').classList.remove('open-menu'); // Remove a classe 'open-menu' do elemento com ID 'menu-mobile'
});

// Seleciona todos os elementos com a classe 'link-menu'
const links = document.getElementsByClassName('link-menu');

// Adiciona um evento de clique a cada link do menu para fechar o menu quando um link é clicado
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        document.getElementById('menu-mobile').classList.remove('open-menu'); // Remove a classe 'open-menu' do elemento com ID 'menu-mobile'
    });
}

// Classe para gerenciar o envio do formulário
class FormSubmit {
    constructor(formSelector, messageSelector) {
        this.form = document.querySelector(formSelector); // Seleciona o formulário
        this.messageBox = document.querySelector(messageSelector); // Seleciona a caixa de mensagem
        this.url = "https://formspree.io/f/xrbzjgwq"; // URL de envio do Formspree
        this.sendForm = this.sendForm.bind(this); // Garante que 'this' se refira à instância da classe no método sendForm
    }

    // Exibe a mensagem de sucesso e depois de alguns segundos a esconde
    displayMessage() {
        this.messageBox.style.display = "block"; // Mostra a mensagem
        setTimeout(() => {
            this.messageBox.style.display = "none"; // Esconde após 2 segundos
        }, 2000);
    }

    // Limpa os campos do formulário
    clearForm() {
        this.form.reset(); // Limpa o formulário
    }

    // Captura os dados do formulário no formato de FormData
    getFormObject() {
        return new FormData(this.form); // Usa FormData para enviar como formulário
    }

    // Envia o formulário de forma assíncrona
    async sendForm(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        try {
            const response = await fetch(this.url, {
                method: "POST",
                body: this.getFormObject(), // Envia os dados como FormData
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                this.displayMessage(); // Exibe a mensagem de sucesso
                this.clearForm(); // Limpa o formulário
            } else {
                console.error('Erro na resposta do servidor:', response.statusText);
            }
        } catch (error) {
            console.error("Erro ao enviar o formulário:", error); // Loga o erro no console
        }
    }

    // Inicializa o manipulador do formulário
    init() {
        if (this.form) this.form.addEventListener("submit", this.sendForm); // Adiciona o evento de envio ao formulário
        return this; // Retorna a instância da classe
    }
}

// Inicializa o manipulador do formulário
const formSubmit = new FormSubmit("#form", "#form-message");
formSubmit.init(); // Chama o método init para configurar o evento de envio do formulário
