import React from 'react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Stack, Skeleton } from '@chakra-ui/react';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const TableComponent = ({ Theader, TableData }) => (<>
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
          {TableData.data && TableData.data.map(i => (
            <Tr>
              <Td>1</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
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
              <button key={i.label} class={classNames(i.active ? 'btn-active': '', 'btn btn-sm')}>{(i.label).replace("&laquo;", "").replace("&raquo;", "")}</button>
            ))}
          </div>
        </div>
      )}
    </>
  )}
</>);

export default TableComponent;
