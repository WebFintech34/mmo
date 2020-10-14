import React, { useContext } from "react";
import UserContext from "../../userContext";
var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.dashboard, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };
    render() {
        const { bgColor, routes, rtlActive, logo } = this.props;
        let logoImg = null;
        let logoText = null;
        if (logo !== undefined) {
          if (logo.outterLink !== undefined) {
            logoImg = (
              <a
                href={logo.outterLink}
                className="simple-text logo-mini"
                target="_blank"
                onClick={this.props.toggleDashboard}
              >
                <div className="logo-img">
                  <img src={logo.imgSrc} alt="react-logo" />
                </div>
              </a>
            );
            logoText = (
              <a
                href={logo.outterLink}
                className="simple-text logo-normal"
                target="_blank"
                onClick={this.props.toggleDashboard}
              >
                {logo.text}
              </a>
            );
          } else {
            logoImg = (
              <Link
                to={logo.innerLink}
                className="simple-text logo-mini"
                onClick={this.props.toggleDashboard}
              >
                <div className="logo-img">
                  <img src={logo.imgSrc} alt="react-logo" />
                </div>
              </Link>
            );
            logoText = (
              <Link
                to={logo.innerLink}
                className="simple-text logo-normal"
                onClick={this.props.toggleDashboard}
              >
                {logo.text}
              </Link>
            );
          }
        }
        return (
          <div className="sidebar" data={bgColor}>
            <div className="sidebar-wrapper" ref="sidebar">
              {logoImg !== null || logoText !== null ? (
                <div className="logo">
                  {logoImg}
                  {logoText}
                </div>
              ) : null}
              <Nav>
                {routes.map((prop, key) => {
                  if (prop.redirect) return null;
                  return (
                    <li
                      className={
                        this.activeRoute(prop.path) +
                        (prop.pro ? " active-pro" : "")
                      }
                      key={key}
                    >
                      <NavLink
                        to={prop.layout + prop.path}
                        className="nav-link"
                        activeClassName="active"
                        onClick={this.props.toggleDashboard}
                      >
                        <i className={prop.icon} />
                        <p>{rtlActive ? prop.rtlName : prop.name}</p>
                      </NavLink>
                    </li>
                  );
                })}
                <li
                  className="active-pro"
                >
                </li>
              </Nav>
            </div>
          </div>
        );
    }
};

Dashboard.defaultProps = {
    rtlActive: false,
    bgColor: "primary",
    routes: [{}]
  };
  
  Dashboard.propTypes = {
    // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
    // insde the links of this component
    rtlActive: PropTypes.bool,
    bgColor: PropTypes.oneOf(["primary", "blue", "green"]),
    routes: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
      // innerLink is for links that will direct the user within the app
      // it will be rendered as <Link to="...">...</Link> tag
      innerLink: PropTypes.string,
      // outterLink is for links that will direct the user outside the app
      // it will be rendered as simple <a href="...">...</a> tag
      outterLink: PropTypes.string,
      // the text of the logo
      text: PropTypes.node,
      // the image src of the logo
      imgSrc: PropTypes.string
    })
  };

export default Dashboard;
