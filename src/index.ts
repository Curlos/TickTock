import TodoItem from './classes/TodoItem'

const displayFormButton = document.querySelector('.displayFormButton')
const allTasks = []

const handleAddTask = () => {

}

const displayAddTaskForm = () => {
  
}

displayFormButton.addEventListener('click', displayAddTaskForm)

const task = new TodoItem('new task', false, '', '', [''], '')
allTasks.push(task)
console.log(task)

console.log('hello')