import RideCard from '@/components/RideCard';
import { images } from '@/constants';
import { useFetch } from '@/lib/fetch';
import { Ride } from '@/types/type';
import { useUser } from '@clerk/clerk-expo';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import {
  GestureHandlerRootView,
  RefreshControl,
} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Rides = () => {
  const { user } = useUser();
  const {
    data: recentRides,
    loading,
    refetch,
  } = useFetch<Ride[]>(`/(api)/(ride)/${user?.id}`);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <FlatList
          data={recentRides}
          // data={[]}
          renderItem={({ item }) => <RideCard ride={item} />}
          className='px-5'
          keyboardShouldPersistTaps='handled'
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={() => (
            <View className='flex flex-col items-center justify-center'>
              {!loading ? (
                <>
                  <Image
                    source={images.noResult}
                    className='w-40 h-40'
                    alt='No recent rides found'
                    resizeMode='contain'
                  />
                  <Text className='text-sm'>No Recent rides found</Text>
                </>
              ) : (
                <ActivityIndicator size='large' color='#000' className='pt-5' />
              )}
            </View>
          )}
          ListHeaderComponent={() => (
            <Text className='text-2xl font-JakartaBold my-5'>
              Rides History
            </Text>
          )}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Rides;
