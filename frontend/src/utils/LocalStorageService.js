function tryParseJSON(str) {
    try {
        return JSON.parse(str);
    } catch (error) {
        // 如果解析失败，返回原始字符串
        return str;
    }
}
const LocalStorageService = {
    setItem(key, value) {

        if(value === ''){
            LocalStorageService.removeItem(key)
            return;
        }

        try {
            if(typeof value === "object"){
                value = JSON.stringify(value)
            }
            localStorage.setItem(key, value);
        } catch (error) {
            console.error("Error setting item in localStorage:", error);
        }
    },
    getItem(key) {
        try {
            const value = localStorage.getItem(key);
            const parsedValue = tryParseJSON(value);
            return typeof parsedValue === 'object' ? parsedValue : value;
        } catch (error) {
            console.error("Error getting item from localStorage:", error);
            return null;
        }
    },
    removeItem(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error("Error removing item from localStorage:", error);
        }
    }
};

export default LocalStorageService;
