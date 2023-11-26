import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { afterAll, afterEach, beforeAll, expect } from 'vitest';
import { server } from '../mock/api/server';

expect.extend(matchers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
// beforeAll(() => {
//   server.listen({ onUnhandledRequest: 'error' });
//   vi.mock('next/router', () => require('next-router-mock'));
// });
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
