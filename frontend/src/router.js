import {
    AppOutline,
    MessageOutline,
    UnorderedListOutline,
    SetOutline, SmileOutline, HistogramOutline,
} from 'antd-mobile-icons'
import { BsRobot } from "react-icons/bs";

export const mateRouter = [
    {
        path: "/books",
        key: "/books",
        title:'Dashboard',
        icon:<HistogramOutline />,
    },
    {
        path: "/chat-message",
        key: "/chat-message",
        title:'AI',
        icon: <SmileOutline />,
    },
    {
        path: "/recommendations",
        key: "/recommendations",
        title:'Reviews',
        icon: <UnorderedListOutline />,
    },
    {
        path: "/chat",
        key: "/chat",
        title:'Chat',
        icon: <MessageOutline />,
    },
    {
        path: "/me",
        key: "/me",
        title:'Me',
        icon: <SetOutline />,
    },
]
