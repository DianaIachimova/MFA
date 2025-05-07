const defaultHeaders = {
  "Content-Type": "application/json",
};
const defaultBaseUrl = "http://localhost:3333";

export class ApiService {
  constructor(baseUrl = defaultBaseUrl, headers = defaultHeaders) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  get(url, params = {}, headers = {}) {
    const searchParams = new URLSearchParams(params);

    return fetch(`${this.baseUrl}${url}${params ? `?${searchParams}` : ''}`, {
      method: "GET",
      headers: { ...this.headers, ...headers },
    }).then((response) => response.json());
  }

  put(url, body, headers = {}) {
    return fetch(`${this.baseUrl}${url}`, {
      method: "PUT",
      headers: { ...this.headers, ...headers },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  post(url, body, headers = {}) {
    return fetch(`${this.baseUrl}${url}`, {
      method: "POST",
      headers: { ...this.headers, ...headers },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  patch(url, body, headers = {}) {
    return fetch(`${this.baseUrl}${url}`, {
      method: "PATCH",
      headers: { ...this.headers, ...headers },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  delete(url, body = {}, headers = {}) {
    return fetch(`${this.baseUrl}${url}`, {
      method: "DELETE",
      headers: { ...this.headers, ...headers },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
}

const api = new ApiService();

export default api;
