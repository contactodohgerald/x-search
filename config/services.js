
export const getUrlParams = query => {
    if(typeof window !== 'undefined'){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const response = urlParams.get(query);
        return response;
    }
}

export const storageAvailable = type => {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
}
  
export const setSession = (key, value) => {
    if(typeof window !== 'undefined'){
        window.sessionStorage.setItem(key, value);
    }
    return true;
}

export const getSession = (key) => {
    if(typeof window !== 'undefined'){
        const respond = window.sessionStorage.getItem(key);
        return JSON.parse(respond);
    } 
}

export const clearSession = () => {
    if(typeof window !== 'undefined'){
        window.sessionStorage.clear();
    }
    return true;
}

export const download = (answer) => {
    if (answer != "") return false

    const link = document.createElement("a");
    link.href = `data:text/plain;charset=utf-8,${encodeURIComponent(answer)}`;
    link.download = "coverletter.pdf";
    link.click();  
    return true
};

export const copy = (answer) => {
    if (answer != "") return false
    navigator.clipboard.writeText(answer);
    return true
};