document.addEventListener('DOMContentLoaded', () => {
  
  const memoryGameWindow = document.querySelector('.memoryGameWindow')
  const gameVolumeSelect = document.getElementById('game')
  const btnStartGame = document.querySelector('.btnStartGame')
  const btnResetGame = document.querySelector('.btnResetGame')
  const counterRounds = document.querySelector('.counter')
  let cardsArray = []
  let selectedVolume = 0
  let picsArr = []
  let count = 0
  let firstCard = ''
  let secondCard = ''
  let divFirstCard = ''
  let divSecondCard = ''
  let counter = 0

  const picsArray = [
    {id: 1, img: './images/pics/01.jpg'},
    {id: 2, img: './images/pics/02.jpg'},
    {id: 3, img: './images/pics/03.jpg'},
    {id: 4, img: './images/pics/04.jpg'},
    {id: 5, img: './images/pics/05.jpg'},
    {id: 6, img: './images/pics/06.jpg'},
    {id: 7, img: './images/pics/07.jpg'},
    {id: 8, img: './images/pics/08.jpg'},
    {id: 9, img: './images/pics/09.jpg'},
    {id: 10, img: './images/pics/10.jpg'},
    {id: 11, img: './images/pics/11.jpg'},
    {id: 12, img: './images/pics/12.jpg'},
    {id: 13, img: './images/pics/13.jpg'},
    {id: 14, img: './images/pics/14.jpg'},
    {id: 15, img: './images/pics/15.jpg'},
    {id: 16, img: './images/pics/16.jpg'},
    {id: 17, img: './images/pics/17.jpg'},
    {id: 18, img: './images/pics/18.jpg'},
  ]

////////////////////////////// RANDOM PICS ///////////////////////////////////////
  let gamePics = picsArray.sort(() => {
    return 0.5 - Math.random()
  })

///////////////////////////// GAME SELECT CONTROL ////////////////////////////////
  let selectVolumeHandler = () => {
    gameVolumeSelect.addEventListener('change', () => {
      selectedVolume = gameVolumeSelect.value
      btnStartGame.disabled = selectedVolume === 0
    })
  }
  selectVolumeHandler()

////////////////////////// START BUTTON //////////////////////////////////////
  btnStartGame.addEventListener('click', () => {
    startGame()
  })

////////////////////////// RESET BUTTON //////////////////////////////////////
  btnResetGame.addEventListener('click', () => {
    fullResetGame()
    cardsArray = []
  })

////////////////////////// GAME FULL RESET ///////////////////////////////////
  let fullResetGame = () => {
    btnStartGame.disabled = false
    gameVolumeSelect.disabled = false
    gameVolumeSelect.value = 0
    cardsArray.forEach((cardItem) => {
      cardItem.parentNode.removeChild(cardItem)
    })
    cardsArray = []
    selectedVolume = 0
    picsArr = []
    resetGuesses()
    counter = 0
    counterRounds.innerHTML = `Your rounds: ${counter}`
  }


  let resetGuesses = () => {
    firstCard = ''
    secondCard = ''
    count = 0
  }

/////////////////////////// GAME START ///////////////////////////////////////
  let startGame = () => {
    btnStartGame.disabled = true
    gameVolumeSelect.disabled = true
    for (let i = 0; i < selectedVolume; i++) {
      const card = document.createElement('div')
      card.className = 'card'
      const frontImage = document.createElement('img')
      frontImage.classList = 'front-face'
      const backImage = document.createElement('img')
      backImage.className = 'back-face'

      if (selectedVolume == 16) {
        picsArr = gamePics.slice(0, 8)
        card.style.width = 'calc(22% + 10px)'
        card.style.height = 'calc(24%)'
        card.style.marginBottom = '5px'
        memoryGameWindow.style.width = '1000px'
      } else if (selectedVolume == 24) {
        picsArr = gamePics.slice(0, 12)
        card.style.width = 'calc(16.1%)'
        card.style.height = 'calc(22%)'
        memoryGameWindow.style.width = '1200px'
      } else if (selectedVolume == 36) {
        picsArr = gamePics.slice(0, 18)
        card.style.width = 'calc(15% + 10px)'
        card.style.height = 'calc(16%)'
        memoryGameWindow.style.width = '1000px'
      }
      backImage.src = './images/back.jpg'
      cardsArray.push(card)
      card.appendChild(backImage)
      card.appendChild(frontImage)

    }

    picsArr = picsArr.concat(picsArr)

    cardsArray.forEach((item, index) => {
      item.children[1].src = picsArr[index].img
      item.children[1].dataset.id = picsArr[index].id

      item.addEventListener('click', (e) => {
        if (count < 2) {
          count++
          if (count === 1) {
            divFirstCard = item
            firstCard = e.target.nextSibling.dataset.id
          } else {
            divSecondCard = item
            secondCard = e.target.nextSibling.dataset.id
          }

          if (firstCard && secondCard) {
            if (firstCard === secondCard) {
              console.log('found')
              divFirstCard.classList.add('found')
              divSecondCard.classList.add('found')
            }
            resetGuesses()
            counter++
            counterRounds.innerHTML = `Your rounds: ${counter}`

            setTimeout(() => {
              divFirstCard.classList.remove('flip')
              divSecondCard.classList.remove('flip')
            }, 600)

          }
        }
      })
    })


/////////////////////////// PICTURES SORT ////////////////////////////////////////
    cardsArray.sort(() => {
      return 0.5 - Math.random()
    })

////////////////////////// CARDS ADDING FROM MASSIVE TO GAME WINDOW //////////////      
    cardsArray.forEach((cardItem) => {
      memoryGameWindow.appendChild(cardItem)
    })
////////////////////////////// FLIP CARDS ////////////////////////////////////////
    cardsArray.forEach(card => card.addEventListener('click', flipCard))


  }

///////////////////////////// FLIP CARDS FUNCTION //////////////////////////////
  function flipCard() {
    this.classList.add('flip')
    console.log(this.classList[1])
  }


})
