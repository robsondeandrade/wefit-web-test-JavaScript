const cardCategories = ["Natureza", "Animais", "Pessoas", "Tecnologia"];

const categoryImages = {
  Natureza: "https://picsum.photos/id/10/300/180",
  Animais: "https://picsum.photos/id/237/300/180",
  Pessoas: "https://picsum.photos/id/129/300/180",
  Tecnologia: "https://picsum.photos/id/0/300/180",
};

function switchElementClass(element, originalClass, newClass) {
    element.classList.replace(originalClass, newClass);
}

function generateListItem(content, isHighlighted = false) {
  const item = document.createElement("li");
  item.classList.add("list-group-item");
  if (isHighlighted) item.classList.add("active");
  item.textContent = content;
  return item;
}

function setupHeaderStyle() {
  const jumbotron = document.querySelector(".jumbotron");
  jumbotron.classList.add("bg-secondary", "text-light", "text-right");

  const primaryButton = jumbotron.querySelector(".btn-primary");
  switchElementClass(primaryButton, "btn-primary", "btn-success");
}

function populateCardsWithContent(cardDetails) {
  document.querySelectorAll(".card").forEach((card, index) => {
    const { name, image } = cardDetails[index];

    card.querySelector(".card-title").textContent = name;

    const imageElement = card.querySelector("img");
    imageElement.src = image;
    imageElement.alt = name;

    if (index === 1) switchElementClass(card.querySelector(".btn-primary"), "btn-primary", "btn-success");
  });
}

function appendItemsToList(targetListSelector, newItems) {
  const targetList = document.querySelector(targetListSelector);
  targetList.firstElementChild.classList.remove("active");

  newItems.forEach(item => targetList.appendChild(generateListItem(item, item === "Quarto item")));
}

function initializeApp() {
  switchElementClass(document.querySelector(".btn-group-vertical"), "btn-group-vertical", "btn-group-horizontal");
  setupHeaderStyle();

  const cardInformation = cardCategories.map(category => ({
    name: category,
    image: categoryImages[category],
  }));

  populateCardsWithContent(cardInformation);

  const additionalListItems = ["Quarto item", "Quinto item"];
  appendItemsToList(".list-group", additionalListItems);
}

initializeApp();
