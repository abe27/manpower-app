import React from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const checkGroup = (x, i) => {
  if (x.is_group) {
    return (
      <>
        <MenuGroup key={x.name} title={x.name}>
          {x.children.map(a => <MenuItem key={a.name}>{a.name}{i}</MenuItem>)}
        </MenuGroup>
        <MenuDivider />
      </>
    );
  }
};

const MenuDropdown = ({ MenuTitle, MenuNavigation }) => (
  <>
    <Menu isLazy>
      <MenuButton className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        {MenuTitle}
      </MenuButton>
      <MenuList>
        {MenuNavigation.map(i => checkGroup(i))}
      </MenuList>
    </Menu>
  </>
);

export default MenuDropdown;
