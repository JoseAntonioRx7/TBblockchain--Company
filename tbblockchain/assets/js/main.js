async function loadComponent(id, file) {
  const res = await fetch(file);
  const data = await res.text();
  document.getElementById(id).innerHTML = data;
}

loadComponent("navbar", "components/layout/navbar.html");
loadComponent("footer", "components/layout/footer.html");

loadComponent("hero", "components/sections/hero.html");
loadComponent("problem", "components/sections/problem.html");
loadComponent("solution", "components/sections/solution.html");
loadComponent("how-it-works", "components/sections/how-it-works.html");
loadComponent("roadmap", "components/sections/roadmap.html");
loadComponent("about", "components/sections/about.html");

