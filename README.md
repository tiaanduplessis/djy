
# djy
[![package version](https://img.shields.io/npm/v/djy.svg?style=flat-square)](https://npmjs.org/package/djy)
[![package downloads](https://img.shields.io/npm/dm/djy.svg?style=flat-square)](https://npmjs.org/package/djy)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/djy.svg?style=flat-square)](https://npmjs.org/package/djy)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> jQueryish DOM/Event library

## Table of Contents

- [Install](#install)
- [API](#api)
- [Example](#example)
- [Contribute](#contribute)
- [License](#License)

## Install

With CDN:

```html
<script src="https://cdn.rawgit.com/tiaanduplessis/djy/master/dist/djy.umd.js"></script>
<!-- Or -->
<script src="https://unpkg.com/dont-go/dist/djy.umd.js"></script>
```

With package manager:

```sh
npm install djy
# Or
yarn add djy
```

## API

### `djy()`

This is the main selector method for djy. It returns an actionable collection of nodes. If a function is provided, the function will be run once the DOM is ready.

```js
djy(function() {
    // Document ready callback

    djy('.myClass') // => returns actionable collection of nodes
})
```

### `djy.prototype.each(cb)`

Iterates over a collection with callback(value, index, array).

```js
djy(selector).each(cb)
```

### `djy.prototype.attr(name, val)`

Without `val`, returns the attribute value of the first element in the collection. With `val`, sets the attribute value of each element of the collection.

```js
djy(selector).attr(attrName)
djy(selector).attr(attrName, val)
```

### `djy.prototype.val`

Returns an inputs value. If value is supplied, it sets all inputs in collection's value to the value argument.

```js
djy(input).val()
djy(input).val(value)
```

### `djy.prototype.addClass(className)`

Adds the className argument to collection elements.

```js
djy(selector).addClass(className)
```

### `djy.prototype.removeClass(className)`

Removes className from collection elements.

```js
$(selector).removeClass()
```

### `djy.prototype.hasClass(className)`

Checks if the element in the collection has the className attribute. If it is a single element a boolean value is return. If it there is mulitple elements a array of booleans results are returned.

```js
djy(selector).hasClass(className)
```

### `djy.prototype.toggleClass(className)`

Adds or removes className from collection elements based on if the element already has the class.

```js
djy(selector).toggleClass(className)
```

### `djy.prototype.clone`

Returns a clone of the collection.

```js
djy(selector).clone()
```

### `djy.prototype.html(html)`

Returns the HTML text of collection. Sets the HTML if provided.

```js
$(selector).html()
$(selector).html(HTML)
```

### `djy.prototype.css(rule, attr)`

Returns a CSS property value when just property is supplied. Sets a CSS property when property and value are supplied.

```js
$(element).css(property)
$(element).css(property, value)
```

### `djy.prototype.text(content)`

Returns the inner text of elements in the collection. Sets the text if textContent is provided.

```js
$(selector).text()
$(selector).text(textContent)
```

### `djy.prototype.children`

Without a selector specified it returns a collection of child elements. When a selector is provided it returns child elements that match the selector.

```js
$(selector).children()
$(selector).children(selector)
```

### `djy.prototype.on(event, cb)`

Add event listener to collection elements

```js
$(selector).on(eventName, eventHandler)
```

### `djy.prototype.off(event, cb)`

Removes event listener from collection elements.

```js
$(selector).off(eventName, eventHandler)
```

### `djy.prototype.trigger(event, data)`

Triggers supplied event on elements in collection. Data can be passed along as the second parameter.

```js
djy(element).trigger(eventName)
djy(element).trigger(eventName, data)
```

## Example

See the [example](example) directory for usage.

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    