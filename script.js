const recipes = [
  {
    id: 635521,
    title: 'Blueberry Pound Cake',
    image: 'https://spoonacular.com/recipeImages/635521-312x231.jpg',
    ingredients: [
      'blueberries',
      'wheat flour',
      'sugar',
      'eggs',
      'butter',
      'milk',
    ],
  },
  {
    id: 642595,
    title: "Farmer's Market Wild Mushroom Risotto",
    image: 'https://spoonacular.com/recipeImages/642595-312x231.jpg',
    ingredients: [
      'mushrooms',
      'rice',
      'cheese',
      'salt',
      'pepper',
      'white wine',
    ],
  },
  {
    id: 1095967,
    title: 'Easy 7 Layer Salad Side Dish',
    image: 'https://spoonacular.com/recipeImages/1095967-312x231.jpg',
    ingredients: [
      'lettuce',
      'eggs',
      'carrots',
      'mayonnaise',
      'onions',
      'bacon',
    ],
  },
  {
    id: 635520,
    title: 'Cherry Pie',
    image: 'https://spoonacular.com/recipeImages/635520-312x231.jpg',
    ingredients: [
      'cherries',
      'pie sheet',
      'vanilla',
      'sugar',
      'butter',
      'eggs',
      'peanuts butter',
    ],
  },
  {
    id: 635524,
    title: 'Cheese Cake with Blueberry sauce',
    image: 'https://spoonacular.com/recipeImages/635524-312x231.jpg',
    ingredients: [
      'cream cheese',
      'blueberries',
      'sugar',
      'gelatine',
      'butter',
      'milk',
    ],
  },
  {
    id: 635542,
    title: 'Banana Muffins',
    image: 'https://spoonacular.com/recipeImages/635542-312x231.jpg',
    ingredients: [
      'bananas',
      'butter',
      'sugar',
      'flour',
      'eggs',
      'mlik',
      'baking powder',
    ],
  },
];

// Since the data I want to store is Objects in an array, use JSON.stringify
localStorage.setItem('recipes', JSON.stringify(recipes));

// To get the data, I need to parse the string
let recipesData = JSON.parse(localStorage.getItem('recipes'));

// removing the element from the array
// let removeIndex = 0;
// recipesData.splice(removeIndex, 1);
console.log(recipesData.length);
// console.log(Array.isArray(recipesData)); //true

/* <div class="col s12 m6 l4">
  <div class="card">
    <div class="card-image">
      <img
        src="https://spoonacular.com/recipeImages/635521-312x231.jpg"
        alt="Blueberry Pound Cake"
      />
      <a href="#" class="halfway-fab btn-floating orange lighten-3">
        <i class="material-icons">favorite</i>
      </a>
    </div>
    <div class="card-content">
      <span class="card-title center-align">Blueberry Pound Cake</span>
    </div>
    <div class="card-action center-align">
      <a href="">Ingredients</a>
      <a href="">Recipe Website</a>
    </div>
  </div>
</div>; */
const row = document.getElementById('cards');
for (let i = 0; i < recipesData.length; i++) {
  // 1
  let colDiv = document.createElement('div');
  colDiv.classList.add('col', 's12', 'm6', 'l4');
  row.appendChild(colDiv);
  // 2
  const card = document.createElement('div');
  card.classList.add('card');
  colDiv.appendChild(card);
  // 3
  const cardImage = document.createElement('div');
  cardImage.classList.add('card-image');
  card.appendChild(cardImage);
  // 3-1
  const image = document.createElement('img');
  image.setAttribute('src', recipesData[i].image);
  image.setAttribute('alt', recipesData[i].title);
  cardImage.appendChild(image);
  // 3-2
  const favorite = document.createElement('a');
  favorite.setAttribute('href', '#');
  favorite.classList.add('halfway-fab', 'btn-floating', 'orange', 'lighten-3');
  cardImage.appendChild(favorite);
  // 3-2-1
  const favoriteIcon = document.createElement('i');
  favoriteIcon.classList.add('material-icons');
  favoriteIcon.innerHTML = 'favorite';
  favorite.appendChild(favoriteIcon);
  //4 Card content
  const content = document.createElement('div');
  content.classList.add('card-content');
  card.appendChild(content);
  // 4-1
  const title = document.createElement('span');
  title.classList.add('card-title', 'center-align');
  title.innerHTML = recipesData[i].title;
  content.appendChild(title);
  // 5
  const action = document.createElement('div');
  action.classList.add('card-action', 'center-align', 'my-action');
  card.appendChild(action);
  // 5-1
  const ingredientsA = document.createElement('a');
  ingredientsA.setAttribute('href', '#ingredients');
  ingredientsA.classList.add('modal-trigger');
  ingredientsA.innerHTML = 'Ingredients';
  action.appendChild(ingredientsA);
  // Creating ingredients modal 5-2
  const ingModal = document.createElement('div');
  ingModal.classList.add('modal');
  ingModal.setAttribute('id', 'ingredients');
  action.appendChild(ingModal);
  // Creating ingredients modal 5-2-1
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  ingModal.appendChild(modalContent);
  // Inside ModalContent: title
  const ingTitle = document.createElement('h4');
  ingTitle.innerHTML = 'INGREDIENTS';
  modalContent.appendChild(ingTitle);
  // Inside ModalCOntetnt: Ingredients
  const ingListsUl = document.createElement('ul');
  modalContent.appendChild(ingListsUl);
  for (let j = 0; j < recipesData[i].ingredients.length; j++) {
    const ingListsLi = document.createElement('li');
    ingListsLi.innerHTML = recipesData[i].ingredients[j];
    ingListsUl.appendChild(ingListsLi);
  }
  // 5-3
  const websiteA = document.createElement('a');
  websiteA.setAttribute('src', '#');
  websiteA.innerHTML = 'Recipe Website';
  action.appendChild(websiteA);
}

var options = {
  opacity: 0.5,
};

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});
