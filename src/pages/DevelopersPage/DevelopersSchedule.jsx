import { Schedule } from '~/features';
import scheduleData from './scheduleData.json';

export default function DevelopersSchedule() {
  return <Schedule scheduleData={scheduleData} />;
}
