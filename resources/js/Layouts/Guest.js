import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link } from '@inertiajs/inertia-react';
import { ChakraProvider } from '@chakra-ui/react';

const Guest = ({ children }) => {
  return (
    <ChakraProvider>
      <Head title={(route().current()).charAt(0).toUpperCase() + (route().current()).slice(1)} />
      <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
          <Link href="/">
            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500 hover:animate-spin" />
          </Link>
        </div>

        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          {children}
        </div>
      </div>
    </ChakraProvider>
  );
}

export default Guest;
