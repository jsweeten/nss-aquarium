import { getFish } from './database.js'
import { fishList } from './FishList.js'

const parentHTMLElement = document.querySelector(".fishList")

parentHTMLElement.innerHTML = fishList()

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}