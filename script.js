let isIgnite = true;

function changeCard() {
    const card = event.currentTarget;
    const backgroundImage = isIgnite ? "bg-ignite.svg" : "bg-explorer.svg";
    isIgnite = !isIgnite
    card.style.backgroundImage = `url(./assets/${backgroundImage})`;
}