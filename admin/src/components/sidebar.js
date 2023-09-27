import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            <img
              src="/images/logo2.png"
              style={{ height: '64px', marginLeft: '12px' }}
              className="logo"
              alt="Ecommerce dashboard template"
            />
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              <NavLink activeClassName="active" className="menu-link" to="/" exact={true}>
                <i className="icon fas fa-home"></i>
                <span className="text">Dashboard</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeClassName="active" className="menu-link" to="/products">
                <i className="icon fas fa-shopping-bag"></i>
                <span className="text">Sản phẩm</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeClassName="active" className="menu-link" to="/categories">
                <i className="icon fas fa-list"></i>
                <span className="text">Thể loại</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeClassName="active" className="menu-link" to="/orders">
                <i className="icon fas fa-bags-shopping"></i>
                <span className="text">Đơn hàng</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeClassName="active" className="menu-link" to="/users">
                <i className="icon fas fa-user"></i>
                <span className="text">Người dùng</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeClassName="active" className="menu-link" to="/banners">
                <i className="icon fas fa-store-alt"></i>
                <span className="text">Banner</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeClassName="active" className="menu-link" to="/vouchers">
                <i className="icon fas fa-store-alt"></i>
                <span className="text">Mã giảm giá</span>
              </NavLink>
            </li>
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
