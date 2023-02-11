import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import '../Dropdown/dropdown.module.scss';
import styles from '../../components/Dropdown/dropdown.module';

const cn = classNames.bind(styles);

const DropdownItem = (props) => {
  const { name, path, onClick } = props;

  return (
    <div>
      {name && (
        <Link onClick={onClick} className={cn('list-item-link')} to={path}>
          {name}
        </Link>
      )}
    </div>
  );
};

DropdownItem.displayName = 'DropdownItem';

DropdownItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  path: PropTypes.string,
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      path: PropTypes.string,
    })
  ),
  open: PropTypes.bool,
};

export default DropdownItem;
