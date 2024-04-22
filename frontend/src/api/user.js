import apiRequest from "../utils/http";

export const loginApi = data => apiRequest.post('/user/login', data)
export const regApi = data => apiRequest.post('/user/register', data)
export const updateImg = avatarUrl => apiRequest.post('/user/updateAvatar', {avatarUrl})