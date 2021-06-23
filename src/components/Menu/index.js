import menuData from './../../data/Menu.json';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import './Menu.css'

const Menu = () => {
    return (
        <aside className="sidenav">
            <nav>
                <ul>
                    {menuData.routes.map((route, key) => route.submenu ? <SubMenu key={key} {...route} /> : <li key={key}><Link to={route.path}>{route.name}</Link></li>)}
                </ul>
            </nav>
        </aside>
    );
}

const SubMenu = (route) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }
    return (
        <li className="dropdown">
            <button className="dropbtn" onClick={showSidebar}>{route.name} {sidebar ? <FaAngleUp /> : <FaAngleDown />}</button>
            {sidebar ?
                <ul className="dropdown-content">
                    {route.submenu.map((obj, i) => <li key={i}><Link onClick={() => showSidebar()} to={{ pathname: `/${route.path}/${obj.id}/${encodeURIComponent(obj.name)}` }}>{obj.name}</Link></li>)}
                </ul>
                : <></>
            }
        </li>
    );
}

export default Menu;