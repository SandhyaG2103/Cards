import React, { useState } from "react";

const Contactfrom = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("from submitted :", { firstname, lastname, email, message });
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h2>Contactfrom</h2>
      <form onSubmit={handleSubmit}>
        <label>FirstName:
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />

        </label>
        <br></br>
        <label>lastname:
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />

        </label>
        <br></br>
        <label>Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        </label>
        <br></br>

        <label>message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contactfrom;
