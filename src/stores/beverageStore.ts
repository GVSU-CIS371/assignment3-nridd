import { defineStore } from 'pinia'
import bases from '../data/bases.json'
import creamers from '../data/creamers.json'
import syrups from '../data/syrups.json'
import temperatures from '../data/tempretures.json'

export const useBeverageStore = defineStore('beverageStore', {
  state: () => ({
    currentTemp: 'hot' as string,
    currentBase: 'coffee' as string,
    currentCreamer: 'none' as string,
    currentSyrup: 'none' as string,
    nameInput: '',

    temperatures,
    bases,
    creamers,
    syrups,

    savedBeverages: [] as {
      name: string
      base: string
      creamer: string
      syrup: string
      temp: string
    }[],
  }),

  getters: {
    currentBeverage: (state) => ({
      temp: state.currentTemp,
      base: state.currentBase,
      creamer: state.currentCreamer,
      syrup: state.currentSyrup,
    }),
  },

  actions: {
    makeBeverage() {
      if (!this.nameInput.trim()) return
      this.savedBeverages.push({
        name: this.nameInput.trim(),
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
        temp: this.currentTemp,
      })
      this.nameInput = ''
    },

    showBeverage(name: string) {
      const found = this.savedBeverages.find((b) => b.name === name)
      if (found) {
        this.currentTemp = found.temp
        this.currentBase = found.base
        this.currentCreamer = found.creamer
        this.currentSyrup = found.syrup
      }
    },
  },
})
