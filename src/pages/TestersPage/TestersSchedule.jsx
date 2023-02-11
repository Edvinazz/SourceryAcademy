import { Schedule } from '~/features';
import scheduleData from './scheduleData.json';

export default function TestersSchedule() {
  return <Schedule scheduleData={scheduleData} />;
}
