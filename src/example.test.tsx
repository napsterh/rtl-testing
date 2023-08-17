import { sumPositiveNumber } from './example'

describe('Cuando los argumentos que pasan son numeros positivos', () => {
   test('Deberia retornar la respuesta correcta', () => {
      expect(sumPositiveNumber(4,5)).toBe(9)
   })
})

describe('Cuando uno de los argumentos es negativo', () => {
   test('Deberia ser un error', () => {
      let error
      try {
         sumPositiveNumber(-1,5)
      } catch (err) {
         error = err
      }
      expect(error).toBeDefined()
      //expect(error.message).toBe('One of number is negative')
   })
})

