  const addBtn = document.getElementById("add-btn");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");

    addBtn.addEventListener("click", () => {
      const task = input.value.trim();
      if (task === "") return;

      // Create list item
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="task-text">${task}</span>
        <button class="delete-btn">Delete</button>
      `;

      // Toggle strike-through on task
      li.querySelector(".task-text").addEventListener("click", function () {
        this.classList.toggle("completed");
      });

      // Delete task
      li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
      });

      list.appendChild(li);
      input.value = ""; // clear input
    });

    // Optional: Add task on Enter key
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addBtn.click();
      }
    });d


    