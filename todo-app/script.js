var myList = [
  { task: 'Do Study', priority: 'low', iscomplete: true, time: '2025-07-29T12:00:00Z', id: 0 },
  { task: 'Do exercise', priority: 'medium', iscomplete: true, time: '2025-07-29T12:00:00Z', id: 1 },
  { task: 'Complete Project', priority: 'high', iscomplete: false, time: '2025-07-29T12:00:00Z', id: 2 }
];

function openPopup() {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("plus-btn").style.display = "flex";
  document.getElementById('name').value = '';
  document.getElementById('priority').value = '';
}

function hide(event) {
  event.preventDefault();
  document.getElementById("dashboard").style.display = "flex";
  document.getElementById("popup").style.display = "none";
  document.getElementById("hide").style.display = "none";
}
var index = 3;
function save(event) {
  event.preventDefault();
  document.getElementById("dashboard").style.display = "flex";
  document.getElementById("popup").style.display = "none";
  document.getElementById("hide").style.display = "none";

  const name = document.getElementById("name").value;
  const priority = document.querySelector('input[name="priority"]:checked');

  if (!name || !priority) {
    alert("Please enter your Name & Priority");
    document.getElementById("popup").style.display = "flex";
    document.getElementById("plus-btn").style.display = "flex";
    return;
  }

  myList.push({
    task: name,
    priority: priority.value,
    iscomplete: false,
    time: new Date().toISOString(),
    id: index,
  });

  index++;
  updateTasks();
}

function deletedata(id) {
  const taskIndex = myList.findIndex(item => item.id === id);
  if (taskIndex !== -1) {
    myList.splice(taskIndex, 1);
  }
  updateTasks();
}


function updateTasks() {

  const totalCount = myList.length;
  document.getElementById("count").innerText = totalCount;

  const completedCount = myList.filter(task => task.iscomplete).length;
  document.getElementById("ccount").innerText = completedCount;

  const lowCount = myList.filter(task => task.priority === "low").length;
  document.getElementById("lcount").innerText = lowCount;

  const medCount = myList.filter(task => task.priority === "medium").length;
  document.getElementById("mcount").innerText = medCount;

  const highCount = myList.filter(task => task.priority === "high").length;
  document.getElementById("hcount").innerText = highCount;

  const Per = (completedCount / totalCount) * 100;
  document.getElementById("percentage").innerText = Per;

  const taskbox = document.getElementById('output');
  taskbox.innerHTML = myList.map(item => {
    return `
      <div class="show">
        <div class="left-section">
          <input type="checkbox" class="checkbox" ${item.iscomplete ? 'checked' : ''} onchange="toggleComplete(${item.id}, this.checked)">
          <div class="content">
            <div id="abc">
              <div class="title" id="result">${item.task}</div>
              <div class="badge">${item.priority}</div>
            </div>
            <div class="date">Created ${item.time}</div>
          </div>
        </div>
        <button id="delete"  onclick="deletedata(${item.id})">
          <img src="images/delete.png" alt="delete">
        </button>
      </div>
    `;
  }).join('');
}

window.onload = function() {
  updateTasks();
};

function toggleComplete(id, isChecked) {
  const task = myList.find(item => item.id == id);
  if (task) {
    task.iscomplete = isChecked;
  }
  updateTasks();
}