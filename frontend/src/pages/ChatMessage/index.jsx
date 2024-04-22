import React from "react";
// import {getChatResponse} from "./api/ApiChat";
import './Chat.scss'
import RightItem from "./components/RightItem";
import LeftItem from "./components/LeftItem";
import {Button, TextArea} from "antd-mobile";
import {IoSendSharp} from "react-icons/io5";
import {questionChat} from "../../api/chatMessage";
import apiRequest from "../../utils/http";
import {addChatAi, getChatAi} from "../../api/aiChat";

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            text: '',
            msglist: [{
                id: 1,
                type: 1,
                content: 'hello！',
                me: false
            }]
        }
    }
    loadChats = () => {
        this.setState({ loading: true });
        getChatAi().then(chats => {
            this.setState({ msglist: chats.map(item=>({...item,me:item.is_me})), loading: false });
        }).catch(error => {
            console.error('Error loading chats:', error);
            this.setState({ loading: false });
        });
    }
    componentDidMount() {
        this.loadChats();
    }
    //调用接口
    getResponse =  (text) => {
        this.state.loading = true
        try {
            questionChat(text).then(async res=>{
                this.state.msglist.push({
                    id: new Date().getTime(),
                    type: 1,
                    content:res.data.correctness,
                    me: false
                })
                await addChatAi({
                    content:res.data.correctness,
                    is_me: false
                })
                this.setState({
                    msglist: this.state.msglist,
                })
            }).catch(err=>{
                console.log(err)
                this.state.loading = false;
            }).finally(()=>{
                this.state.loading = false;
            })
        }catch (e){
            this.state.loading = false
        }
            // this.state.msglist.push({
            //     id: this.state.msglist[this.state.msglist.length - 1].id + 1,
            //     type: 1,
            //     content: 'shabi',
            //     me: false
            // })

        // getChatResponse(text).then(res => {
        //     this.state.msglist.push({
        //         id: this.state.msglist[this.state.msglist.length - 1].id + 1,
        //         type: 1,
        //         content: res.data.answer,
        //         me: false
        //     })
        //     this.setState({
        //         msglist: this.state.msglist,
        //     })
        // })
    }

    //输入框数据改变时同步state
    changeText = (e) => {
        this.setState({
            text: e
        })
    }

    //监听enter键
    onKeyup = (e) => {
        if (e.keyCode === 13) {
            this.send()
        }
    }

    //发送文本
    send = async () => {
        if (this.state.text) {
            this.state.msglist.push({
                // id: this.state.msglist[this.state.msglist.length - 1].id + 1,
                id: new Date().getTime(),
                type: 1,
                content: this.state.text,
                me: true
            })

            await addChatAi({
                content:this.state.text,
                is_me: true
            })
            this.setState({
                msglist: this.state.msglist,
                text: ''
            })
            this.getResponse(this.state.text)
        }
    }

    //自动滚动到底部
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({behavior: "smooth"});
    }

    //数据更新时执行scrollToBottom
    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div className='h-full flex flex-col'>
                <div className="chat-container flex-1 overflow-y-auto">
                    <div className="chat-list">
                        <ul>
                            <ListItem list={this.state.msglist}/>
                        </ul>
                        <div style={{float: "left", clear: "both"}}
                             ref={(el) => {
                                 this.messagesEnd = el;
                             }}>
                        </div>
                    </div>


                </div>
                <div className='px-4 shadow-2xl bg-white  pb-4 flex'>
                    <div className='border py-3  border-primary text-white px-2 rounded-md mt-4 mb-2 flex-1'>
                        <TextArea
                            placeholder="Write your message here"
                            value={this.state.text}
                            onChange={this.changeText}
                        />
                        <div className='flex justify-end'>
                            <Button color='primary' size='small' fill='outline' loading={this.state.loading} onClick={this.send} className='flex'>
                                <div className='flex items-center p-1'>
                                            <span className='mr-2' onClick={this.send}>
                                                Send
                                            </span> <IoSendSharp size={20} className='text-lg'/>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
                {/*<div className="chat-bottom">*/}
                {/*    <div className="chat-line"/>*/}
                {/*    <div className="chat-input-send">*/}
                {/*        <input placeholder="请输入内容..." value={this.state.text} onChange={this.changeText}*/}
                {/*               className="chat-input" onKeyUp={this.onKeyup}/>*/}
                {/*        <button className="chat-send" onClick={this.send}>发送</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

        )
    }

}

function ListItem(props) {
    return props.list.map(item => {
        if (item.me) {
            return <li  key={item.id}><RightItem msg={item}/></li>
        } else {
            return <li key={item.id}><LeftItem msg={item}/></li>
        }
    })
}


export default Chat
