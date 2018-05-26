/* global getComputedStyle */

import { isFunction, hasSelector, onReady } from './utils'

function Djy (selector) {
  if (!(this instanceof Djy)) {
    return new Djy(selector)
  }

  if (isFunction(selector)) {
    onReady(selector)
  } else {
    this.elements = Array.from(document.querySelectorAll(selector))
  }
}

Djy.fn = Djy.prototype = {
  each (cb) {
    this.elements.forEach(cb)
    return this
  },

  attr (name, val) {
    if (val) {
      this.each(element => element.setAttribute(name, val))
    } else if (!val) {
      return this.elements.length === 1
        ? this.elements[0].getAttribute(name)
        : this.elements.map(element => element.getAttribute(name))
    }
    return this
  },

  val (val) {
    if (val) {
      this.each(function (element) {
        element.value = val
      })
    } else {
      return this.elements.length === 1
        ? this.elements[0].value
        : this.elements.map(element => element.value)
    }

    return this
  },

  addClass (className) {
    this.each(element => element.classList.add(className))
    return this
  },

  removeClass (className) {
    this.each(function (element) {
      element.classList.remove(className)
    })

    return this
  },

  hasClass (className) {
    let classExists = false
    this.each(element => {
      classExists = element.classList.contains(className)
    })
    return classExists
  },

  toggleClass (className) {
    this.each(function (element) {
      element.classList.toggle(className)
    })
    return this
  },

  clone () {
    const newElements = []
    this.each(function (element) {
      newElements.push(element.cloneNode(true))
    })

    const djy = new Djy()
    djy.elements = newElements
    djy.length = newElements.length
    return djy
  },

  html: function (html) {
    if (html) {
      this.each(function (element) {
        element.innerHTML = html
      })
    } else {
      return this.elements.length === 1
        ? this.elements[0].innerHTML || ''
        : this.elements.map(element => element.innerHTML || '')
    }

    return this
  },
  css (rule, attr) {
    if (rule) {
      this.each(element => {
        element.style[rule] = attr
      })
    } else if (!attr) {
      return this.elements.length === 1
        ? getComputedStyle(this.elements[0])[rule]
        : this.elements.map(element => getComputedStyle(element)[rule])
    }
    return this
  },

  text (content) {
    if (!content) {
      return this.elements.length === 1
        ? this.elements[0].textContent
        : this.elements.map(element => element.textContent)
    }
    return this.each(v => {
      v.textContent = content
    })
  },

  children (selector) {
    const elements = []
    this.each(element => {
      elements.push(element.children)
    })

    return !selector ? elements : elements.filter(element => hasSelector(element, selector))
  },

  on (event, cb) {
    return this.each(element => {
      element.addEventListener(event, cb)
    })
  },

  off (event, cb) {
    return this.each(element => {
      element.removeEventListener(event, cb)
    })
  },

  trigger (eventName, data) {
    const event = document.createEvent('HTMLEvents')
    event.data = data
    event.initEvent(eventName, true, false)
    return this.each(element => element.dispatchEvent(event))
  }
}

export default Djy
