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

        item.count = 1
        this.items.push(item)
    }

    getItem = (id) => {
        return this.items.find(item => item.id === id)
    }

    get itemsLength() {
        return this.items.reduce((acc, item) => {
            acc += item.count

            return acc
        }, 0)
    }
}

export const cart = new Cart()