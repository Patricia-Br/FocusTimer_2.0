import state from './state.js'
import { menuSounds } from './elements.js'
import * as sounds from './sounds.js'
import * as time from './time.js'
import * as elements from './elements.js'


export function playPause() {
  state.IsRunning = document.documentElement.classList.toggle('running')
  time.countdown()
}

export function reset() {
  state.IsRunning = false
  state.IsRunning = document.documentElement.classList.remove('running')
  time.updateDisplay()
}

export function moreTime() {
  let minutes = parseInt(elements.minutes.textContent)
   
  let increment = minutes + 5
  if(minutes > 55){
    return
  }
  elements.minutes.textContent = increment
  
  
}

export function lessTime() {
  const minutes = parseInt(elements.minutes.textContent)
  
  const increment = minutes - 5

  if(minutes < 5){
    return
  }

  elements.minutes.textContent = increment   
}


// music
export function soundTree() {
  state.IsSelected = menuSounds.querySelector('.ph-tree').classList.toggle('selected')
  if(state.IsSelected){
    sounds.treeSound.play()
    return
  }
  sounds.treeSound.pause()
}

export function soundRain() {
  state.IsSelected = menuSounds.querySelector('.ph-cloud-snow').classList.toggle('selected')
  if(state.IsSelected){
    sounds.rainSound.play()
    return
  }
  sounds.rainSound.pause()
}

export function soundCoffeeShop() {
  state.IsSelected = menuSounds.querySelector('.ph-storefront').classList.toggle('selected')
  if(state.IsSelected){
    sounds.coffeeshopSound.play()
    return
  }
  sounds.coffeeshopSound.pause()
}

export function soundFireplace() {
  state.IsSelected = menuSounds.querySelector('.ph-campfire').classList.toggle('selected')
  if(state.IsSelected){
    sounds.fireplaceSound.play()
    return
  }
  sounds.fireplaceSound.pause()
}