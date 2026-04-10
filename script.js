// La liste de tes jeux. C'est ici que tu devras ajouter tes 300 lignes.
const games = [
    { title: "Super Mario Clone", image: "jeux/jeu-1/thumb.jpg", url: "jeux/jeu-1/index.html" },
    { title: "Space Invaders", image: "jeux/jeu-2/thumb.jpg", url: "jeux/jeu-2/index.html" },
    { title: "Tetris Retro", image: "jeux/jeu-3/thumb.jpg", url: "jeux/jeu-3/index.html" },
    // Ajoute tes autres jeux en dessous en respectant ce format :
    // { title: "Nom du jeu", image: "chemin/image", url: "chemin/fichier.html" },
];

const container = document.getElementById('games-container');
const searchBar = document.getElementById('search-bar');

// Fonction qui génère les cartes HTML
function displayGames(gamesList) {
    container.innerHTML = ''; // On vide l'affichage précédent
    
    if (gamesList.length === 0) {
        container.innerHTML = '<p>Aucun jeu ne correspond à cette recherche.</p>';
        return;
    }

    gamesList.forEach(game => {
        // On crée la carte de jeu (cliquable)
        const card = document.createElement('a');
        card.href = game.url;
        card.className = 'game-card';
        // Enlève la ligne ci-dessous si tu veux que le jeu s'ouvre dans le même onglet
        card.target = '_blank'; 
        
        // J'utilise loading="lazy" pour que les 300 images ne se chargent pas toutes en même temps
        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}" loading="lazy">
            <h3>${game.title}</h3>
        `;
        
        container.appendChild(card);
    });
}

// 1. Afficher tous les jeux au lancement
displayGames(games);

// 2. Faire fonctionner la barre de recherche
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    
    // On filtre la liste des jeux selon le texte tapé
    const filteredGames = games.filter(game => {
        return game.title.toLowerCase().includes(searchString);
    });
    
    // On réaffiche seulement les jeux trouvés
    displayGames(filteredGames);
});
