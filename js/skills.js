// skills.js

// Array com informações das habilidades
const skillsData = [
    {
        icon: "fa-brands fa-html5",
        description: "HTML é uma linguagem de marcação usada para estruturar o conteúdo na web."
    },
    {
        icon: "fa-brands fa-css3-alt",
        description: "CSS é uma linguagem de estilo usada para definir a apresentação de documentos HTML."
    },
    {
        icon: "fa-brands fa-js",
        description: "JavaScript é uma linguagem de programação usada para criar interatividade em páginas web."
    },
    {
        icon: "fa-brands fa-figma",
        description: "Figma é uma ferramenta de design colaborativa usada para criar interfaces de usuário."
    },
    {
        icon: "fa-brands fa-git-alt",
        description: "Git é um sistema de controle de versão distribuído usado para gerenciar o código-fonte."
    },
    {
        icon: "fa-brands fa-react",
        description: "React é uma biblioteca JavaScript para construir interfaces de usuário, focada em criar aplicações web interativas e de alta performance."
    }
];

// Função para criar e adicionar habilidades ao DOM
function createSkills(skills) {
    const boxSkills = document.querySelector('.box-skills'); // Seleciona o container onde as habilidades serão adicionadas

    skills.forEach(skill => {
        const skillDiv = document.createElement('div'); // Cria um novo elemento div
        skillDiv.setAttribute('data-info', skill.description); // Define o atributo data-info

        const skillIcon = document.createElement('i'); // Cria o elemento de ícone
        skillIcon.className = skill.icon; // Adiciona a classe do ícone

        skillDiv.appendChild(skillIcon); // Adiciona o ícone à div da habilidade
        boxSkills.appendChild(skillDiv); // Adiciona a div da habilidade ao container de habilidades
    });
}

// Chama a função para criar as habilidades
createSkills(skillsData);

// Função para exibir informações sobre a habilidade
document.querySelectorAll('.box-skills div').forEach(skill => {
    skill.addEventListener('click', function() {
        const skillInfo = this.getAttribute('data-info');
        document.getElementById('skill-info').textContent = skillInfo; // Atualiza o texto com a informação da habilidade
    });
});
