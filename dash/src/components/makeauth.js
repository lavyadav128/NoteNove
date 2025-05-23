export const makeAuthenticatedRequest = async (url, method = 'GET', body = null) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error('No authentication token found');
    }
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
  
    const config = {
      method,
      headers,
    };
  
    if (body) {
      config.body = JSON.stringify(body);
    }
  
    const response = await fetch(url, config);
    
    // First check if response is HTML
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('text/html')) {
      const html = await response.text();
      throw new Error(`Server returned HTML (likely 404). Status: ${response.status}`);
    }
  
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || `Request failed with status ${response.status}`);
    }
  
    return response.json();
  };