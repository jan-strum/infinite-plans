// window.addEventListener('mousemove', function() {
// const body = document.getElementsByTagName('BODY')[0]
// console.log('body', body.style.cursor)

// const html = document.getElementsByTagName('html')
// console.log('html', html)
// html.style.cursor = 'default'
// console.log

// setTimeout(() => (body.style.cursor = 'none'), 1000)
// console.log('body', body.style)
// setTimeout((body.style.cursor = 'none'), 1000)
// })

// var timeout
// var isHidden = false

// document.addEventListener('mousemove', magicMouse)

// function magicMouse() {
//   if (timeout) {
//     clearTimeout(timeout)
//   }
//   timeout = setTimeout(function() {
//     if (!isHidden) {
//       document.querySelector('body').style.cursor = 'none'
//       isHidden = true
//     }
//   }, 1000)
//   if (isHidden) {
//     document.querySelector('body').style.cursor = 'auto'
//     isHidden = false
//   }
// }

// ;(function() {
//   var mouseTimer = null,
//     cursorVisible = true

//   function disappearCursor() {
//     mouseTimer = null
//     document.body.style.cursor = 'none'
//     cursorVisible = false
//   }

//   document.onmousemove = function() {
//     if (mouseTimer) {
//       window.clearTimeout(mouseTimer)
//     }
//     if (!cursorVisible) {
//       document.body.style.cursor = 'default'
//       cursorVisible = true
//     }
//     mouseTimer = window.setTimeout(disappearCursor, 5000)
//   }
// })()

// $('html').autoHideMouseCursor(1000)
