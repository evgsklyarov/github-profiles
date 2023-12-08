import { renderHook, waitFor } from '@testing-library/react';
import axiosMock from '~/api/mock';
import useGetRepoBranches from './useGetRepoBranches';
import { Branch } from '~/types/repository';

describe('useGetRepoBranches', () => {
  afterEach(() => {
    axiosMock.reset();
  });

  it('fetch branches for a given repository', async () => {
    const mockBranches: Branch[] = [
      {
        name: 'main',
        commit: { sha: '123', url: 'https://api.github.com/commits/123' },
      },
      {
        name: 'dev',
        commit: { sha: '456', url: 'https://api.github.com/commits/456' },
      },
    ];

    const mockLinkHeader =
      '<https://api.github.com//repos/user123/repo123/branches?page=2>; rel="next"';

    axiosMock
      .onGet('/repos/user123/repo123/branches')
      .reply(200, mockBranches, {
        link: mockLinkHeader,
      });

    const { result } = renderHook(() =>
      useGetRepoBranches('user123', 'repo123'),
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(false);
      expect(result.current.branches).toEqual(mockBranches);
      expect(result.current.pagination.next).toBe(true);
    });
  });

  it('error', async () => {
    axiosMock.onGet('/repos/user123/repo123/branches').networkError();

    const { result } = renderHook(() =>
      useGetRepoBranches('user123', 'repo123'),
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(true);
      expect(result.current.branches).toEqual([]);
    });
  });

});
