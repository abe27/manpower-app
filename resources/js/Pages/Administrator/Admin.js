import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Breadcrumb from '@/Components/Breadcrumb';

const breadData = [
  { id: 0, name: 'Home', href: "#", current: false },
  { id: 1, name: 'Documents', href: "#", current: false },
  { id: 2, name: 'Administrator', href: "#", current: true }
];

const AdminPage = (props) => (
<Authenticated auth={props.auth}
      errors={props.errors}
      header={<Breadcrumb breadcrumb={breadData} />}>

</Authenticated>);

export default AdminPage;
