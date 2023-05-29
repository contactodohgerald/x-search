import { useEffect, useMemo, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import getScrollAnimation from "../../utils/getScrollAnimation";
import Textarea from "../misc/Textarea";
import CopyIcon from "../misc/CopyIcon";
import DownloadIcon from "../misc/DownloadIcon";
import Loader from "./Loader";
import services from "../../config/services";
import post_request from "../../config/post.request";
import { toast } from "react-toastify";


function SearchHistory() {
    const [loaded, setLoaded] = useState(false);
    const [history, setHistory] = useState([]);
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    const copyPrompt = () => {
        setLoaded(true);
        const response = services.copy(answer)
        if(response){
          toast.success("copied!");   
        }
        setLoaded(false);
    };

    const downloadPrompt = () => {
    setLoaded(true);
    const response = services.download(answer)
    if(response){
        toast.success("downloaded!");   
    }
    setLoaded(false);
    };

    useEffect(async () => {
        const ip_address = await services.getUserIp();
        await post_request.searchHistory(ip_address)
          .then((res) => {
              setHistory(res.data.data);
          })
          .catch((err) => {
            if(err.message =='Network Error'){
                console.error('Network Error', err.message)
            }else if(err.response.statusText == 'Bad Request'){
                console.error('Bad Request', err.response.data.message)
            }else{
                console.info('error info', err.response.data.message)
            }
          })
    }, []);

    return (
        <>
        <ScrollAnimationWrapper>
            <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-2xl lg:text-3xl text-center font-medium text-black-600 leading-normal w-9/12 sm: mx-auto mb-5"
            >
            Search History
            </motion.h3>
        </ScrollAnimationWrapper>

        <div className="">
            {history.length == 0 ? 
                <div className="mt-0 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
                    <h3 className="text-2xl text-orange-500 font-semibold text-center">
                        You have no search history at the moment
                    </h3>
                </div> 
            : 
                <Tabs value="html" orientation="vertical">
                    <TabsHeader className="lg:w-80 w-32">
                    {history.map(({ query, _id }) => (
                        <Tab key={_id} value={_id} className="border border-grey-500 hover:bg-orange-100 rounded-l-full rounded-r-full">
                            {query.length > 10 ? `${query.substring(0, 10)}....` : query }
                        </Tab>
                    ))}
                    </TabsHeader>
                    <TabsBody>
                    {history.map(({ _id, answer }) => (
                        <TabPanel key={_id} value={_id} className="py-0">
                            <div className="static">
                                <Textarea
                                    name="answer"
                                    rows="10"
                                    defaultValue={answer}
                                />
                                <div class="absolute lg:top-10 top-5 right-6 flex space-x-2">
                                {loaded ?  <Loader type="button" /> : <>
                                    <CopyIcon onClick={copyPrompt} />
                                    <DownloadIcon onClick={downloadPrompt} />
                                </>}
                                </div>
                            </div>
                        </TabPanel>
                    ))}
                    </TabsBody>
                </Tabs>
            }
         </div>
        </>
    );
}

export default SearchHistory;
