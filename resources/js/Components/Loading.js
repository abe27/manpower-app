import React from 'react';
import { Center, Spinner } from '@chakra-ui/react';

const LoadingPage = ({ thickness = '2.5px', speed = '1.65s', emptyColor = 'gray.200', color = 'blue.500', size = 'xl' }) => (
  <div className="max-w-full min-h-screen mx-auto my-auto flex justify-center px-0 py-0">
    <Center>
      <Spinner
        thickness={thickness}
        speed={speed}
        emptyColor={emptyColor}
        color={color}
        size={size}
      />
    </Center>
  </div>);

export default LoadingPage;
