import {isFunction} from '../src/utils'


test('should test if is function', () => {
    const func = () => {}

    expect(isFunction(func)).toBeTruthy()
    expect(isFunction('foo')).toBeFalsy()
})