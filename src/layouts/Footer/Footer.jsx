import classNames from 'classnames/bind';
import styles from './styles.module';
import FacebookIcon from '~/assets/svg/FacebookIcon';
import TwitterIcon from '~/assets/svg/TwitterIcon';
import InstagramIcon from '~/assets/svg/InstagramIcon';

const cn = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cn('footer')}>
      <div className={cn('wrapper')}>
        <div className={cn('links')}>
          <a
            href="https://www.facebook.com/devbridge/"
            target="_blank"
            rel="noreferrer"
            className={cn('link')}
          >
            <FacebookIcon />
          </a>

          <a
            href="https://twitter.com/devbridge"
            target="_blank"
            rel="noreferrer"
            className={cn('link')}
          >
            <TwitterIcon />
          </a>

          <a
            href="https://www.instagram.com/devbridge/"
            target="_blank"
            rel="noreferrer"
            className={cn('link')}
          >
            <InstagramIcon />
          </a>
        </div>

        <p className={cn('copyright')}>
          Copyright © {new Date().getFullYear()} Sourcery Academy
        </p>
      </div>
    </footer>
  );
}
