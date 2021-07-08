import { makeAutoObservable } from 'mobx'

class Products {
  constructor() {
    makeAutoObservable(this)
  }

  selectedCategory = 'all'

  set selectedCategory(categoryName) {
    this.selectedCategory = categoryName
  }
}

export const products = new Products()
