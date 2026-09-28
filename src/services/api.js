// Base API Configuration

// This enables easy replacement of mock data with real backend endpoints later.
// Assuming the backend might run on a different port.
const API_BASE_URL = 'http://localhost:8080/api';

/**
 * A helper to simulate network delay for mock services.
 */
export const delay = (ms = 800) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * A generalized API client fetcher.
 * Currently this is a placeholder for real backend integration.
 */
export async function apiCall(endpoint, options = {}) {
  // In a real application, this would use fetch() or axios.
  console.warn(`[API] Mock call to ${API_BASE_URL}${endpoint}`);

  /*
  Example real API implementation:

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error('API Error');
  }

  return response.json();
  */

  return Promise.resolve();
}