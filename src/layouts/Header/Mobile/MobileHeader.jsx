import { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './styles.module';
import HeaderLogo from '~/assets/svg/HeaderLogo.svg';
import { Accordion } from '~/components';
import useToggleBodyScroll from '~/hooks/useToggleBodyScroll';
import useScrollDirection from '~/hooks/useScrollDirection';
import menuItems from '../menuItems.json';
import { validateUrl } from '~/utils/validateUrl';
import PropTypes from 'prop-types';
import { useScrollToId } from '~/utils';

const cn = classNames.bind(styles);

export default function MobileHeader({ navigationLinks, showMedia }) {
  const [isActive, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useToggleBodyScroll(isActive);
  const scrollDirection = useScrollDirection();
  const handleClickScroll = () => {
    setActive(false);
    useScrollToId('Media');
  };

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (pathname === '/home') {
      window.scrollTo(0, 0);
    } else {
      navigate('/home');
    }
  };

  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);

  return (
    <header className={cn('header', { hidden: scrollDirection === 'down' })}>
      <div className={cn('logo-wrapper')}>
        <HeaderLogo alt="Sourcery Academy logo" className={cn('logo')} />
        <a
          onClick={handleClick}
          href="/home"
          className={cn('title')}
          ref={firstItemRef}
        >
          Sourcery Academy
        </a>
      </div>
      <nav className={cn('nav')}>
        <button
          type="button"
          id="menu-toggle"
          aria-label="Toggle Menu"
          aria-expanded={isActive}
          aria-haspopup="true"
          aria-controls="menu"
          className={cn('btn', { active: isActive })}
          onClick={() => setActive(!isActive)}
        >
          <div className={cn('bar1')}></div>
          <div className={cn('bar2')}></div>
          <div className={cn('bar3')}></div>
        </button>
        <ul className={cn('navigation-list', { active: isActive })} id="menu">
          {navigationLinks.map((link, index) => {
            if (link.dropdown) {
              return (
                <Accordion
                  title={link.title}
                  key={link.title}
                  style="plain"
                  aria-expanded={isOpen}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <ul className={cn('dropdown')} aria-hidden={!isOpen}>
                    {menuItems.map((item) => {
                      if (validateUrl(item.path)) {
                        return (
                          <li key={item.id}>
                            <a
                              className={cn('dropdown__item')}
                              href={item.path}
                              rel="noreferrer"
                              target="_blank"
                            >
                              {item.name}
                            </a>
                          </li>
                        );
                      } else {
                        return (
                          <li key={item.id}>
                            <Link
                              className={cn('dropdown__item')}
                              to={item.path}
                              onClick={() => setActive(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </Accordion>
              );
            } else if (link.title === 'Media') {
              return (
                showMedia && (
                  <button
                    key={link.title}
                    className={cn('nav-links')}
                    onClick={() => {
                      useScrollToId('Media');
                      setActive(false);
                    }}
                  >
                    Media
                  </button>
                )
              );
            }
            return (
              <li key={link.title}>
                <Link
                  className={cn('nav-links')}
                  to={link.path}
                  onClick={() => setActive(false)}
                  ref={
                    index === navigationLinks.length - 1 ? lastItemRef : null
                  }
                  onBlur={() =>
                    index === navigationLinks.length - 1
                      ? firstItemRef.current.focus()
                      : null
                  }
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

MobileHeader.propTypes = {
  navigationLinks: PropTypes.array,
  showMedia: PropTypes.bool,
};
