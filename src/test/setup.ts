import '@testing-library/jest-dom';
import { beforeEach } from 'vitest';

// Simply clear jsdom's built-in localStorage before each test
// jsdom provides its own localStorage implementation that we can use directly
beforeEach(() => {
  window.localStorage.clear();
  window.sessionStorage.clear();
});
