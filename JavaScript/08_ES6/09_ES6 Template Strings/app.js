{
  const name = "Alberth";
  const age = 27;
  const message = `My name is ${name} and I am ${age} years old.`;
  console.log(message);
}

{
  const html = `<div>
    <h1>Welcome to my website</h1>
    <p>This is a sample HTML content.</p>
  </div>
  `;
  const x = `
  John:
    Hello, how are you?
  Jane:
    I'm fine, thanks!
`;

  document.getElementById("message").innerHTML = x;
  document.getElementById("app").innerHTML = html;
}

{
  const items = ["Apple", "Banana", "Cherry"];
  const list = `<ul>
  ${items.map((item) => `<li>${item}</li>`).join("")}
</ul>
`;
  document.getElementById("list").innerHTML = list;
}

{
  const isAdmin = true;

  const message = `Status: ${isAdmin ? "Admin" : "User"}`;

  document.getElementById("status").innerHTML = message;
}

{
  function highlight(strings, fname) {
    let x = fname.toUpperCase();

    return strings[0] + x + strings[1];
  }

  let name = "Alberth";

  let text = highlight`My name is ${name}.`;

  document.getElementById("highlight").innerHTML = text;
}
