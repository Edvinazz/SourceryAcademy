import { Apply } from '~/features';
import ImgApplyQa from '~/assets/svg/testers/ApplyQa';
import pageData from './pageData.json';

export default function TestersApply() {
  return (
    <Apply data={pageData.apply}>
      <ImgApplyQa />
    </Apply>
  );
}
