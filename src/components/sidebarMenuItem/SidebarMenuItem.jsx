import sidebarNav from "../../configs/sideNav";
import "./SidebarMenuItem.scss";

const SidebarMenuItem = () => {
  return (
    <>
      {sidebarNav?.map((item, index) => (
        <div key={`item-${index}`} className="sidebar__wrapper__menu">
          <h3 className="sidebar__wrapper__menu__title">{item.heading}</h3>
          <ul className="sidebar__wrapper__menu__list">
            <li className="sidebar__wrapper__menu__list__item active">
              {item.menu[0].icon}
              {item.menu[0].section}
            </li>
            <li className="sidebar__wrapper__menu__list__item">
              {item.menu[1].icon}
              {item.menu[1].section}
            </li>

            <li className="sidebar__wrapper__menu__list__item">
              {item.menu[2].icon}
              {item.menu[2].section}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default SidebarMenuItem;
