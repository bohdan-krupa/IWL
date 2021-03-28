document.addEventListener('click', () => {
  if ($('.video-container').requestFullscreen) $('.video-container').requestFullscreen()
  else if ($('.video-container').mozRequestFullScreen) $('.video-container').mozRequestFullScreen()
  else if ($('.video-container').webkitRequestFullScreen) $('.video-container').webkitRequestFullScreen()
  else if ($('.video-container').msRequestFullscreen) $('.video-container').msRequestFullscreen()
})

$('.open-game-btn').addEventListener('click', () => {
  $('audio').volume = 0.005
  $('audio').play()
  $('.open-game-btn').remove()
  $('.video-start').start()
  $('.start-game-btn').show()
})

$('.start-game-btn').addEventListener('click', () => {
  $('.video-start').stop()
  $('.start-game-btn').remove()
  $('.shadow').remove()

  startGame()
})