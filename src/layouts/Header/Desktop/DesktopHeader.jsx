import { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Dropdown } from '~/components/Dropdown';
import classNames from 'classnames/bind';
import styles from './styles.module';
import HeaderLogo from '~/assets/svg/HeaderLogo.svg';
import PropTypes from 'prop-types';
import useScrollDirection from '~/hooks/useScrollDirection';
import { useScrollToId } from '~/utils';
import menuItems from '../menuItems.json';
import ArrowIcon from '../../../../public/assets/icons/arrow.svg';

const cn = classNames.bind(styles);

export default function DesktopHeader({ navigationLinks, showMedia }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef();
  const scrollDirection = useScrollDirection();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (pathname === '/home') {
      window.scrollTo(0, 0);
    } else {
      navigate('/home');
    }
  };

  return (
    <header className={cn('header', { hidden: scrollDirection === 'down' })}>
      <div className={cn('logo-wrapper')}>
        <HeaderLogo alt="Sourcery Academy logo" className={cn('logo')} />

        <a onClick={handleClick} href="/home" className={cn('title')}>
          Sourcery Academy
        </a>
      </div>
      <nav className={cn('nav')}>
        <ul className={cn('navigation-list')} id="menu">
          {navigationLinks.map((link) => {
            if (link.title === 'Academies') {
              return (
                <li
                  key={link.title}
                  className={cn('academies-icon-container')}
                  tabIndex={0}
                >
                  <span
                    aria-expanded={open}
                    key={link.title}
                    className={cn('nav-links', 'nav-button')}
                    ref={buttonRef}
                    onClick={() => setOpen(!open)}
                  >
                    {link.title}
                    <ArrowIcon
                      id="arrow-icon"
                      aria-hidden="true"
                      className={cn(
                        'nav-links',
                        'icon',
                        `${open && 'is-active'}`
                      )}
                      alt="arrow-icon"
                    />
                  </span>
                </li>
              );
            } else if (link.title === 'Media') {
              return (
                showMedia && (
                  <button
                    key={link.title}
                    className={cn('nav-links')}
                    onClick={() => useScrollToId('Media')}
                  >
                    Media
                  </button>
                )
              );
            }
            return (
              <li key={link.title}>
                <Link className={cn('nav-links')} to={link.path}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Dropdown
          targetRef={buttonRef}
          options={menuItems}
          open={open}
          setOpen={setOpen}
        ></Dropdown>
      </nav>
    </header>
  );
}

DesktopHeader.propTypes = {
  navigationLinks: PropTypes.array,
  showMedia: PropTypes.bool,
};
