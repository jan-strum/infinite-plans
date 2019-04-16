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
