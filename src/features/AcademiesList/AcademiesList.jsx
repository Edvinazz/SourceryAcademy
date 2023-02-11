import classNames from 'classnames/bind';
import styles from './academies-list.module';
import ImgHomeDev from '~/assets/svg/home/HomeDev';
import ImgHomeQa from '~/assets/svg/home/HomeQa';
import ImgHomeFe from '~/assets/svg/home/HomeFe';
import ImgHomeKids from '~/assets/svg/home/HomeKids';
import AcademiesLine1 from '~/assets/svg/Lines/AcademiesLine1';
import AcademiesLine2 from '~/assets/svg/Lines/AcademiesLine2';
import AcademiesLine3 from '~/assets/svg/Lines/AcademiesLine3';
import AcademiesIntro from './AcademiesIntro';
import ListLayout from './ListLayout';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Academies({ data }) {
  return (
    <>
      <AcademiesIntro data={data.intro} />

      <section id="academiesList" className={cn('section')}>
        <ListLayout direction="left" data={data.dev}>
          <div className={cn('line-container')}>
            <ImgHomeDev />
            <AcademiesLine1 className={cn('line', 'line--1')} />
          </div>
        </ListLayout>

        <ListLayout direction="right" data={data.qa}>
          <div className={cn('line-container')}>
            <ImgHomeQa />

            <AcademiesLine2 className={cn('line', 'line--2')} />
          </div>
        </ListLayout>

        <ListLayout direction="right" data={data.fe}>
          <ImgHomeFe />
        </ListLayout>

        <ListLayout direction="left" data={data.kids}>
          <div className={cn('line-container')}>
            <ImgHomeKids />
            <AcademiesLine3 className={cn('line', 'line--3')} />
          </div>
        </ListLayout>
      </section>
    </>
  );
}

Academies.propTypes = {
  data: PropTypes.object,
};
