import "./App.css";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contactList, setContactList] = useState([]);

  const handleChangeImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddContact = () => {
    if (image && name && phone && email) {
      setContactList((prevContacts) => [
        ...prevContacts,
        {
          id: Date.now(),
          name: name,
          email: email,
          phone: phone,
          image: image,
        },
      ]);

      setImage("");
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  const handleDeleteContact = (id) => {
    setContactList((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  return (
    <>
      <main className="container">
        <div className="inputForm">
          <h1>CONTACT</h1>
          <input
            type="text"
            placeholder="Masukkan Nama"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="text"
            placeholder="Masukkan Nomor HP"
            value={phone}
            onChange={handlePhoneChange}
          />
          <input
            type="email"
            placeholder="Masukkan Email"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="inputImage">
            <input type="file" accept="image/*" onChange={handleChangeImage} />
          </div>
          <button onClick={handleAddContact}>Tambahkan</button>
        </div>
        <div className="contactCard">
          {contactList.map((contact) => (
            <Card
              key={contact.id}
              contact={contact}
              onDeleteContact={handleDeleteContact}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
