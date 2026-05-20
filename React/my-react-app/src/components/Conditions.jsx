export function Conditions() {
  const x = 5;

  let y = "apple";

  if (x < 10) {
    y = "banana";
  }

  return (
    <>
      <h1>{y}</h1>
      <h1>{x < 10 ? "Banana" : "Apple"}</h1>
    </>
  );
}
