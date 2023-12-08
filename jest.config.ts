import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  }
  // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};

export default config;
