import CardList from './CardList/CardList';
import mostWantedPeople from './mostWanted/mostWanted';

const App = async() => {
  const container = document.createElement ('div');

  const cardList = CardList({
    cards: await mostWantedPeople(),
  });

  container.append(cardList);

  return container;
};

export default App;