import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import FocusLock from 'react-focus-lock';
import { DropdownItem, Portal } from '~/components/Dropdown';
import { useClickOutside, useKeyPressEvent } from '~/hooks';
import { validateUrl } from '~/utils/validateUrl';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import '../Dropdown/dropdown.module.scss';
import styles from './dropdown.module';

const cn = classNames.bind(styles);

const Dropdown = (props) => {
  const { options, open, setOpen, targetRef } = props;
  const [coords, setCoords] = useState();
  const menuContainerRef = useRef();

  useClickOutside(menuContainerRef, (event) => {
    if (!targetRef.current.contains(event.target)) {
      setOpen(false);
    }
  });

  useKeyPressEvent('Escape', () => {
    setOpen(false);
  });

  useLayoutEffect(() => {
    if (targetRef && targetRef.current && open) {
      const rect = targetRef.current.getBoundingClientRect();
      setCoords({
        left: rect.left + rect.width / 2,
        top: rect.top + rect.height,
      });
    }
  }, [targetRef, open]);

  let closeDropdownWhenScreenChanges = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', closeDropdownWhenScreenChanges);
    return () =>
      window.removeEventListener('scroll', closeDropdownWhenScreenChanges);
  }, [closeDropdownWhenScreenChanges]);

  useEffect(() => {
    window.addEventListener('resize', closeDropdownWhenScreenChanges);
    return () =>
      window.removeEventListener('resize', closeDropdownWhenScreenChanges);
  }, [closeDropdownWhenScreenChanges]);

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <FocusLock returnFocus>
        <div
          ref={menuContainerRef}
          className={cn('container-absolute')}
          style={{ left: coords?.left, top: coords?.top }}
        >
          <div className={cn('menu')}>
            <ul className={cn('container-menu-items')}>
              {options.map((option) => {
                if (validateUrl(option.path)) {
                  return (
                    <li key={option.id} className={cn('list-item')}>
                      <a
                        href={option.path}
                        target="_blank"
                        rel="noreferrer"
                        className={cn('list-item-link')}
                      >
                        {option.name}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={option.id} className={cn('list-item')}>
                    <DropdownItem
                      name={option.name}
                      path={option.path}
                      onClick={() => setOpen(false)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </FocusLock>
    </Portal>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      path: PropTypes.string,
    })
  ),
  name: PropTypes.string,
  id: PropTypes.number,
  path: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  coords: PropTypes.objectOf(PropTypes.number),
  setCoords: PropTypes.func,
  targetRef: PropTypes.shape({
    current: PropTypes.object,
  }),
};

export default Dropdown;
