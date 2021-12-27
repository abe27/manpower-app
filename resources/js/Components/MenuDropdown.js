import React from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, } from '@chakra-ui/react';
import { Icon, ChevronDownIcon } from '@chakra-ui/icons';

const MenuDropdown = ({ MenuTitle, MenuNavigation }) => (
  <>
    <Menu isLazy>
      <MenuButton className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        <div className="">
          {MenuTitle}
          &nbsp;
          <Icon as={ChevronDownIcon} />
        </div>
      </MenuButton>
      <MenuList>
        {MenuNavigation && MenuNavigation.map(i => (
          i.is_group && (
            <section key={i.id}>
              <MenuGroup title={i.name}>
                {i.children && i.children.map(x => (
                  <MenuItem key={x.id} className="text-sm font-medium">
                    <a href={x.href}>{x.name}</a>
                  </MenuItem>
                ))}
              </MenuGroup>
              <MenuDivider />
            </section>
          ))
        )}
      </MenuList>
    </Menu>
  </>
);

export default MenuDropdown;
