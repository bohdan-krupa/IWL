document.addEventListener('click', () => {
  if (videoContainer.requestFullscreen) videoContainer.requestFullscreen()
  else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen()
  else if (videoContainer.webkitRequestFullScreen) videoContainer.webkitRequestFullScreen()
  else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen()
})

openGameBtn.addEventListener('click', () => {
  openGameBtn.remove()
  $(videoStart).start()
  $(startGameBtn).show()
})

let currentVideo = 0

startGameBtn.addEventListener('click', () => {
  $(videoStart).stop()
  startGameBtn.remove()
  shadow.remove()

  startGame()
})