import { API_ENDPOINTS } from "./api";


//RegisterUser
export const registerUser = async (data) => {
    const formData = new FormData();
    // Map frontend fields to backend expected keys
    formData.append("name", data.fullName);
    formData.append("email", data.email);
    formData.append("mobile", data.phone);
    formData.append("password", data.password);
    formData.append("password_confirmation", data.password_confirmation || data.password);
    const cc = String(data.countryCode || "").replace(/[^0-9]/g, "");
    formData.append("mobile_country_code", cc);
    // optional fields per API collection
    formData.append("type", data.type || "client");
    formData.append("fcm_token", data.fcm_token || "test");
  
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: formData,
    });
  
    return await res.json();
  };
  
  //VerifyAccount
  export const verifyAccount = async (token, code) => {
    const formData = new FormData();
    formData.append("code", code);
  
    const res = await fetch("/api/auth/verify-email", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
  
    return await res.json();
  };
  
  //ResendVerifyCode
  export const resendVerifyCode = async (token) => {
    const res = await fetch("/api/auth/verify-email/resend-code", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return await res.json();
  };
  
  //LoginUser
  export const loginUser = async (email, password) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
  
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: formData,
    });
  
    return await res.json();
  };
  
  //GetUserData
  export const getUserData = async (token) => {
    const res = await fetch(API_ENDPOINTS.USER_DATA, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return await res.json();
  };
  
  //Logout
  export const logoutUser = async (token) => {
    const res = await fetch(API_ENDPOINTS.LOGOUT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return await res.json();
  };

// Products
export const getProductById = async (id) => {
  const res = await fetch(`${API_ENDPOINTS.BASE_URL}/products/${id}`, {
    method: "GET",
    // Disable caching to always get fresh data; adjust as needed
    next: { revalidate: 0 },
  });
  return await res.json();
};