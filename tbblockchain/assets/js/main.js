// Função utilitária para buscar e injetar o HTML
async function loadHTML(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Erro ao carregar o arquivo: ${filePath}`);
        }
        const htmlData = await response.text();
        document.getElementById(elementId).innerHTML = htmlData;
    } catch (error) {
        console.error("Erro na injeção de componente:", error);
    }
}

// Inicializa o site assim que o DOM do index.html estiver pronto
document.addEventListener('DOMContentLoaded', async () => {
    
    // 1. Carrega o Layout (Navbar e Footer)
    await loadHTML('navbar-container', 'components/layout/navbar.html');
    await loadHTML('footer-container', 'components/layout/footer.html');

    // 2. Carrega as Seções da Landing Page
    await loadHTML('hero-container', 'components/sections/hero.html');
    await loadHTML('about-container', 'components/sections/about.html');
    await loadHTML('problem-container', 'components/sections/problem.html');
    await loadHTML('solution-container', 'components/sections/solution.html');
    await loadHTML('how-it-works-container', 'components/sections/how-it-works.html');
    await loadHTML('not-doing-container', 'components/sections/not-doing.html');
    await loadHTML('roadmap-container', 'components/sections/roadmap.html');
    await loadHTML('partners-container', 'components/sections/partners.html');

    console.log("TBBlockchain UI: Todos os módulos carregados com sucesso.");

    // TODO: Chamar funções do ui.js aqui (ex: animações, setup do particles.js, etc.)
});