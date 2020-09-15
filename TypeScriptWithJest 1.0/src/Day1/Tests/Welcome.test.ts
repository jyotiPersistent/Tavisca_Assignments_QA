  //----------------GetObjectToArray------------------------------
  import { GetWelcomeMessege} from '../../Day1/Code/welcome'

  test('Verify welcome messege.', () => {
      const input = 'Jyoti Sharma';
      const expectedOutput = 'Welcome Jyoti Sharma to Tavisca!';
      expect(GetWelcomeMessege(input)).toBe(expectedOutput);
    });

    test('Verify empty message.', () => {
        const input = null;
        const expectedOutput = 'Welcome Jyoti Sharma to Tavisca!';
        expect(GetWelcomeMessege(input)).toBe(expectedOutput);
      });