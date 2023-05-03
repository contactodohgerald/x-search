const baseUrl = "http://localhost:8000/api/v1";

const api_urls = {
    register: baseUrl+'/auth/register-user',
    resend_code: baseUrl+'/auth/resend-code',
    verify_code: baseUrl+'/auth/verify-user',
    login: baseUrl+'/auth/login-user',
    reset_password: baseUrl+'/auth/reset-password',
}

export default api_urls;