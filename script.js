let data = JSON.parse(localStorage.getItem("data")) || [];

function draw() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.name + " - " + p.memo;
    list.appendChild(li);
  });

  localStorage.setItem("data", JSON.stringify(data));
}

function add() {
  const name = document.getElementById("name").value;
  const memo = document.getElementById("memo").value;
  if (!name) return;

  data.push({ name, memo });
  draw();
}

draw();
