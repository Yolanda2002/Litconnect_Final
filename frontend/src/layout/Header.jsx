import {NavBar , Space , Toast} from "antd-mobile";
import {useSelector} from "react-redux";
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'
import { useNavigate } from "react-router-dom";

function Header() {
    const nav = useNavigate();
    const right = (
        <div style={{ fontSize: 24 }}>
          <Space style={{ '--gap': '16px' }}>
          </Space>
        </div>
      )
    
      const back = () =>nav(-1)
       
    const isShow = useSelector(state => state.header.isShow)
    if(!isShow){
        return <></>
    }
    return (
        <div className="Header">
             <NavBar right={right} onBack={back}>
              {/* <><b>Litconnect:     </b></> */}
              {/* <br></br> */}
              <b>Book Reviews Webpage</b>
            </NavBar>
        </div>
    );
}

export default Header;
