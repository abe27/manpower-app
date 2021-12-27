import React, { useState, useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Breadcrumb from '@/Components/Breadcrumb';
import { nanoid } from 'nanoid';
import TableComponent from '@/Components/Table';
import ElementLoading from '@/Components/ElementLoading';
import { Button, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ModalDialogInput from '@/Components/ModalDialogInput';

const breadData = [
  { id: nanoid(), name: 'Home', href: "#", current: false },
  { id: nanoid(), name: 'Documents', href: "#", current: false },
  { id: nanoid(), name: 'Administrator', href: "#", current: false },
  { id: nanoid(), name: 'Section', href: "#", current: true }
];


const SectionIndexPage = (props) => {
  const [TableHeader, setTableHeader] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const getTableHeader = async () => {
    const get = await axios.get('/storage/components/master_table_header.json');
    setTableHeader(await get.data);
  };

  useEffect(getTableHeader, []);

  console.dir(props.data);

  return (
    <Authenticated auth={props.auth}
      errors={props.errors}
      header={<Breadcrumb breadcrumb={breadData} />}>
      <div className="grid justify-items-end py-2">
        <div className="col-end bg-yellow-100">
          <Button size="sm" leftIcon={<AddIcon />} colorScheme='teal' variant='solid' onClick={onOpen}>
            Add New
          </Button>
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow sm:rounded-lg py-2 px-2">
        {(!TableHeader) && <ElementLoading />}
        {(TableHeader) && <TableComponent Theader={TableHeader} TableData={props.data} />}
      </div>
      <ModalDialogInput title="เพิ่มข้อมูล" isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Authenticated>
  );
};

export default SectionIndexPage;
