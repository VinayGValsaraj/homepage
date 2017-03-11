function selectLink(linkIndex) {
  var contactInfo = document.getElementById('contact-info')
  for (var i = 0; i < contactInfo.children.length; i++) {
    var link = contactInfo.children[i]
    if (i === linkIndex) {
      // select this element
      addClass(link, 'selected')
      link.children[0].focus()
    } else {
      // deselect
      removeClass(link, 'selected')
    }
  }
}


function handleClick(e) {
  if (e.target.localName === 'a') {
    selectThisElement(e.target)
  }
}

function handleKeyPress(e) {
  if (e.which === 40 || (e.which === 9 && e.getModifierState('Shift') === false)) {
    selectNext()
    e.preventDefault()

  } else if (e.which === 38 || (e.getModifierState('Shift')  && e.which === 9)) {
    // go up
    selectPrevious()
    e.preventDefault()
  }
}

function selectNext() {
  var contactInfo = document.getElementById('contact-info')
  var contactInfoLength = contactInfo.children.length
  if (window.selectedIndex >= contactInfoLength - 1) {
    window.selectedIndex = 0
  } else {
    window.selectedIndex++
  }
  selectLink(window.selectedIndex)
}

function selectPrevious() {
  var contactInfo = document.getElementById('contact-info')
  var contactInfoLength = contactInfo.children.length
  if (window.selectedIndex <= 0) {
    window.selectedIndex = contactInfoLength - 1
  } else {
    window.selectedIndex--
  }
  selectLink(window.selectedIndex)
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else
    el.className += ' ' + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
}

var selectThisElement = function (element) {
  var contactInfo = document.getElementById('contact-info')
  for (var i = 0; i < contactInfo.children.length; i++) {
    var link = contactInfo.children[i]
    if (link.children[0] === element) {
      // select this element
      addClass(link, 'selected')
      link.focus()
      window.selectedIndex = i
    } else {
      // deselect
      removeClass(link, 'selected')
    }
  }
}
document.addEventListener('keydown', handleKeyPress)
document.addEventListener('click', handleClick)
window.selectedIndex = 0
selectLink(window.selectedIndex)