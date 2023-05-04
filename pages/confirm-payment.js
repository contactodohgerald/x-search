import { useEffect, useState } from "react";
import Error from "../components/Error";
import SeoHead from "../components/SeoHead";
import Success from "../components/Success";
import services from "../config/services";
import axios from "axios";
import api_urls from "../config/urls";


export default function confirmPayment() {
    const [message, setMessage] = useState("")
    const [loaded, setLoaded] = useState(false);
    const status = services.getUrlParams("status");
    const tx_ref = services.getUrlParams("tx_ref");
    const transaction_id = services.getUrlParams("transaction_id");
    const user_id = services.getSession('token');

    

    useEffect(async () => {
        setLoaded(true)
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user_id.token}`
        }

        await axios
          .post(api_urls.verify_payment, {status, tx_ref, transaction_id}, {headers: headers})
          .then((response) => {
            const res = response.data;
            setMessage(res.message);
          })
          .catch((error) => {
            setMessage(error.message);
          })
          .finally(() => setLoaded(false));
    }, []);

    return (
        <>
            <SeoHead title='X-Search' />
            {status == "completed" ? (
                <Success loaded={loaded} message={message} />
            ) : (
                <Error loaded={loaded} message={message} />
            )}        
        </>
    )
}
