import React from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const MenuDropdown = ({ MenuTitle, MenuNavigation }) => (
  <>
    <Menu isLazy>
      <MenuButton className="text-gray-300 hover:bg-gray-700 hover:text-white">
        {MenuTitle}
      </MenuButton>
      <MenuList>
        {MenuNavigation.map(i => (
          <MenuItem href="/">{i.name}</MenuItem>
        ))}
        <MenuDivider />
        <MenuGroup title='Help'>
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  </>
);

export default MenuDropdown;
