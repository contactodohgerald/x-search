import { useEffect, useState } from "react";
import Error from "../components/Error";
import SeoHead from "../components/SeoHead";
import Success from "../components/Success";
import { getUrlParams } from "../config/services";
import { injectStyle } from "react-toastify/dist/inject-style";
import post_request from "../config/post.request";


export default function confirmPayment() {
    const [message, setMessage] = useState("")
    const [loaded, setLoaded] = useState(false);
    const status = getUrlParams("status");
    const tx_ref = getUrlParams("tx_ref");
    const transaction_id = getUrlParams("transaction_id");

    const verifyUserPayment = async (status, tx_ref, transaction_id) => {
        setLoaded(true) 
        await post_request.verifyPayment(status, tx_ref, transaction_id)
        .then((res) => {
            setMessage(res,data.message);
        })
        .catch((err) => {
            setMessage(err.response.data.message);
        })
        .finally(() => setLoaded(false));
    }

    useEffect(async () => {
        injectStyle()

        await verifyUserPayment(status, tx_ref, transaction_id);
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
