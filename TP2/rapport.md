TP2

Dans ce TP, on a vu la notion de menu burger (menu qui se "déroule" en plusieurs sous menu) et la notion de "thème" de la page (jour/nuit).
Dans ce TP, je n'ai pas utiliser l'IA car je me rappel avoir eu des difficultés de compréhension au début mais j'ai fini par m'en sortir. Comme tous les tp qui nécessite un minimum de codage, j'ai utilisé le logiciel VisualStudio Code.

Les bouts de codes suivant :  
"<button id="theme-toggle">🌙 Sombre</button>
<button class="menu-btn" aria-expanded="false">☰</button>"
et
"const isDark = document.body.classList.contains('dark');
  btnTheme.textContent = isDark ? '☀️ Clair' : '🌙 Sombre';"
Permet de faire la transition entre un thème clair et un thème sombre, par exemple.

Et ce bout de code :
 "questions.forEach((question) => {
  question.addEventListener('click', () => {
    const reponse = question.nextElementSibling;
    const estDejaOuverte = reponse.classList.contains('is-visible');"
Permet de faire le menu burger (qu'un déroulant s'ouvre et se referme lorsqu'on clique ailleurs)

Théo Aladenise, TP2


