import apiRequest from "../utils/http";

export const createRoomApi = data => apiRequest.post('/chat/createRoom', data)
export const getPublicChatsApi = _ => apiRequest.get('/chat/getPublicChats')
export const getRoomChatsApi = roomId => apiRequest.get(`/chat/getRoomChats/${roomId}`)
export const getAllRoomsApi = roomId => apiRequest.get(`/chat/getAllRooms`)

