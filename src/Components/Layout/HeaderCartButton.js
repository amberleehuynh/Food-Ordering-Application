import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
  return <button className={classes.button}>
    {/* Shift + alt + down arrow to copy lines down */}
    <span className={classes.icon}>
      <CartIcon/>
    </span> 
    <span>Your Cart</span>
    <span className={classes.badge}>
      4
    </span>
  </button>
};

export default HeaderCartButton;