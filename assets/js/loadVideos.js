let videosData = [
  { name: 'start', loaded: 0 },
  { name: '0', loaded: 0 },
  { name: '1', loaded: 0 },
  { name: '2', loaded: 0 },
  { name: '3', loaded: 0 },
  { name: '4', loaded: 0 },
  { name: '5', loaded: 0 },
  { name: '6', loaded: 0 },
  { name: '7', loaded: 0 },
  { name: 'backstage', loaded: 0 }
]


const createVideoElement = (videoName, blob) => {
  const video = document.createElement('video')
  video.src = URL.createObjectURL(blob)
  video.classList = `video-${videoName}`
  video.disablePictureInPicture = true

  $('.video-container').appendChild(video)
}


const loadVideo = (videoName, videoDataId, callback) => {
  const xhr = new XMLHttpRequest()
  const url = `${HOST}/assets/videos/${videoName}.mp4`

  xhr.open('GET', url, true)
  xhr.responseType = 'arraybuffer'

  xhr.onload = e => {
    const blob = new Blob([e.target.response], { type: 'video/mp4' })

    createVideoElement(videoName, blob)
  }

  xhr.onprogress = e => {
    if (e.lengthComputable) {
      videosData[videoDataId].loaded = e.loaded / e.total * 100

      updateLoading(callback)
    }
  }

  xhr.send()
}


const updateLoading = (callback) => {
  const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length

  avgLoading = average(videosData.map(videoData => videoData.loaded))
  avgLoading = avgLoading.toFixed(2)

  $('.loading').innerHTML = avgLoading + '%'

  if (avgLoading === '100.00') {
    callback()
  }
}


const startVideosLoading = (callback) => {
  videosData.forEach((videoData, index) => {
    loadVideo(videoData.name, index, callback)
  })
}