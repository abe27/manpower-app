import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Breadcrumb from '@/Components/Breadcrumb';
import MetricState from '@/Components/MetricState';
import Webboard from '@/Components/Webboard';
import TimeAttendance from '@/Components/TimeAttendance';
import BussinessCalendar from '@/Components/BussinessCalendar';
import TrainingCalendar from '@/Components/TrainingCalendar';
import Accident from '@/Components/Accident';
import NewEmployee from '@/Components/NewEmployee';
import { Divider } from '@chakra-ui/react';

const breadData = [
  { id: 0, name: 'Home', href: "#", current: false },
  { id: 1, name: 'Documents', href: "#", current: false },
  { id: 2, name: 'Reporting', href: "#", current: true }
];

const Dashboard = (props) => {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<Breadcrumb breadcrumb={breadData} />}
    >
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <MetricState />
      </div>
      <Divider className="py-2" />
      <div class="py-2 grid grid-cols-2 gap-4 lg:grid-cols-3">
        <div class="col-span-2 lg:col-span-3 w-full mx-auto p-2 box-border rounded">
          <Webboard />
        </div>
        <div class="col-span-2 row-span-2 w-full mx-auto p-2 box-border rounded">
          <TimeAttendance />
        </div>
        <div class="p-2 rounded">
          <BussinessCalendar />
        </div>
        <div class="p-2 rounded">
          <TrainingCalendar />
        </div>
      </div>
      <Divider className="py-2" />
      <div className="py-2">
        <Accident />
      </div>
      <div className="py-2">
        <NewEmployee />
      </div>
    </Authenticated>
  );
}

export default Dashboard;
