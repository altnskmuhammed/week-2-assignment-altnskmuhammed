renderHeader();

const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const root = document.querySelector("#root");
const editModal = document.querySelector("#editModal");
let todos = [];
let todo;
// sayfa sayısı
let page = 1;

//her sayfada ne kadar satır bulunacağı
let rows = 15;

const renderTodos = (page = 1) => {
  root.innerHTML = "";
  // todoları listele
  const table = document.createElement("table");
  table.setAttribute("class", "table table-hover");

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th scope="col" id="id"><button type="button" class="btn btn-light" style=" font-weight : bold; ">Id 	
      &#129047;</button></th>
      <th scope="col" id="tittle-sorting"><button type="button" class="btn btn-light" style=" font-weight : bold; ">Başlık 	
	  &#129047;</button></th>
      <th scope="col" id = "userId"><button type="button" class="btn btn-light" style=" font-weight : bold; ">Kullanıcı Id 	
	  &#129047;</button></th>
      <th scope="col" id="status"><button type="button" class="btn btn-light" style=" font-weight : bold; ">Durum 	
	  &#129047;</button></th>
      <th scope="col"></th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  const renderItem = (item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.userId}</td>
      <td>${item.completed ? "Tamamlandı" : "Yapılacak"}</td>
      <td>
        <button class="btn btn-xs btn-danger remove" data-id=${
          item.id
        }>Sil</button>
        <button class="btn btn-xs btn-warning edit" data-id=${
          item.id
        }>Düzenle</button>
      </td>
    `;
    tbody.appendChild(tr);
  };

  // şu anki sayfanın 1 eksiği örneği 1. sayfaysa 0
  page--;
  // 10*0 = 0;
  let start = rows * page;
  console.log({ start });
  let end = start + rows;
  // 0 + 10 = 10;
  console.log({ end });
  // 0. index ve 10.index arası gösterilecek.
  // hangi seçili sayfadaysak ona göre render ediliyor.
  let paginatedItems = todos.slice(start, end);
  paginatedItems.forEach((item) => {
    renderItem(item);
  });
  table.appendChild(tbody);
  root.append(table);

  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = Number(e.currentTarget.getAttribute("data-id"));
      if (confirm("kaydı silmek istediğinize emin misiniz?")) {
        todos = todos.filter((x) => x.id !== id);
        renderTodos();
      }
    });
  });

  document.querySelectorAll(".edit").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = Number(e.currentTarget.getAttribute("data-id"));
      todo = todos.find((todo) => todo.id == id);
      editModal.querySelector("#title").value = todo.title;
      editModal.querySelector("#completed").checked = todo.completed;
      editModal.style.display = "block";
      editModal.classList.add("show");
    });
  });
  document.querySelector(`#tittle-sorting`).addEventListener(`click`, () => {
    todos.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();

      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
    renderTodos();
  });
  document.querySelector(`#status`).addEventListener(`click`, () => {
    todos.sort((c, d) => {
      const nameC = c.completed;
      const nameD = d.completed;

      if (nameC > nameD) {
        return 1;
      }
      if (nameC < nameD) {
        return -1;
      }
      return 0;
    });

    renderTodos();
  });
  document.querySelector(`#userId`).addEventListener(`click`, () => {
    todos.sort((c, d) => {
      const nameC = c.userId;
      const nameD = d.userId;

      if (nameC > nameD) {
        return 1;
      }
      if (nameC < nameD) {
        return -1;
      }
      return 0;
    });

    renderTodos();
  });
  document.querySelector(`#id`).addEventListener(`click`, () => {
    todos.sort((c, d) => {
      const nameC = c.id;
      const nameD = d.id;

      if (nameC > nameD) {
        return 1;
      }
      if (nameC < nameD) {
        return -1;
      }
      return 0;
    });

    renderTodos();
  });
};
page = 1;
document.querySelectorAll(".page-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    let data_id = btn.getAttribute("data-id");
    data_id = Number(data_id);
    if (data_id == 1) {
      renderTodos(1);
    }
    if (data_id == 2) {
      renderTodos(2);
    }
    if (data_id == 3) {
      renderTodos(3);
    }
    if (data_id == 4) {
      renderTodos(page++);
    }
    if (data_id == 0) {
      renderTodos(page++);
    }

    page++;
    current_page = Number(data_id);
    renderTodos(current_page);
  });
});

editModal.querySelector("#save").addEventListener("click", () => {
  todo.title = editModal.querySelector("#title").value;
  todo.completed = editModal.querySelector("#completed").checked;
  const index = todos.findIndex((t) => t.id == todo.id);
  todos[index] = todo;
  renderTodos();
  editModal.style.display = "none";
  editModal.classList.remove("show");
});

editModal.querySelectorAll(".close").forEach((button) => {
  button.addEventListener("click", () => {
    editModal.style.display = "none";
    editModal.classList.remove("show");
  });
});

fetch(todosUrl)
  .then((resp) => resp.json())
  .then((data = []) => {
    todos = data;
    renderTodos();
  })
  .catch((error) => {
    errorLogger(error);
  });

// sıralama ödevi algoritması
// table thead kısmındaki sıralama yapılacak kolonlara event listener eklenecek.
// event listener hangi kolon için tıklanıyorsa
// sort metodu kullanılarak sıralama yapılacak
// sıralanmış todos'todus içerisine atılacak
// renderTodos metodu çalıştırılacak.
