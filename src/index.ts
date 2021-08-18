import TodoItem from './classes/TodoItem'

const taskList = document.querySelector('.taskList')
const formForAddTaskForm = document.querySelector('.addTaskForm .form')
const addTaskForm = document.querySelector('.addTaskForm')
const taskNameInput = <HTMLInputElement> document.querySelector('.taskNameInput')
const addTaskFormFinalOptions = document.querySelector('.addTaskFormFinalOptions')
const addTaskFormButton = document.querySelector('.addTaskFormButton')
const displayFormButton = document.querySelector('.displayFormButton')
const cancelFormButton = document.querySelector('.cancelFormButton')
const checkboxes: NodeListOf<Element> = document.querySelectorAll('.taskItem input')
const toggleSidebarButton = document.querySelector('.toggleSidebarButton')
const allTasks: Array<TodoItem> = []


const displayNewTask = () => {
  const taskItem = document.createElement('div')
  const checkbox = document.createElement('input')
  const taskName = document.createElement('span')
  const rightHalf = document.createElement('span')
  const editIcon = document.createElement('i')
  const additionalOptionsIcon = document.createElement('i')

  taskItem.classList.add('taskItem')
  checkbox.setAttribute('type', 'checkbox')
  taskName.classList.add('taskName')
  taskName.textContent = taskNameInput.value
  rightHalf.classList.add('taskItemRightHalf')
  editIcon.classList.add('far')
  editIcon.classList.add('fa-edit')
  additionalOptionsIcon.classList.add('fas')
  additionalOptionsIcon.classList.add('fa-ellipsis-h')

  rightHalf.append(editIcon)
  rightHalf.append(additionalOptionsIcon)

  taskItem.append(checkbox)
  taskItem.append(taskName)
  taskItem.append(rightHalf)
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

const completeTask = () => {
  
}

const generateDefaultTasks = () => {
  const defaultTasks = ['click on initial addTask button displays addTaskForm and makes the initial addTask button hidden', 'click on cancel button makes addTaskForm hidden and initial addTaskButton visible again', 'user can click add task button to show add task form', 'style checkbox input buttons to be round']
  
  defaultTasks.forEach((taskName) => {
    const task = new TodoItem(taskName, false, '', '', [''], '')
    allTasks.push(task)
    taskNameInput.value = taskName
    displayNewTask()
  })

  console.log(allTasks)
}

const toggleSidebar = () => {
  document.querySelector<HTMLElement>(".sidenav").classList.toggle('openSidebar')
  document.querySelector<HTMLElement>(".mainContainer").classList.toggle('openMainContainer')
}

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', completeTask))
toggleSidebarButton.addEventListener('click', toggleSidebar)
displayFormButton.addEventListener('click', toggleAddTaskForm)
addTaskFormButton.addEventListener('click', addTask)
formForAddTaskForm.addEventListener('submit', addTask)
cancelFormButton.addEventListener('click', toggleAddTaskForm)

generateDefaultTasks()
