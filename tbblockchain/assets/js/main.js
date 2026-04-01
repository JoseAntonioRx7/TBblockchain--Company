// main.js
async function loadHTML(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Erro ao carregar o arquivo: ${filePath}`);
        }
        const htmlData = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = htmlData;
        }
    } catch (error) {
        console.error("Erro na injeção de componente:", error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    
    // 1. Carrega o Layout (Caminhos baseados na sua estrutura real)
    await loadHTML('navbar-container', 'components/layout/navbar.html');
    await loadHTML('footer-container', 'components/layout/footer.html');

    // 2. Carrega as Seções da Landing Page
    // Certifique-se de que a pasta no VS Code se chama 'components' (no plural)
    await loadHTML('hero-container', 'components/sections/hero.html');
    await loadHTML('about-container', 'components/sections/about.html');
    await loadHTML('problem-container', 'components/sections/problem.html');
    await loadHTML('solution-container', 'components/sections/solution.html');
    await loadHTML('how-it-works-container', 'components/sections/how-it-works.html');
    await loadHTML('not-doing-container', 'components/sections/not-doing.html');
    await loadHTML('roadmap-container', 'components/sections/roadmap.html');
    await loadHTML('partners-container', 'components/sections/partners.html');
    await loadHTML('contact-container', 'components/sections/contact.html');

    console.log("TBblockchain UI: Todos os módulos carregados com sucesso.");
});