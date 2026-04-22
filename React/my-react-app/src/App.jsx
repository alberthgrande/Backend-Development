import "./App.css";

function App() {
  //map() in React
  const fruitList = ["banana", "apple", "orange"];
  //map() with Objects
  const users = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 35 },
  ];

  return (
    <>
      <div className="App">
        <div>
          <h1>map() with Objects</h1>

          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <table width="100%" border="1">
                  <tr>
                    <td width="50%">{user.name}</td>
                    <td width="50%">{user.age}</td>
                  </tr>
                </table>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1>map() in React</h1>

          <ul>
            {fruitList.map((fruit) => (
              <li key={fruit}>{fruit}</li>
            ))}
          </ul>
        </div>

        <div>
          <h1>map() Parameters</h1>
          <ul>
            {fruitList.map((fruit, index, array) => {
              return (
                <li key={fruit}>
                  Name: {fruit}, Index: {index}, Array: {array.join(", ")},
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
