import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Example text; style as needed */}
      <p style={{ color: 'green' }}>Hi</p>
      
      {/* Standard button for demonstration; replace or remove as needed */}
      <button>Bye</button>
      
      {/* Chakra UI Button for navigation */}
      <Button as={RouterLink} to="/stats" colorScheme="blue" mt="4">
        View Stats
      </Button>
    </div>
  );
};

export default HomePage;
