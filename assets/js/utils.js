const $ = (selector) => {
  element = document.querySelector(selector)
  elements = document.querySelectorAll(selector)

  element.show = (approach) => {
    elements.forEach(el => {
      el.style.display = approach ? approach : 'inline'
    })
  }

  element.hide = () => {
    elements.forEach(el => {
      el.style.display = 'none'
    })
  }

  element.start = () => {
    elements.forEach(el => {
      element.show()
      element.play()
    })
  }

  element.stop = () => {
    elements.forEach(el => {
      el.style.display = 'none'
      el.pause()
    })
  }

  element.clear = () => {
    elements.forEach(el => {
      el.innerHTML = ''
    })
  }

  element.insert = (content) => {
    elements.forEach(el => {
      el.innerHTML = content
    })
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

  const videoId = choiceId === undefined ? 0 : getVideoAfterChoice(choiceId)
  if (typeof videoId !== 'string') {
    $(v(videoId)).start()

    const delay = getShowChoiceDelay(videoId)

    setTimeout(() => {
      generateChoices(getChoicesAfterVideo(videoId))
      timer($(v(videoId)).videoDuration - delay)
    }, delay)
  } else {
    const story = getStory(videoId)
    const delay = getShowChoiceDelay(videoId)
    const choices = getChoicesAfterVideo(videoId)

    if (story.isTheEnd) $('.try-again').show('flex')
    $('.story').insert(story.text)

    if (delay) timer(delay)
    if (choices) generateChoices(choices)
  }
}


const startGame = () => {
  afterChoiceEvent()
}