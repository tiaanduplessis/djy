
export const isFunction = (func) => Object.prototype.toString.apply(func).slice(8, -1) === 'Function'

export const hasSelector = function (element, selector) {
  const matches = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector || element.oMatchesSelector
  return matches.call(element, selector)
}

export const onReady = (func) => {
  if (document.readyState !== 'loading') {
    func()
  } else {
    document.addEventListener('DOMContentLoaded', func)
  }
}
