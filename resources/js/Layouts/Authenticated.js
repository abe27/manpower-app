/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon, MailIcon } from '@heroicons/react/outline';
import { Head } from '@inertiajs/inertia-react';
import { ChakraProvider } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import MenuDropdown from '@/Components/MenuDropdown';
import LoadingPage from '@/Components/Loading';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: "https://i.pravatar.cc/500",
}

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: route('logout') },
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const checkChildren = (item) => {
  if (item.children.length > 0) {
    return <MenuDropdown key={item.id} MenuTitle={item.name} MenuNavigation={item.children} />
  }

  return (
    <a
      key={item.id}
      href={item.href}
      className={classNames(
        route().current(item.current)
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'px-3 py-2 rounded-md text-sm font-medium'
      )}
      aria-current={route().current(item.current) ? 'page' : undefined}
    >
      {item.name}
    </a>
  );
};

const Authenticated = ({ auth, header, children }) => {
  const [MenuList, setMenuList] = useState(null);

  const getMenu = async () => {
    const get = await axios.get('/storage/systems/menu_list.json');
    const list = await get.data;
    let menu = [];
    list.map(a => {
      a.id = nanoid();
      a.href = route(a.href);
      a.children.map(b => {
        b.id = nanoid();
        b.href = route(b.href);
        b.children.map(c => {
          c.id = nanoid();
          c.href = route(c.href);
        });
      });

      menu.push(a);
    });

    setMenuList(await menu);
  };

  useEffect(getMenu, []);

  return (
    <ChakraProvider>
      {!MenuList && <LoadingPage />}
      {MenuList && (
        <>
          <Head title={(route().current()).charAt(0).toUpperCase() + (route().current()).slice(1)} /><div className="min-h-full">
            <Disclosure as="nav" className="bg-gray-800">
              {({ open }) => (
                <>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-8 w-8"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="Workflow" />
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {MenuList.map((item) => checkChildren(item))}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          <div className="ml-4 flex items-center space-x-2 md:ml-6">
                            <button
                              type="button"
                              className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            >
                              <span className="sr-only">View Message</span>
                              <MailIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                              <div>
                                <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                  <span className="sr-only">Open user menu</span>
                                  <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                </Menu.Button>
                              </div>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                      {({ active }) => (
                                        <a
                                          href={item.href}
                                          className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                          )}
                                        >
                                          {item.name}
                                        </a>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          </div>
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>

                  <Disclosure.Panel className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                      {MenuList.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block px-3 py-2 rounded-md text-base font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                      <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium leading-none text-white">{user.name}</div>
                          <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                        </div>
                        <button
                          type="button"
                          className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-3 px-2 space-y-1">
                        {userNavigation.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {header && (
              <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">{header}</div>
              </header>
            )}

            <main className="py-4">
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </div>
        </>
      )}
    </ChakraProvider>
  );
}

export default Authenticated;
