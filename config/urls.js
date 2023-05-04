const baseUrl = "http://localhost:8000/api/v1";

const api_urls = {
    //post request
    register: baseUrl+'/auth/register-user',
    resend_code: baseUrl+'/auth/resend-code',
    verify_code: baseUrl+'/auth/verify-user',
    login: baseUrl+'/auth/login-user',
    reset_password: baseUrl+'/auth/reset-password',
    subscribed: baseUrl+'/create-subscription',
    verify_payment: baseUrl+'/verify-payment',
    auth_search: baseUrl+'/search-query-auth',
    free_search: baseUrl+'/search-query-free',
    update_password: baseUrl+'/auth/update-password',

    //get request
    get_plans: baseUrl+'/get-plans',
}

export default api_urls;