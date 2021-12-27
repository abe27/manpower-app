import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider, } from '@chakra-ui/react';
import { Icon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const MenuDropdown = ({ MenuHref, MenuTitle, MenuNavigation }) => (
  <>
    <Menu isLazy>
      <MenuButton className={classNames(
        route().current(MenuHref) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'block px-3 py-2 rounded-md text-base font-medium'
      )}>
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
                  <MenuItem key={x.id}>
                    <Icon as={ChevronRightIcon} />
                    <a href={x.href} className="text-sm font-medium">{x.name}</a>
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
