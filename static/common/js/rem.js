fnResize()
window.onresize = function () {
  fnResize()
}
function fnResize () {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if (deviceWidth >= 750) {
    deviceWidth = 750
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320
  }
  document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
}

/*
(function () {
  var docEl = document.documentElement

  function setRemUint () {
    var rem = docEl.clientWidth / 35
    docEl.style.fontSize = rem + 'px'
  }

  setRemUint()

  window.addEventListener('resize', setRemUint)
})()
*/
