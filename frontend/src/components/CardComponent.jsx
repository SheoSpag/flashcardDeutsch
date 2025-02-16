import { useState } from "react";
import React from 'react';
import './CardComponent.css';

export default function CardComponent() {
    const [var1, var2] = useState(true)

    const cambiar = () => {
        var2(!var1)
    }

  return (
    <div className="container">
      <div className="flashcard" onClick={cambiar}>
        <h2>{var1 ? 'hola' : 'chau'}</h2>
      </div>
    </div>
  );
}
