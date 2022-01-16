import Card from '../Card/Card';

const CardList = (props) => {
  const div = document.createElement('div');

  const cardElements = props.cards.map((card)=> {

    return Card(card);
  });

  container.append (...cardElements);

  return div;
};

export default CardList;