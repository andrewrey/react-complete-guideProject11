import styles from "./Checkout.module.css";

const Checkout = ({ onCancel }) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default Checkout;
