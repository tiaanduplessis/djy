import Djy from '../src/index'

test('should export a function', () => {
    expect(Djy).toBeDefined()
})

test('should get a element', () => {
    const elem = document.createElement('div')
    elem.setAttribute('id', 'test')
    document.body.appendChild(elem)

    const $elem = Djy('#test')
    expect($elem).toBeDefined()


    elem.remove()
})

test('should get attribute of element', () => {
    const elem = document.createElement('div')
    elem.setAttribute('id', 'test')
    document.body.appendChild(elem)

    const $elem = Djy('#test')

    expect($elem.attr('id')).toBe('test')

    elem.remove()
})

test('should loop all matching elements', () => {
    const numElem = 5
    const elems = []

    for(let i = 0; i < numElem; i++) {
        const elem  = document.createElement('div')
        document.body.appendChild(elem)
        elems.push(elem)
    }

    const mockFn = jest.fn()

    const $elems = Djy('div')
    $elems.each(mockFn)

    expect(mockFn).toHaveBeenCalledTimes(numElem)

    elems.forEach(elem => elem.remove())
})

test('should add, remove & check for the existence of a class', () => {
    const elem = document.createElement('div')
    elem.setAttribute('id', 'test')
    document.body.appendChild(elem)

    const $elem = Djy('#test')

    $elem.addClass('test')

    expect($elem.hasClass('test')).toBeTruthy()
    
    $elem.removeClass('test')

    expect($elem.hasClass('test')).toBeFalsy()

    elem.remove()

})