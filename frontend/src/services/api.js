const API_BASE_URL = "http://localhost:3001";
const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};
const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error, status: ${response.status}`);
  }
  return await response.json();
};

export const productsAPI = {
  getAll: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      return await handleResponse(response);
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
  getById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      return await handleResponse(response);
    } catch (error) {
      console.error("Error fetching product, not foound:", error);
      throw error;
    }
  },
  create: async (product) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`, {
        ...defaultOptions,
        method: "POST",
        body: JSON.stringify(product),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  },
};

export const ordersAPI = {
  create: async (order) => {
    try {
      const response = await fetch(`${API_BASE_URL}/orders`, {
        ...defaultOptions,
        method: "POST",
        body: JSON.stringify(order),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  },
};

export const checkServerHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products?_limit=1`);
    return response.ok;
  } catch (error) {
    console.error("Error server verification:", error);
    return false;
  }
};
