// import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, } from '@chakra-ui/react';
import { ChevronRightIcon } from "@chakra-ui/icons";

const Breadcrumbs = ({ breadcrumb }) => (
  <>
    <Breadcrumb spacing='2px' separator={<ChevronRightIcon color='gray.500' />}>
      {breadcrumb.map(i => (
        <BreadcrumbItem key={i.id} isCurrentPage={i.current}>
          <BreadcrumbLink href={i.href}>{i.name}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  </>
);

export default Breadcrumbs;
