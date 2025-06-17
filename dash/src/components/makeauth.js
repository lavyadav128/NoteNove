// export const makeAuthenticatedRequest = async (url, method = 'GET', body = null) => {
//     const token = localStorage.getItem('token');
    
//     if (!token) {
//       throw new Error('No authentication token found');
//     }
  
//     const headers = {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`,
//     };
  
//     const config = {
//       method,
//       headers,
//     };
  
//     if (body) {
//       config.body = JSON.stringify(body);
//     }
  
//     const response = await fetch(url, config);
    
//     // First check if response is HTML
//     const contentType = response.headers.get('content-type');
//     if (contentType && contentType.includes('text/html')) {
//       const html = await response.text();
//       throw new Error(`Server returned HTML (likely 404). Status: ${response.status}`);
//     }
  
//     if (!response.ok) {
//       const error = await response.text();
//       throw new Error(error || `Request failed with status ${response.status}`);
//     }
  
//     return response.json();
//   };






export const makeAuthenticatedRequest = async (url, method = 'GET', body = null, timeout = 10000) => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('No authentication token found');
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  const config = {
    method,
    headers,
    signal: controller.signal,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);
    clearTimeout(timeoutId);

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('text/html')) {
      const html = await response.text();
      throw new Error(`Server returned HTML (likely 404). Status: ${response.status}`);
    }

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || `Request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error('Request timed out. Please try again.');
    }
    throw err;
  }
};
