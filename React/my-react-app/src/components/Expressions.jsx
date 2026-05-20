function kwtohp(kw) {
  return kw * 1.36;
}

export function Expressions() {
  const hp = 218 * 1.36;
  const myObj = {
    name: "Fiat",
    model: "500",
    color: "white",
  };
  return (
    <>
      <div>
        <h1>My Car</h1>
        <p>It has {218 * 1.36} horsepower</p>
      </div>

      <div>
        <h1>Variables</h1>
        <p>It has {hp} horsepower</p>
      </div>

      <div>
        <h1>Function Calls</h1>
        <p>It has {kwtohp(218)} horsepower</p>
      </div>

      <div>
        <h1>Object Properties</h1>
        <h1>
          My car is a {myObj.color} {myObj.name} {myObj.model}
        </h1>
      </div>
    </>
  );
}
