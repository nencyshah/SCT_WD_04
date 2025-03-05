function addTask() {
      let taskInput = document.getElementById("taskInput");
      let taskText = taskInput.value.trim();
      if (taskText === "") return;
      
      let li = document.createElement("li");
      li.innerHTML = `<span class="check-icon" onclick="toggleComplete(this)">🔲</span><span>${taskText}</span> <button onclick="removeTask(this)">❌</button>`;
      document.getElementById("taskList").appendChild(li);
      taskInput.value = "";
  }
  
  function removeTask(button) {
      button.parentElement.remove();
  }
  
  function toggleComplete(icon) {
      let task = icon.nextElementSibling;
      task.classList.toggle("completed");
      icon.textContent = task.classList.contains("completed") ? "✅" : "🔲";
  }
  