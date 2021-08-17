export default class TodoItem {
  name: string
  complete: boolean
  dueDate: string
  listType: string
  labels: Array<string>
  filter: string

  constructor(name: string='', complete: boolean=false, dueDate: string='', listType: string='', labels: Array<string>=[''], filter: string='' ) {
    this.name = name
    this.complete = complete
    this.dueDate = dueDate
    this.listType = listType
    this.labels = labels
    this.filter = filter
  }

  setName(name: string) {
    this.name = name
  }

  setDueDate(dueDate: string) {
    this.dueDate = dueDate
  }

  setListType(listType: string) {
    this.listType = listType
  }

  setLabels(labels: Array<string>) {
    this.labels = labels
  }

  setFilter(filter: string) {
    this.filter = filter
  }

  toggleComplete() {
    this.complete = !this.complete
  }

  getName() {
    return this.name
  }

  getDueDate() {
    return this.dueDate
  }

  getListType() {
    return this.listType
  }

  getLabels() {
    return this.labels
  }
  
  isComplete() {
    return this.complete
  }
}