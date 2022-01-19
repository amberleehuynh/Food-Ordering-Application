import { Fragment } from 'react'; // To access React.Fragment
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../Assets/meal.png';
import classes from './Header.module.css';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>  {/* CSS class w/ a dash, can't use dot notation */} 
        <img src={mealsImage} alt='Food!'/> 
      </div>
    </Fragment>
  );
};

export default Header;