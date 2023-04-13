import React from "react";
import { Link } from "react-router-dom";
import logo from "../../commonResource/images/icons/logo-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";

function Header() {
  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="#">
              <img src={logo} />
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/mac">
                    mac
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/iphone/">
                    iphone
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/">
                    ipad
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="#">
                    watch
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="#">
                    tv
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="#">
                    Music
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="#">
                    Support
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search/">
                    <img src={search} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/cart/">
                    <img src={cart} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
