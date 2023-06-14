import axios from "axios";
import api_urls from "./urls";
import { getSession } from "./services";

const _response =  getSession('token')

class PostRequestServices {

    constructor () {
        this.header = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${_response ? _response.data.token : ''}`
        }
    }
    
    async registerUser(data) {
        return await axios.post(api_urls.register, data)
    }     
    
    async loginUser(data) {
        return await axios.post(api_urls.login, data)
    }     
    
    async resendAuthCode(user_id, type) {
        return await axios.post(api_urls.resend_code, {user_id, type})
    } 
    
    async verifyAuthCode(data) {
        return await axios.post(api_urls.verify_code, data)
    }   
    
    async resetPassword(data) {
        return await axios.post(api_urls.reset_password, data)
    }  
    
    async tryOutNotify(query) {
        return await axios.post(api_urls.free_search, {query})
    }  
    
    async authSearch(query) {
        return await axios.post(api_urls.auth_search, {query}, {
            headers: this.header
        })
    }
    
    async contactUs(data) {
        return await axios.post(api_urls.contact_us, data)
    }   
    
    async newsLetter(data) {
        return await axios.post(api_urls.news_letter, data)
    }  
    
    async makePayment(plan_id, type) {
        return await axios.post(api_urls.subscribed, {plan_id, type}, {
            headers: this.header
        })
    } 
    
    async verifyPayment(status, tx_ref, transaction_id) {
        return await axios.post(api_urls.verify_payment, {status, tx_ref, transaction_id}, {
            headers: this.header
        })
    }
    
    async updatePassword(data) {
        return await axios.post(api_urls.update_password, data, {
            headers: this.header
        })
    }

}

const post_request = new PostRequestServices()
export default post_request