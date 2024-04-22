import {Button, TabBar} from "antd-mobile";
import {mateRouter} from '../router'
import {useDispatch} from "react-redux";
import {actions} from  '../slices/header'
import {useLocation, useNavigate } from "react-router-dom";
function Footer() {
    const nav =  useNavigate();



    const location = useLocation()
    const { pathname } = location;
    
    const setRouteActive = (value) => {
      nav(value)
    }

    if(['/','/reg'].includes(pathname)){
        return null
    }

    return (
        <TabBar  activeKey={pathname} onChange={value => setRouteActive(value)}>
            {mateRouter.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    );
}

export default Footer;
