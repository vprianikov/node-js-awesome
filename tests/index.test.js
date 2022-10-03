import { describe, expect, it } from '@jest/globals';

import say from '../src/say';

describe('simple tests', () => {
  it('without value', () => {
    expect.assertions(1);

    expect(say()).toBe('Hi!');
  });

  it('with value', () => {
    expect.assertions(1);

    expect(say('Magic!')).toBe('Magic!');
  });
});
