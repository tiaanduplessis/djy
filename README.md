# djy - WIP

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/djy.svg)](https://greenkeeper.io/)

A lightweight jQueryish DOM facade for modern browsers (IE10+).

### Install - TODO

## API

### `djy()`

This is the main selector method for djy. It returns an actionable collection of nodes. If a function is provided, the function will be run once the DOM is ready.

```js
djy(function() {
  // Document ready callback

  djy('.myClass') // => returns actionable collection of nodes
})
```

### `djy.fn.each(cb)`

Iterates over a collection with callback(value, index, array).

```js
djy(selector).each(cb)
```

### `djy.fn.attr(name, val)`

Without `val`, returns the attribute value of the first element in the collection. With `val`, sets the attribute value of each element of the collection.

```js
djy(selector).attr(attrName)
djy(selector).attr(attrName, val)
```

### `djy.fn.val`

Returns an inputs value. If value is supplied, it sets all inputs in collection's value to the value argument.

```js
djy(input).val() 
djy(input).val(value)
```

### `djy.fn.addClass(className)`

Adds the className argument to collection elements.

```js
djy(selector).addClass(className) 
```

### `djy.fn.removeClass(className)`

Removes className from collection elements.

```js
$(selector).removeClass()
```

### `djy.fn.hasClass(className)`

Checks if the element in the collection has the className attribute. If it is a single element a boolean value is return. If it there is mulitple elements a array of booleans results are returned.

```js
djy(selector).hasClass(className)
```

### `djy.fn.toggleClass(className)`

Adds or removes className from collection elements based on if the element already has the class.

```js
djy(selector).toggleClass(className) 
```

### `djy.fn.clone`

Returns a clone of the collection.

```js
djy(selector).clone()
```

### `djy.fn.html(html)`

Returns the HTML text of collection. Sets the HTML if provided.

```js
$(selector).html()
$(selector).html(HTML)
```

### `djy.fn.css(rule, attr)`

Returns a CSS property value when just property is supplied. Sets a CSS property when property and value are supplied.

```js
$(element).css(property)
$(element).css(property, value)
```

### `djy.fn.text(content)`

Returns the inner text of elements in the collection. Sets the text if textContent is provided.

```js
$(selector).text()
$(selector).text(textContent)
```

### `djy.fn.children`

Without a selector specified it returns a collection of child elements. When a selector is provided it returns child elements that match the selector.

```js
$(selector).children()
$(selector).children(selector)
```

### `djy.fn.on(event, cb)`

Add event listener to collection elements

```js
$(selector).on(eventName, eventHandler)
```

### `djy.fn.off(event, cb)`

Removes event listener from collection elements.

```js
$(selector).off(eventName,eventHandler)
```

### `djy.fn.trigger(event, data)`

Triggers supplied event on elements in collection. Data can be passed along as the second parameter.

```js
djy(element).trigger(eventName)
djy(element).trigger(eventName,data)
```

TO ADD?? - .remove .has .is .not .parents

## License

MIT
