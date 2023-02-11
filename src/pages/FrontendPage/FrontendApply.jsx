import { Apply } from '~/features';
import ImgApplyFe from '~/assets/svg/frontend/ApplyFe';
import pageData from './pageData.json';

export default function FrontendApply() {
  return (
    <Apply data={pageData.apply}>
      <ImgApplyFe />
    </Apply>
  );
}
