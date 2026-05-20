export function Attributes() {
  const attributes = "attributes";

  const myStyle = {
    fontSize: "16px",
    padding: "5px 10px",
    borderRadius: "5px",
    color: "#aa3bff",
    background: "rgba(170, 59, 255, 0.1)",
    border: "2px solid transparent",
    transition: "border-color 0.3s",
    marginBottom: "24px",
    cursor: "pointer",
  };

  const handleClick = () => {
    alert("You clicked the button!");
  };
  return (
    <>
      <h1 className="attributes">Attributes</h1>
      <p className={attributes}>This is a paragraph with attributes.</p>
      <button className={attributes} onClick={handleClick} disabled>
        Click me disabled
      </button>
      <br />
      <button className={attributes} onClick={handleClick} disabled={true}>
        Click me disabled with true
      </button>
      <br />
      <button style={myStyle} onClick={handleClick} disabled={false}>
        Click me disabled with true
      </button>
    </>
  );
}
