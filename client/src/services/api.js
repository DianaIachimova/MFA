const BASE_URL = 'http://localhost:3333';

async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }
  return response.json();
}

const api = {
  async get(url, params = {}, headers = {}) {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'x-access-token': token }),
        ...headers
      }
    });
    return handleResponse(response);
  },

  async post(url, data = {}, headers = {}) {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'x-access-token': token }),
        ...headers
      },
      body: JSON.stringify(data)
    });
    return handleResponse(response);
  },

  async put(url, data = {}, headers = {}) {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'x-access-token': token }),
        ...headers
      },
      body: JSON.stringify(data)
    });
    return handleResponse(response);
  },

  async delete(url, headers = {}) {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'x-access-token': token }),
        ...headers
      }
    });
    return handleResponse(response);
  }
};

export default api;