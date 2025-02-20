import CardComponent, {
  CardBody,
} from "./components/CardComponent/CardComponent.jsx";
import ListComponent from "./components/ListComponent/ListComponent.jsx";

function App() {
  const list = ["Rachel", "Ross", "Joey", "Chandler", "Monica", "Phoebe"];
  return (
    <CardComponent body="Hola mundos">
      <CardBody cardTitle={"Soy el titulo"} cardText={"Soy el texto"} />
      <ListComponent list={list} />
    </CardComponent>
  );
}

export default App;
