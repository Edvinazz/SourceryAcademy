import { Apply } from '~/features';
import ImgApplyDev from '~/assets/svg/developers/ApplyDev';
import pageData from './pageData.json';

export default function DevelopersApply() {
  return (
    <Apply data={pageData.apply}>
      <ImgApplyDev />
    </Apply>
  );
}
