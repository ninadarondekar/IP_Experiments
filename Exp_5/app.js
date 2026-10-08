"use strict";
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;
    let date = new Date().toLocaleDateString();
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    if (task.trim() === "") {
        alert("Please enter a task.");
        return;
    }
    else {
        tasks.push({
            task: task,
            date: date
        });
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    displayTasks();
}
function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    // Display tasks using loop
    for (let i = 0; i < tasks.length; i++) {
        let row = taskList.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerText = (i + 1).toString();
        cell2.innerText = tasks[i].task;
        cell3.innerText = tasks[i].date;
    }
}
// Display saved tasks when page loads
displayTasks();
