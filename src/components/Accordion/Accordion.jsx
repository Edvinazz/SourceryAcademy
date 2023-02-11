import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Accordion.module';
import PropTypes from 'prop-types';
import ChevronDown from '~/assets/svg/ChevronDown';

const cn = classNames.bind(styles);

export default function Accordion({ title, style = 'dark', children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const handleToggle = (e) => {
    setIsExpanded(!isExpanded);
    handleContentHeight(e);
  };

  const handleContentHeight = (e) => {
    let accordionContent = [...e.target.nextSibling.children];

    let contentHeight = accordionContent.reduce((acc, element, i) => {
      const style = getComputedStyle(element);
      const elementsMargins =
        parseInt(style.marginTop) + parseInt(style.marginBottom);

      return acc + element.offsetHeight + elementsMargins;
    }, 0);

    if (!isExpanded) {
      setContentHeight(contentHeight);
    } else {
      setContentHeight(0);
    }
  };

  return (
    <div className={cn(style)} aria-expanded={isExpanded}>
      <button
        className={cn('title')}
        onClick={handleToggle}
        aria-expanded={isExpanded}
      >
        {title}
        <div className={cn('icon')}>
          <ChevronDown />
        </div>
      </button>
      <div
        className={cn('content')}
        style={{ maxHeight: contentHeight + 'px' }}
        aria-expanded={isExpanded}
      >
        {children}
      </div>
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
  style: PropTypes.oneOf(['dark', 'light', 'plain']),
  children: PropTypes.node,
};
