import classNames from 'classnames/bind';
import styles from './toggles.module';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Fieldset } from '~/components';
import Toggle from './Toggle';

const cn = classNames.bind(styles);

export default function Toggles(props) {
  const optionsLength = props.data.length;
  const wrapperRef = useRef();
  const scrollRef = useRef();
  const [optionsLeft, setOptionsLeft] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translate, setTranslate] = useState(false);

  useEffect(() => {
    const index = props.data.findIndex(
      (value) => value.id === props.selectedValue
    );
    if (index >= 0) {
      setSelectedIndex(index);
    }
  }, [props.selectedValue, setSelectedIndex]);

  const next = () => {
    if (currentIndex < optionsLeft) {
      setCurrentIndex((prevState) => prevState + 1);
    }
    if (currentIndex === optionsLeft) {
      setCurrentIndex(0);
      setTranslate(true);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const onTabHandler = (e) => {
    if (e.key === 'ArrowRight') {
      if (selectedIndex === optionsLength - 1) {
        setCurrentIndex(0);
      } else {
        if (currentIndex < optionsLeft) {
          setCurrentIndex((prevState) => prevState + 1);
        }

        if (currentIndex === optionsLeft) {
          setTranslate(true);
        }
      }
    }
    if (e.key === 'ArrowLeft') {
      if (currentIndex === 0 && selectedIndex === 0) {
        setCurrentIndex(optionsLeft);
        setSelectedIndex(optionsLength - 1);
        setTranslate(true);
      }
      prev();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (wrapperRef.current.scrollWidth > wrapperRef.current.clientWidth) {
        const hiddenWidth =
          scrollRef.current.clientWidth + 64 - wrapperRef.current.clientWidth;
        const optionSize = scrollRef.current.clientWidth / optionsLength;
        const optionsInvisible = Math.round(hiddenWidth / optionSize);
        setOptionsLeft(optionsInvisible);
        setCurrentIndex(0);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [wrapperRef, scrollRef]);

  return (
    <Fieldset required={props.required} title={props.title}>
      <div
        tabIndex={0}
        onKeyDown={onTabHandler}
        className={cn('wrapper')}
        ref={wrapperRef}
        style={{ padding: optionsLeft > 0 ? `0 ${3}rem` : '' }}
      >
        {optionsLeft > 0 && (
          <button
            type="button"
            className={cn('arrow--left')}
            onClick={prev}
          ></button>
        )}
        <div
          className={cn('inner-wrapper')}
          style={{
            transform: translate
              ? `translateX(${0})` && setTranslate(false)
              : `translateX(-${(currentIndex * 100) / optionsLength}%)`,
          }}
        >
          <span
            className={cn('slider-wrapper')}
            ref={scrollRef}
            style={{
              transform: `translateX(${
                selectedIndex * (100 / optionsLength)
              }%)`,
              width: `${19.6 * optionsLength}rem`,
            }}
          >
            <span className={cn('slider')}></span>
          </span>

          {props.data.map((value) => (
            <Toggle
              key={value.id}
              name={props.name}
              value={value.id}
              id={value.id}
              selectedValue={props.selectedValue}
              title={value.title}
              onChange={props.onChange}
            />
          ))}
        </div>
        {optionsLeft > 0 && (
          <button
            className={cn('arrow--right')}
            onClick={next}
            type="button"
          ></button>
        )}
      </div>
    </Fieldset>
  );
}

Toggles.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, title: PropTypes.string })
  ),
  onChange: PropTypes.func,
  selectedValue: PropTypes.string,
};
