import { Link } from "react-router-dom";
import sidebarNav from "../../configs/sideNav";
import "./SidebarMenuItem.scss";

const SidebarMenuItem = () => {
  return (
    <>
      {sidebarNav?.map((item, index) => (
        <div key={`item-${index}`} className="sidebar__wrapper__menu">
          <h3 className="sidebar__wrapper__menu__title">{item.heading}</h3>
          <ul className="sidebar__wrapper__menu__list">
            <Link to={item.menu[0].link} className="link">
              <li className="sidebar__wrapper__menu__list__item active">
                {item.menu[0].icon}
                {item.menu[0].section}
              </li>
            </Link>
            <Link to={item.menu[1].link} className="link">
              <li className="sidebar__wrapper__menu__list__item">
                {item.menu[1].icon}
                {item.menu[1].section}
              </li>
            </Link>

            <Link to={item.menu[2].link} className="link">
              <li className="sidebar__wrapper__menu__list__item">
                {item.menu[2].icon}
                {item.menu[2].section}
              </li>
            </Link>
          </ul>
        </div>
      ))}
    </>
  );
};

export default SidebarMenuItem;
