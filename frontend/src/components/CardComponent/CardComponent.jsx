function CardComponent(props) {
  const { body, children } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{body}</div>
      {children}
    </div>
  );
}

export function CardBody(props) {
  const { cardTitle, cardText } = props;

  return (
    <>
      <h5 className="card-title">{cardTitle}</h5>
      <p className="card-text">{cardText}</p>
    </>
  );
}

export default CardComponent;
