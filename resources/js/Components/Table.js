import React from 'react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, IconButton, } from '@chakra-ui/react';
import { DeleteIcon } from "@chakra-ui/icons";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const TableComponent = ({ Theader, TableData }) => {
  const [data, put] = useForm();

  return (<>
    {Thead && (
      <>
        <Table size='sm'>
          <Thead>
            <Tr>
              {Theader.map(i => (
                <Th key={i.id}>{i.title}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {TableData.data && TableData.data.map((i, x) => (
              <Tr key={i.id}>
                <Td isNumeric>{x + 1}</Td>
                <Td>{i.title}</Td>
                <Td>{i.description}</Td>
                <Td>{i.is_status}</Td>
                <Td>{i.updated_at}</Td>
                <Td>
                  <IconButton variant="ghost" colorScheme="red" aria-label={'ลบข้อมูล ' + i.id} icon={<DeleteIcon />} onClick={onDelete} />
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              {Theader.map(i => (
                <Th key={i.id}>{i.title}</Th>
              ))}
            </Tr>
          </Tfoot>
        </Table>
        {TableData.links && (
          <div className="py-8 grid justify-items-center">
            <div class="btn-group">
              {TableData.links.map(i => (
                <button key={i.label} class={classNames(i.active ? 'btn-active' : '', 'btn btn-sm')}>{(i.label).replace("&laquo;", "").replace("&raquo;", "")}</button>
              ))}
            </div>
          </div>
        )}
      </>
    )}
  </>);
};

export default TableComponent;
