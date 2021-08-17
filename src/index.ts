class TodoItem {
  name: string
  complete: boolean
  dueDate: string
  listType: string
  constructor(name: string, complete: boolean, dueDate: string, listType: string ) {
    this.name = name
    this.complete = complete
    this.dueDate = dueDate
    this.listType = listType
  }

  setName(name: string) {
    this.name = name
  }

  toggleComplete() {
    this.complete = !this.complete
  }
}

console.log('hello')