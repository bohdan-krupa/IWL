const $ = (element) => {
  element.show = () => {
    element.style.display = 'inline'
  }
  element.start = () => {
    element.show()
    element.play()
  }
  element.stop = () => {
    element.style.display = 'none'
    element.pause()
  }
  element.clear = () => {
    element.innerHTML = ''
  }
  element.videoDuration = element.duration * 1000

  return element
}


const timer = (ms) => {
  $('.time-line').animate(
    [
      { width: 0 },
      { width: '100%' }
    ],
    {
      duration: ms,
      easing: 'linear'
    }
  )
}


const v = (videoId) => {
  return `.video-${videoId}`
}


const generateChoices = (choices) => {
  choices.forEach(choice => {
    const textNode = document.createTextNode(choice.text)
    const node = document.createElement('div')
    node.appendChild(textNode)
    node.addEventListener('click', () => afterChoiceEvent(choice.id))
    node.classList = 'choice'

    $('.choices-container').appendChild(node)
  })
}


const cancelAllAnimations = () => {
  document.getAnimations().forEach(animation => {
      animation.cancel()
    }
  )
}


const afterChoiceEvent = (choiceId) => {
  $('video').stop()
  cancelAllAnimations()
  $('.choices-container').clear()

  const video = choiceId === undefined ? 0 : getVideoAfterChoice(choiceId)
  const delay = getShowChoiceDelay(video)

  $(v(video)).start()

  setTimeout(() => {
    generateChoices(getChoicesAfterVideo(video))
    timer($(v(video)).videoDuration - delay)
  }, delay)
}


const startGame = () => {
  afterChoiceEvent()
}