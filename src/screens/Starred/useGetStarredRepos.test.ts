import { renderHook, waitFor } from '@testing-library/react';
import axiosMock from '~/api/mock';
import { GitHubRepo } from '~/types/user';
import useGetStarredRepos from './useGetStarredRepos';

describe('useGetStarredRepos', () => {
  afterEach(() => {
    axiosMock.reset();
  });

  it('fetch starred repositories for a given user', async () => {
    const mockRepos: GitHubRepo[] = [
      { id: 1, name: 'repo1', owner: { login: 'user123', avatar_url: '' } },
      { id: 2, name: 'repo2', owner: { login: 'user123', avatar_url: '' } },
    ];
    const mockLinkHeader =
      '<https://api.github.com/users/123/starred?page=2>; rel="next"';

    axiosMock.onGet('/users/user123/starred').reply(200, mockRepos, {
      link: mockLinkHeader,
    });

    const { result } = renderHook(() => useGetStarredRepos('user123'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(false);
      expect(result.current.repos).toEqual(mockRepos);
      expect(result.current.pagination.next).toBe(true);
    });
  });

  it('error', async () => {
    axiosMock.onGet('/users/user123/starred').networkError();

    const { result } = renderHook(() => useGetStarredRepos('user123'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(true);
      expect(result.current.repos).toEqual([]);
    });
  });
});
