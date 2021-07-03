import {makeAutoObservable} from 'mobx'

class Cart {
    constructor() {
        makeAutoObservable(this)
    }

    items = []

    addItem = (item) => {
        const maybeItemInState = this.items.find(i => i.id === item.id)

        if (Boolean(maybeItemInState)) {
            maybeItemInState.count += 1
            return
        }

        item.count = 0
        this.items.push(item)
    }

    getItem = (id) => {
        return this.items.find(item => item.id === id)
    }
}

export const cart = new Cart()