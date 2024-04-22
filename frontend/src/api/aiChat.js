import apiRequest from "../utils/http";

export const addChatAi = data => apiRequest.post('/aiChat/addChat', data)
export const getChatAi = data => apiRequest.get('/aiChat/getChats', data)

