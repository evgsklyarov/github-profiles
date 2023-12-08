import { renderHook, waitFor } from '@testing-library/react';
import axiosMock from '~/api/mock';
import { GitHubRepo, GitHubUser } from '~/types/user';
import useGetProfileInfo from './useGetProfileInfo';

describe('useGetProfileInfo', () => {
  afterEach(() => {
    axiosMock.reset();
  });

  test('success', async () => {
    const mockUser: GitHubUser = {
      login: 'user123',
      avatar_url: 'http://example.com/avatar.jpg',
    };
    const mockRepos: GitHubRepo[] = [
      { id: 1, name: 'repo1', owner: mockUser },
      { id: 2, name: 'repo2', owner: mockUser },
    ];

    axiosMock.onGet('/users/user123').reply(200, mockUser);
    axiosMock.onGet('/users/user123/repos').reply(200, mockRepos);

    const { result } = renderHook(() => useGetProfileInfo('user123'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(false);
      expect(result.current.profile).toEqual({
        login: mockUser.login,
        avatar: mockUser.avatar_url,
        repos: mockRepos,
      });
    });
  });

  test('error', async () => {
    axiosMock.onGet('/users/user123').networkError();

    const { result } = renderHook(() => useGetProfileInfo('user123'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(true);
      expect(result.current.profile).toBeNull();
    });
  });
});
