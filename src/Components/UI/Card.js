import classes from './Card.module.css';

// Access props children to get access to the wrap content
const Card = props => {
  return <div className={classes.card}>{props.children}</div>
};

export default Card;