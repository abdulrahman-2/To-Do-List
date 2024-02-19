let plusBtn = document.querySelector(".plus");
let inputText = document.querySelector("#task-input");
let tasksContainer = document.querySelector(".tasks-content");
let tasks = document.querySelector(".tasks");

let allTasksAction = document.querySelector(".all-task-action");
allTasksAction.style.display = "none";

let deleteAll = document.querySelector(".delete-all");
let finishAll = document.querySelector(".finish-all");

let tasksCount = document.querySelector(".tasks-count span");
let completedCount = document.querySelector(".tasks-completed span");

window.onload = () => {
  inputText.focus();
};

plusBtn.addEventListener("click", () => {
  if (inputText.value === "") {
    alert("task required");
  } else {
    let noTasks = document.querySelector(".no-task");

    // Check If Span With No Tasks Message Is Exist
    if (document.body.contains(document.querySelector(".no-task"))) {
      // Remove No Tasks Message
      noTasks.remove();
    }

    let task = document.createElement("div");
    task.classList.add("task");
    let taskName = document.createElement("span");
    taskName.classList.add("task-name");
    let text = document.createTextNode(inputText.value);
    taskName.appendChild(text);
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    let deleteText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteText);
    task.append(taskName, deleteBtn);
    tasks.appendChild(task);

    inputText.value = "";
    inputText.focus();
    calculateTasks();
    allTasksAction.style.display = "flex";
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();

    if (tasks.childElementCount == 0) {
      createNoTask();
      allTasksAction.style.display = "none";
    }
  }

  if (e.target.classList.contains("task-name")) {
    e.target.classList.toggle("finished");
  }

  calculateTasks();
});

deleteAll.addEventListener("click", () => {
  tasks.innerHTML = "";
  allTasksAction.style.display = "none";
  createNoTask();
});

finishAll.addEventListener("click", (e) => {
  if (e.target.classList.contains("task-name")) {
    e.target.classList.toggle("finished");
  }
  calculateTasks();
});

function createNoTask() {
  const noTask = document.createElement("div");
  noTask.classList.add("no-task");
  const noTaskMsgSpan = document.createElement("span");
  noTaskMsgSpan.classList.add("no-tasks-message");
  const noTaskMsg = document.createTextNode("No Tasks To Show");
  noTaskMsgSpan.appendChild(noTaskMsg);
  noTask.appendChild(noTaskMsgSpan);

  tasksContainer.appendChild(noTask);
}

// Function To Calculate Tasks
function calculateTasks() {
  // Calculate All Tasks
  tasksCount.innerHTML = document.querySelectorAll(".tasks .task").length;

  // Calculate Completed Tasks
  completedCount.innerHTML = document.querySelectorAll(".finished").length;
}
