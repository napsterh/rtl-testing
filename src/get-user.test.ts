import { getUser } from "./get-user";


describe('When everything is OK', () => {
   test('Should return a response', async () => {
      const result = await getUser();
      expect(result).toEqual({ id: '1', name : 'Homer' });
   })
});