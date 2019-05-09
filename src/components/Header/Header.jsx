import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import { Link } from 'gatsby';
import { map } from 'rxjs/operators';
import { scrollEvent } from '../../util/scrollTrack';
import MenuIcon from '../MenuIcon/MenuIcon';
import styles from './Header.module.scss';

import headerLogo from '../../images/idplogo.svg';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = {
      menuOpen: false,
      scrollPos: 0,
      hide: false,
    };
  }

  componentDidMount() {
    const headerScrollEvent = scrollEvent.pipe(
      map(() => {
        const { scrollPos } = this.state;
        const topPos = typeof window !== 'undefined' ? (window.document.body.getBoundingClientRect()).top : 0;
        this.setState({ scrollPos: topPos });
        return (scrollPos > (0 - 500) || topPos > scrollPos);
      }),
    );

    headerScrollEvent
      .subscribe(show => this.setState(({ menuOpen }) => ({
        hide: !show,
        menuOpen: menuOpen ? false : menuOpen,
      })));
  }

  toggleMenu() {
    this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen }));
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { menuOpen, hide, className } = this.state;
    const { title } = this.props;
    
    const headerClasses = [
      styles.header,
      menuOpen && styles.menuOpen,
      hide && styles.hide,
      className,
    ].join(' ');

    const createNavLink = (path, label) => (
      <Link
        to={path}
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
        partiallyActive={path.includes('posts')}
      >
        {label}
      </Link>
    );

    return (
      <header className={headerClasses}>
        <div className={styles.navigationHeader}>
          <Link className={styles.headerLogo} to="/">
            <img
              src={headerLogo}
              alt="idesignpixels"
            />
          </Link>
          <Link className={styles.title} to="/">{title}</Link>
          <MenuIcon
            className={styles.menuIcon}
            open={menuOpen}
            onClick={this.toggleMenu}
          />
          <ul className={styles.menu}>
            <li>{createNavLink('/', 'Home')}</li>
            <li>{createNavLink('/posts', 'Posts')}</li>
            <li>{createNavLink('/contact', 'Contact')}</li>
          </ul>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}