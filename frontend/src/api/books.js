import apiRequest from "../utils/http";

export const createBook = data => apiRequest.post('/book/create', data)
export const getAllBookReviews = data => apiRequest.get('/book/getAllBookReviews',data)
// /myBookReviews
export const  delpinglun = commentId => apiRequest.post('book/deleteComment',{commentId})
export const getAllBookDetailBuID = id => apiRequest.get(`/book/bookReview/${id}`)
export const getAllBookBuId = id => apiRequest.get(`/book/myBookReviews`)
export const bookLike = data => apiRequest.post('/book/review/like', data)
export const bookFavorite = data => apiRequest.post('/book/review/favorite', data)
export const bookDelete = reviewId => apiRequest.post('/book/deleteBookReview', {reviewId})

export const bookCommentReview = data =>  apiRequest.post('/book/commentReview', data)
export const bookCommentReviewList = bookId =>  apiRequest.get(`/book/bookReviewComments/${bookId}`)
export const myBookLikeList = _ =>  apiRequest.get(`/book/myLikes`)
export const myFavoritesList = _ =>  apiRequest.get(`/book/myFavorites`)

export const myYearlyStats = _ =>  apiRequest.get(`/book/myYearlyStats`)
