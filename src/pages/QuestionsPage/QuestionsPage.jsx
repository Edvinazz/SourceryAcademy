import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './questions-page.module';
import useMediaQuery, { ScreenSize } from '~/hooks/useMediaQuery';
import { Heading, Button } from '~/components';
import LineTop from '~/assets/svg/Lines/IntroLineAsset';
import LineBottom from '~/assets/svg/ScheduleLine';
import { FaqBox } from '~/features/FaqBox';
import QuestionsWrapper from './QuestionsWrapper';
import { MetaTitle } from '~/components';
import pageData from './pageData.json';

const cn = classNames.bind(styles);

export default function QuestionsPage() {
  const sizeTabPort = useMediaQuery(ScreenSize.TabPort);
  const [academyData, setAcademyData] = useState(pageData.Academies[0]);

  return (
    <>
      <MetaTitle data={pageData.meta} />
      <QuestionsWrapper>
        <div className={cn('container')}>
          <Heading tag="h1" style="big">
            {sizeTabPort ? 'F.A.Q' : 'Frequently Asked Questions'}
          </Heading>

          <div className={cn('option-box')}>
            {pageData.Academies.map((academy) => {
              return sizeTabPort ? (
                <button
                  key={academy.id}
                  onClick={() => setAcademyData(academy)}
                  className={cn('option', {
                    'option--active': academyData === academy,
                  })}
                >
                  {academy.short}
                </button>
              ) : (
                <Button
                  key={academy.id}
                  onClick={() => setAcademyData(academy)}
                >
                  {academy.short}
                </Button>
              );
            })}
          </div>

          <section className={cn('section')}>
            <div className={cn('line-container')}>
              <FaqBox data={academyData} hasAsset={true} />
              <div className={cn('line', 'line--top')}>
                <LineTop />
              </div>
            </div>
            <div className={cn('line-container')}>
              <FaqBox data={pageData.General} />
              <div className={cn('line', 'line--bottom')}>
                <LineBottom />
              </div>
            </div>
          </section>
        </div>
      </QuestionsWrapper>
    </>
  );
}
