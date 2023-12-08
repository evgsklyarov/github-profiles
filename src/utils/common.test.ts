import { hasLinkHeaderNext } from './common';

describe('hasLinkHeaderNext', () => {
  test('undefined link header', () => {
    expect(hasLinkHeaderNext()).toBe(false);
  });

  test('empty string link header', () => {
    expect(hasLinkHeaderNext('')).toBe(false);
  });

  test('when there is no next link', () => {
    const linkHeader =
      '<https://api.github.com/users?since=100&per_page=50>; rel="prev", <https://api.github.com/users?since=200&per_page=50>; rel="last"';
    expect(hasLinkHeaderNext(linkHeader)).toBe(false);
  });

  test('when there is a next link', () => {
    const linkHeader =
      '<https://api.github.com/users?since=150&per_page=50>; rel="next", <https://api.github.com/users?since=100&per_page=50>; rel="prev"';
    expect(hasLinkHeaderNext(linkHeader)).toBe(true);
  });
});
