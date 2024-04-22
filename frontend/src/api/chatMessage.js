import apiRequest from "../utils/http";

export const   questionChat  = question =>  apiRequest.post('/chatMessage', {question})
