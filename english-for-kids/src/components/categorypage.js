import cards from './cards';
export let containerCategoryPage;


const renderCategoryPage = (category) => {
  containerCategoryPage = document.createElement('div');
  containerCategoryPage.classList.add('container');
  document.body.appendChild(containerCategoryPage); 

  let cardWrapper;
  let cardImage;
  let cardSection;
  let cardName;

  const index = cards[0].findIndex((el) => el === category);

  cards[index + 1].forEach((elem) => {
    console.log(elem.word);
    cardWrapper = document.createElement('a');
    cardWrapper.classList.add('card-wrapper');
    cardWrapper.setAttribute('href', '#');
    containerCategoryPage.appendChild(cardWrapper);

    cardImage = document.createElement('div');
    cardImage.innerHTML = `<img src = ${elem.image} width = '300px' height = '260px'/>`;
    cardImage.classList.add('card-image');
    cardWrapper.appendChild(cardImage);

    cardSection = document.createElement('footer');
    cardSection.classList.add('category-section');
    cardWrapper.appendChild(cardSection);

    cardName = document.createElement('span');
    cardName.classList.add('card-name');
    cardName.textContent = `${elem.word}`;
    cardSection.appendChild(cardName);
  });
};

export default renderCategoryPage
