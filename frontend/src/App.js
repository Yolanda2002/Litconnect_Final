import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute'; // 引入你创建的 ProtectedRoute 组件

// 页面组件
import Login from './pages/Login';
import Reg from './pages/Reg';
import Books from './pages/Books';
import CreateRoom from './pages/CreateRoom';
import Recommendations from './pages/Recommendations';
import RecommendationsDetail from './pages/Recommendations/detail';
import Setting from './pages/Setting';
import Me from './pages/Me';
import BookReview from './pages/Me/BookReview';
import MyLike from './pages/Me/MyLike';
import MyBookCollection from './pages/Me/MyBookCollection';
import Chat from './pages/Chat';
import RoomChat from './pages/RoomChat';
import ChatMessage from './pages/ChatMessage'
import UserInfo from './pages/Setting/UserInfo';
import BooksAdd from './pages/Recommendations/add';
import {useSelector} from "react-redux";

function App() {
    let isLoggedIn = useSelector(state => state.token.value)
    isLoggedIn =!!isLoggedIn;
    return (
        <Routes>
            <Route path="/" element={isLoggedIn ? <Navigate to="/books" /> : <Login />} />
            <Route path="/reg" element={isLoggedIn ? <Navigate to="/books" /> : <Reg />} />
            <Route path="/books" element={<ProtectedRoute><Books/></ProtectedRoute>} />
            <Route path="/me" element={<ProtectedRoute><Me/></ProtectedRoute>} />
            <Route path="/chat-message" element={<ProtectedRoute><ChatMessage/></ProtectedRoute>} />
            <Route path="/meLike" element={<ProtectedRoute><MyLike/></ProtectedRoute>} />
            <Route path="/meCollection" element={<ProtectedRoute><MyBookCollection/></ProtectedRoute>} />
            <Route path="/meReview" element={<ProtectedRoute><BookReview/></ProtectedRoute>} />
            <Route path="/chat" element={<ProtectedRoute><Chat/></ProtectedRoute>} />
            <Route path="/roomChat/:roomId" element={<ProtectedRoute><RoomChat/></ProtectedRoute>} />
            <Route path="/createRoom" element={<ProtectedRoute><CreateRoom/></ProtectedRoute>} />
            <Route path="/userInfo" element={<ProtectedRoute><UserInfo/></ProtectedRoute>}/>
            <Route path="/recommendations" element={<ProtectedRoute><Recommendations/></ProtectedRoute>} />
            <Route path="/recommendations/add" element={<ProtectedRoute><BooksAdd/></ProtectedRoute>} />
            <Route path="/recommendations/:id" element={<ProtectedRoute><RecommendationsDetail/></ProtectedRoute>} />
        </Routes>
    );
}

export default App;
