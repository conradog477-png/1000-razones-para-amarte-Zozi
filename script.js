const reasons = [
    // Categoría: Personalidad
    "Por la forma en que iluminas cada habitación al entrar.",
    "Por tu inteligencia que me deja sin palabras.",
    "Por tu paciencia infinita conmigo.",
    "Por la pasión que pones en todo lo que haces.",
    "Por tu sentido del humor único.",
    // Categoría: Físico
    "Por el brillo especial de tus ojos cuando ríes.",
    "Por la suavidad de tus manos.",
    "Por tu sonrisa, que es mi lugar favorito en el mundo.",
    "Por la forma en que arrugas la nariz cuando algo te gusta.",
    // ... Agrega más categorías
];

// Generador de razones para completar las 1000 (Ejemplo algorítmico)
const adjectives = ["valiente", "hermosa", "única", "increíble", "soñadora", "fuerte", "bondadosa"];
const actions = ["caminas", "hablas", "sueñas", "luchas", "me miras", "cocinas", "ríes"];

while (reasons.length < 1000) {
    let adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    let act = actions[Math.floor(Math.random() * actions.length)];
    reasons.push(`Por lo ${adj} que eres cuando ${act}.`);
}

const listContainer = document.getElementById('reasons-list');
const searchInput = document.getElementById('search');

function displayReasons(filter = '') {
    listContainer.innerHTML = '';
    reasons.forEach((reason, index) => {
        if (reason.toLowerCase().includes(filter.toLowerCase())) {
            const card = document.createElement('div');
            card.className = 'reason-card';
            card.innerHTML = `<span class="number">#${index + 1}</span> ${reason}`;
            listContainer.appendChild(card);
        }
    });
}

searchInput.addEventListener('input', (e) => displayReasons(e.target.value));

// Carga inicial
displayReasons();
