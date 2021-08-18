export const createEditTaskForm = () => {
  const editTaskForm = document.createElement('div')
  const form = document.createElement('form')
  const taskNameInput = document.createElement('input')
  const lineBreak = document.createElement('br')
  const descriptionInput = document.createElement('input')
  const addTaskFormOptions = document.createElement('div')
  const optionsLeft = document.createElement('span')
  const datePicker = document.createElement('span')
  const listType = document.createElement('span')
  const optionsRight = document.createElement('span')
  const labelPicker = document.createElement('span')
  const faTag = document.createElement('i')
  const priorityPicker = document.createElement('span')
  const faFlag = document.createElement('i')

  editTaskForm.classList.add('addTaskForm')
  editTaskForm.classList.add('editTaskForm')
  form.classList.add('form')

  taskNameInput.classList.add('taskNameInput')
  taskNameInput.setAttribute('type', 'text')
  taskNameInput.setAttribute('placeholder', 'Task name')
  
  descriptionInput.classList.add('descriptionInput')
  descriptionInput.setAttribute('type', 'text')
  descriptionInput.setAttribute('placeholder', 'Description')

  addTaskFormOptions.classList.add('addTaskFormOptions')
  optionsLeft.classList.add('optionsLeft')

  datePicker.classList.add('datePicker')
  datePicker.textContent = 'Today'

  listType.classList.add('listType')
  listType.textContent = 'Inbox'

  optionsRight.classList.add('optionsRight')
  labelPicker.classList.add('labelPicker')

  faTag.classList.add('fas')
  faTag.classList.add('fa-tag')

  priorityPicker.classList.add('priorityPicker')

  faFlag.classList.add('far')
  faFlag.classList.add('fa-flag')

  optionsLeft.append(datePicker)
  optionsLeft.append(listType)

  labelPicker.append(faTag)
  priorityPicker.append(faFlag)
  optionsRight.append(labelPicker)
  optionsRight.append(priorityPicker)

  addTaskFormOptions.append(optionsLeft)
  addTaskFormOptions.append(optionsRight)

  form.append(taskNameInput)
  form.append(lineBreak)
  form.append(descriptionInput)
  form.append(addTaskFormOptions)
  editTaskForm.append(form)



  return editTaskForm
}

export const editTaskFormFinalOptions = () => {
  const editTaskFormFinalOptions = document.createElement('div')
  editTaskFormFinalOptions.classList.add('addTaskFormFinalOptions')

  const saveTaskFormButton = document.createElement('button')
  saveTaskFormButton.classList.add('saveTaskFormButton')
  saveTaskFormButton.textContent = 'Save'

  const cancelFormButton = document.createElement('button')
  cancelFormButton.classList.add('cancelFormButton')
  cancelFormButton.textContent = 'Cancel'

  editTaskFormFinalOptions.append(saveTaskFormButton)
  editTaskFormFinalOptions.append(cancelFormButton)

  return editTaskFormFinalOptions
}



/*

<div class="addTaskForm">
      <form class="form">
        <input type='text' class="taskNameInput" placeholder="Task name"></br>
        <input type='text' class="descriptionInput" placeholder="Description">
        <div class="addTaskFormOptions">
          <span class="optionsLeft">
            <span class="datePicker">Today</span>
            <span class="listType">Inbox</span>
          </span>

          <span class="optionsRight">
            <span class="labelPicker">
              <i class="fas fa-tag"></i>
            </span>
            <span class="priorityPicker">
              <i class="far fa-flag"></i>
            </span>
          </span>
        </div>
      </form>
    </div>

    <div class="addTaskFormFinalOptions">
      <button class="saveTaskFormButton">Save</button>
      <button class="cancelFormButton">Cancel</button>
    </div>

    */