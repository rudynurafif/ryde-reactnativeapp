import DriverCard from '@/components/DriverCard';
import RideLayout from '@/components/RideLayout';
import { drivers } from '@/constants';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const ConfirmRide = () => {
  return (
    <RideLayout title='Choose a Driver'>
      <FlatList
        data={drivers}
        renderItem={(item) => <DriverCard item={item} />}
      />
    </RideLayout>
  );
};

export default ConfirmRide;
