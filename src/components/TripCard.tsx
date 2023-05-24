import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

interface Trip {
  id: string;
  name: string;
  countries: number;
  days: number;
  emissionsOffset: number;
  rating: number;
  image: string;
}

const TripCard: React.FC<Trip> = ({ name, countries, days, emissionsOffset, rating, image }) => {

  const formattedEmissionsOffset = emissionsOffset >= 1000 ? `${(emissionsOffset / 1000).toFixed(2)} t` : `${emissionsOffset} kg`;
  const countriesLabel = countries === 1 ? 'country' : 'countries';
  const daysLabel = days === 1 ? 'day' : 'days';

  return (
    <Box
      borderRadius="lg"
      p={16}
      m={6}
      width={{ base: '100%', md: '30%' }}
      boxShadow="md"
      textAlign="center"
      color="white"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundImage={`linear-gradient(rgba(47, 48, 52, 0.7), rgba(47, 48, 52, 0.7)), url(${image})`}
      border="10px solid white"
      position="relative"
      display="flex"
      flexDirection="column"
    >
      <Flex direction="column" flex="1" justifyContent="flex-end">
        <Heading as="h2" size="md" mt={2} color="#ebdfe7">
          {name}
        </Heading>
        <Text fontSize="md" mt={1}>
          {countries} {countriesLabel} {days} {daysLabel}
        </Text>

        <Flex justifyContent="space-between"
          alignItems="center"
          borderRadius="lg"
          borderColor="white"
          color="#cfd3dc"
          bg="#1f2837"
          px={2}
          py={3}
          mt={3}
          mb={5}
          >
          <Text fontSize="sm">Emissions offset:</Text>
          <Text fontSize="sm">{formattedEmissionsOffset} CO₂e</Text>
        </Flex>
      </Flex>
      <Flex
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        justifyContent="center"
      >
        <Box
          borderTopRadius="md"
          borderBottomWidth="1px"
          borderColor="white"
          bg="white"
          px={10}
          py={3}
        >

        <Flex justifyContent="space-between" color="#413d42">
          <Text fontSize="sm" fontWeight="bold">
            Trip rating
          </Text>
          <Text fontSize="sm" fontWeight="bold" ml={9}>
            <span data-star={rating.toFixed(1)} />
            {rating.toFixed(1)}
          </Text>
        </Flex>
        </Box>
      </Flex>

    </Box>
  );
};

export default TripCard;
