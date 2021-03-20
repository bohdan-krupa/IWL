choices = {
  '0': 'Повчити ІТ',
  '1': 'Піти в зал',
  '2': 'Піти бухати з пацанами',
  '3': 'Повчити бази',
  '4': 'Повчити python',
  '5': 'Написати Данилу і Оресту',
  '6': 'Піти самому',
  '7': 'Зареєструватись',
  '8': 'Зареєструватись',
  '9': 'Не реєстровуватись',
  '10': 'Лишити python',
  '11': 'Почати жити в кайф',
  '12': 'Інвестувати'
}

afterChoices = {
  '0': 1,
  '1': 2,
  '2': '_1',
  '3': 3,
  '4': 4,
  '5': 6,
  '6': 7,
  '7': '_0',
  '8': '_3',
  '9': '_1',
  '10': 5,
  '11': 13,
  '12': 14
}

afterVideos = {
  '0': [0, 1, 2],
  '1': [3, 4],
  '2': [5, 6],
  '3': [7, 9],
  '4': [10, 3],
  '5': [8, 9],
  '6': [12],
  '7': [10],
  '_0': 'END',
  '_1': 'END',
  '_2': 'END',
  '_3': [11, 12],
  '_4': [11, 12],
  '13': 'END',
  '14': 'END',
  '15': 'BACKSTAGE'
}

videoShowChoiceDelays = {
  '0': 4500,
  '1': 3000,
  '2': 3000,
  '3': 3000,
  '4': 3000,
  '5': 3000,
  '6': 3000,
  '7': 3000,
  '_0': 3000,
  '_1': 3000,
  '_2': 3000,
  '_3': 3000,
  '_4': 3000,
  '13': 3000,
  '14': 3000,
  '15': 3000
}

getChoices = (choices) => {
  let choicesData = []

  choices.forEach(choice => {
    choicesData.push({ id: choice, text: choices[choice] })
  })

  return choicesData
}

getChoicesAfterVideo = (video) => {
  return getChoices(afterVideos[video])
}

getVideoAfterChoice = (choiceId) => {
  console.log(choiceId)
  return afterChoices[choiceId]
}

getShowChoiceDelay = (video) => {
  return videoShowChoiceDelays[video]
}