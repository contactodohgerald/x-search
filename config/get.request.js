import axios from "axios";
import api_urls from "./urls";
import { getSession } from "./services";

const _response =  getSession('token')

class GetRequestServices {

    constructor () {
        this.header = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${_response ? _response.data.token : ''}`
        }
    }
    
    //get active user details
    async getUserActivePlan() {
        return await axios.get(api_urls.get_user_plans,  {
            headers: this.header
        })
    }

    async getUserSearchTrack() {
        return await axios.get(api_urls.search_track)
    }  

    async searchHistory() {
        return await axios.get(api_urls.search_history, {
            headers: this.header
        })
    }    

    //get transaction details for users
    async getUserTransHistory() {
        return await axios.get(api_urls.get_user_trans,  {
            headers: this.header
        })
    }

    //get sitedetails
    async getSiteDetails() {
        return await axios.get(api_urls.get_site_details)
    }
    
    async getSitePlans() {
        return await axios.get(api_urls.get_plans)
    }

}

const get_request = new GetRequestServices()
export default get_request