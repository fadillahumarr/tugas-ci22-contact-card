import Styles from "./card.module.css";
import PropTypes from "prop-types";

export default function Card({ contact, onDeleteContact }) {
  return (
    <main className={Styles.card}>
      <img src={contact.image} alt="profile-image" />
      <div className={Styles.profile}>
        <h1>{contact.name}</h1>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
      <button onClick={() => onDeleteContact(contact.id)}>Hapus</button>
    </main>
  );
}

Card.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
