import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Breadcrumb from '@/Components/Breadcrumb';
import Tab from '@/Components/Tab';

const breadData = [
  { id: 0, name: 'Home', href: "#", current: false },
  { id: 1, name: 'Documents', href: "#", current: false },
  { id: 2, name: 'Administrator', href: "#", current: true }
];

const AdminPage = (props) => (
  <Authenticated auth={props.auth}
    errors={props.errors}
    header={<Breadcrumb breadcrumb={breadData} />}>
    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
      <Tab />
    </div>
  </Authenticated>);

export default AdminPage;
