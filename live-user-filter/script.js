const result = document.getElementById("result");
const filter = document.getElementById("filter");
let listItems = [];

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  try {
    const res = await fetch("https://randomuser.me/api?results=50");
    const { results } = await res.json();

    // Créer le HTML de tous les utilisateurs d'un coup
    listItems = results.map(
      ({ name, picture, location }) => `
      <li>
        <img src="${picture.large}" alt="${name.first}">
        <div class="user-info">
          <h4>${name.first} ${name.last}</h4>
          <p>${location.city}, ${location.country}</p>
        </div>
      </li>
    `
    );

    result.innerHTML = listItems.join("");
  } catch (error) {
    console.error("Erreur lors du chargement des utilisateurs :", error);
    result.innerHTML = "<p>Impossible de charger les utilisateurs.</p>";
  }
}

getData();

function filterData(searchTerm) {
  const lowerSearch = searchTerm.toLowerCase();

  result.innerHTML = listItems
    .filter((item) => item.toLowerCase().includes(lowerSearch))
    .join("");

  if (!result.innerHTML) {
    result.innerHTML = "<li>Aucun utilisateur trouvé.</li>";
  }
}
