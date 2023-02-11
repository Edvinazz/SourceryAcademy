import { Schedule } from '~/features';
import scheduleData from './scheduleData.json';

export default function FrontendSchedule() {
  return <Schedule scheduleData={scheduleData} />;
}
