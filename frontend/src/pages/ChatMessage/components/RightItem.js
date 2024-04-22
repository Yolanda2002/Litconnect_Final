import React from "react";
import './RightItem.scss'
import {useSelector} from "react-redux";
import {IMGURL} from "../../../const";

function RightItem(props) {
    const { username, profile_picture } = useSelector(state => state.user.userinfo);
    return (
        <div className="right-item-container">
            <img className="right-item-head"  src={IMGURL + profile_picture}/>
            <div className="right-item-content">
                <Content msg={props.msg}/>
            </div>
        </div>
    )
}

function Content(props) {
    if (props.msg.type === 1) {
        return <div className="right-item-text">
            {props.msg.content}
        </div>
    } else if (props.msg.type === 2) {
        return <img className="right-item-img" src={props.msg.content}/>
    }
}

export default RightItem
