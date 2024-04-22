import {Button} from "antd-mobile";
import Header from "./Header";
import Footer from "./Footer";

function Layout({children}) {
    return (
        <div className="Layout flex flex-col h-full">
            <Header/>
            <section className='flex-1 overflow-auto bg-slate-100 relative'>
                {
                    children
                }
            </section>
            <Footer/>
        </div>
    );
}

export default Layout;
