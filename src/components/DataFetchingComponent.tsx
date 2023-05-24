import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';

import TripCard from './TripCard';

interface Trip {
  id: string;
  name: string;
  countries: number;
  days: number;
  emissionsOffset: number;
  rating: number;
  image: string;
}

const DataFetchingComponent: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/data');
        const jsonData = await response.json();
        setTrips(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Flex align="center" justify="center" flexWrap="wrap">
        {trips.map((trip: Trip) => (
          <TripCard key={trip.id} {...trip} />
        ))}
      </Flex>
    </div>
  );
};

export default DataFetchingComponent;
