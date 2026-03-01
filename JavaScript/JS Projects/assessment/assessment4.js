{
  // 🧠 Question 1

  function update(obj) {
    obj.count += 1;
  }

  let data = { count: 0 };

  update(data);
  update(data);
  console.log(data.count);

  // What is the output? 2
}

{
  // 🧠 Question 2

  function reset(obj) {
    obj = { count: 0 };
  }

  let data = { count: 5 };
  reset(data);
  console.log(data.count);

  // What is the output? 5
}

{
  // 🧠 Question 3 (Backend-style thinking)
  function process(req) {
    req.body.processed = true;
  }

  let request = { body: { name: "Alberth" } };

  process(request);
  console.log(request.body.processed);

  // What is the output? false
}

{
  function test(a) {
    a.inner = { value: 200 };
    a.inner.value = 100;
  }

  let obj = { inner: { value: 50 } };

  test(obj);

  console.log(obj.inner.value);
}

{
  function change(x) {
    x = { value: 10 };
    x.value = 20;
  }

  let data = { value: 5 };

  change(data);

  console.log(data.value);
}
