import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleCHange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h3>Connectez-vous</h3>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleCHange}
          type="text"
          name="Idendifiant"
          placeholder="Entrez votre prénom"
          required
        />
        <button>Accéder à mon espace</button>
      </form>
    </div>
  );
}
