const Card = (props) => {
  const container = document.createElement ('div');

  container.classList.add ('card');

  const img = document.createElement ('img');
  img.src = props.src;

  const fullName = document.createElement ('p');
  fullName.innerText = props.fullName;

  container.append (img, fullName);

  return container;
};

export default Card;

