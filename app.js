const initialData = ["Məlumat 1", "Məlumat 2", "Məlumat 3"];
let dataList = [...initialData];
const listElement = document.getElementById("data-list");

function renderList() {
  listElement.innerHTML = "";

  dataList.forEach((item, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = item;
    span.id = `text-${index}`;

    const input = document.createElement("input");
    input.type = "text";
    input.value = item;
    input.style.display = "none";
    input.id = `input-${index}`;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Redaktə";
    editBtn.className = "btn edit-btn";
    editBtn.onclick = () => {
      span.style.display = "none";
      input.style.display = "inline";
      saveBtn.style.display = "inline";
      editBtn.style.display = "none";
    };

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Yadda saxla";
    saveBtn.className = "btn save-btn";
    saveBtn.style.display = "none";
    saveBtn.onclick = () => {
      const newValue = document.getElementById(`input-${index}`).value;
      dataList[index] = newValue;
      renderList();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Sil";
    deleteBtn.className = "btn delete-btn";
    deleteBtn.onclick = () => deleteData(index);

    li.appendChild(span);
    li.appendChild(input);
    li.appendChild(editBtn);
    li.appendChild(saveBtn);
    li.appendChild(deleteBtn);
    listElement.appendChild(li);
  });
}

function deleteData(index) {
  dataList.splice(index, 1);
  renderList();
}

function addData() {
  const input = document.getElementById("new-data-input");
  const value = input.value.trim();
  if (value) {
    dataList.push(value);
    input.value = "";
    renderList();
  }
}

renderList();
