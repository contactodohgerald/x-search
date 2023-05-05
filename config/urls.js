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
    news_letter: baseUrl+'/news-letter',
    contact_us: baseUrl+'/contact-us',

    //get request
    get_plans: baseUrl+'/get-plans',
    get_user_plans: baseUrl+'/get-current-plan',
    get_user_trans: baseUrl+'/get-user-trans',
    get_site_details: baseUrl+'/site-details',
}

export default api_urls;