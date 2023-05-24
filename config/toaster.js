import { createToast } from "vercel-toast";


const toaster = (message, type) => {    
    const toast = createToast(message, {
        timeout: 3000, type
    });
    return toast;
}

export default toaster