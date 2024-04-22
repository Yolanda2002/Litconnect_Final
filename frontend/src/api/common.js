import apiRequest from "../utils/http";

export const   uploadImg  = data =>  apiRequest.upload('/upload', data)
