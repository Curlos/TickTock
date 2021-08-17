import TodoItem from './classes/TodoItem'

const taskList = document.querySelector('.taskList')
const formForAddTaskForm = document.querySelector('.addTaskForm .form')
const addTaskForm = document.querySelector('.addTaskForm')
const taskNameInput = <HTMLInputElement> document.querySelector('.taskNameInput')
const addTaskFormFinalOptions = document.querySelector('.addTaskFormFinalOptions')
const addTaskFormButton = document.querySelector('.addTaskFormButton')
const displayFormButton = document.querySelector('.displayFormButton')
const cancelFormButton = document.querySelector('.cancelFormButton')
const allTasks = []


const displayNewTask = () => {
  const taskItem = document.createElement('div')
  const checkbox = document.createElement('input')
  const taskName = document.createElement('span')

  taskItem.classList.add('taskItem')
  checkbox.setAttribute('type', 'checkbox')
  taskName.classList.add('taskName')
  taskName.textContent = taskNameInput.value

  taskItem.append(checkbox)
  taskItem.append(taskName)
  taskList.append(taskItem)

  taskNameInput.value = ''


// <div class="taskItem">
//         <input type="checkbox" class="inputCheckbox">
//         <span class="taskName">Need to finish this project by today</span>
//       </div>
}

const addTask = () => {
  console.log('submit')
  displayNewTask()
}

const toggleAddTaskForm = () => {
  console.log('toggle')
  addTaskForm.classList.toggle('hidden')
  addTaskFormFinalOptions.classList.toggle('hidden')
  displayFormButton.classList.toggle('hidden')
}

const generateDefaultTasks = () => {
  const defaultTasks = ['click on initial addTask button displays addTaskForm and makes the initial addTask button hidden', 'click on cancel button makes addTaskForm hidden and initial addTaskButton visible again', 'user can click add task button to show add task form', 'style checkbox input buttons to be round']

  for (let task of defaultTasks) {
    taskNameInput.value = task
    displayNewTask()
  }
}

displayFormButton.addEventListener('click', toggleAddTaskForm)
addTaskFormButton.addEventListener('click', addTask)
formForAddTaskForm.addEventListener('submit', addTask)
cancelFormButton.addEventListener('click', toggleAddTaskForm)

const task = new TodoItem('new task', false, '', '', [''], '')
allTasks.push(task)
console.log(task)

console.log('hello faggot bitch')
generateDefaultTasks()
