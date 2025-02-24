import { useState, useEffect } from "react";
import "./CardComponent.css";

function CardComponent() {
  const [germanWord, setGermanWord] = useState("Hund");
  const opciones = ["Der", "Die", "Das"];
  const [opcionCorrecta, setOpcionCorrecta] = useState("Die");

  const [clickeado, setClickeado] = useState(false);
  const [botones, setBotones] = useState(
    new Array(opciones.length).fill("btn-primary")
  );
  const [cardColor, setCardColor] = useState("text-bg-secondary");
  const [borderColor, setBorderColor] = useState("border-secondary");

  // Estado para evitar múltiples llamadas
  const [loading, setLoading] = useState(false);

  // Función que obtiene la palabra aleatoria de la API
  const fetchRandomWord = async () => {
    if (loading) return; // Evita llamar si ya se está cargando
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/v1/flashCard/random");
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      const randomWord = await response.json(); // Convierte la respuesta en JSON
      setOpcionCorrecta(randomWord.article); // Actualiza la opción correcta
      setGermanWord(randomWord.german_word); // Actualiza la palabra en alemán
      console.log(randomWord.article);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    } finally {
      setLoading(false); // Restablece el estado de carga
    }
  };

  // useEffect para generar la palabra aleatoria cuando el componente se monta
  useEffect(() => {
    fetchRandomWord();
  }, []); // Solo una vez al montar el componente

  const handleClick = (index) => {
    if (clickeado) return;

    const newBotones = opciones.map((option, i) => {
      if (option.toLocaleLowerCase() === opcionCorrecta.toLocaleLowerCase()) {
        return "btn-success";
      }
      if (i === index) return "btn-danger";
      return "btn-secondary";
    });

    setBotones(newBotones);
    setClickeado(true);

    if (
      opciones[index].toLocaleLowerCase() === opcionCorrecta.toLocaleLowerCase()
    ) {
      setCardColor("text-bg-success");
      setBorderColor("border-success");
    } else {
      setCardColor("text-bg-danger");
      setBorderColor("border-danger");
    }
  };

  const resetear = () => {
    setClickeado(false);
    setBotones(new Array(opciones.length).fill("btn-primary"));
    setCardColor("text-bg-secondary");
    setBorderColor("border-secondary");

    // Llamar a la función fetchRandomWord solo cuando no se esté cargando
    fetchRandomWord();
  };

  return (
    <div className={`cardContainer ${borderColor}`}>
      <div className={`card ${cardColor} mb-3 mt-3`}>
        <div className="card-body">
          <h5 className="card-title">{germanWord}</h5>
        </div>
      </div>

      <div className="opciones">
        {opciones.map((e, i) => (
          <button
            disabled={clickeado}
            key={i}
            onClick={() => handleClick(i)}
            type="button"
            className={`elemento p-3 btn ${botones[i]}`}
            style={{
              transform:
                botones[i] === "btn-success" ? "scale(1.1)" : "scale(0.9)",
              opacity:
                botones[i] === "btn-secondary" || botones[i] === "btn-danger"
                  ? 0.5
                  : 1,
            }}
          >
            {e}
          </button>
        ))}
      </div>

      <div className={`siguiente-container ${clickeado ? "show" : ""}`}>
        <button
          onClick={resetear}
          type="button"
          className="elemento btn btn-warning next  "
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default CardComponent;
