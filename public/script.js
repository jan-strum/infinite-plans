let timeout

document.addEventListener('mousemove', hideOnIdle)

function hideOnIdle() {
  const body = document.getElementsByTagName('body')[0]
  const button = document.getElementById('button')

  body.style.cursor = 'default'
  button.className = 'display'

  clearTimeout(timeout)

  timeout = setTimeout(function() {
    body.style.cursor = 'none'
    button.className = 'hide'
  }, 1000)

  body.style.cursor = 'default'
  button.className = 'display'
}

// var timeout
// var isHidden = false

// document.addEventListener('mousemove', hideOnIdle)

// function hideOnIdle() {
//   const body = document.getElementsByTagName('body')[0]
//   body.style.cursor = 'default'
//   if (timeout) {
//     clearTimeout(timeout)
//   }
//   timeout = setTimeout(function() {
//     body.style.cursor = 'none'
//   }, 1000)
//   if (isHidden) {
//     body.style.cursor = 'default'
//     isHidden = false
//   }
// }
