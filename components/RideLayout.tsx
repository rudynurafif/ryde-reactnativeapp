import { icons } from '@/constants';
import { router } from 'expo-router';
import React, { useRef } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Map from './Map';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const RideLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <GestureHandlerRootView>
      <View className='flex-1 bg-white'>
        <View className='flex flex-col h-screen bg-blue-500'>
          <View className='flex flex-row absolute z-10 top-16 items-center justify-center px-5'>
            <TouchableOpacity onPress={() => router.back()}>
              <View className='w-10 h-10 bg-white border rounded-full items-center justify-center'>
                <Image
                  source={icons.backArrow}
                  className='w-6 h-6'
                  resizeMode='contain'
                />
              </View>
            </TouchableOpacity>
            <Text className='text-xl font-JakartaSemiBold bg-black rounded-full text-white py-2 px-3 ml-3'>
              {title || 'Go Back'}
            </Text>
          </View>
          <Map />
        </View>

        <BottomSheet
          keyboardBehavior='extend'
          ref={bottomSheetRef}
          snapPoints={['40%', '85%']}
          index={0}
        >
          <BottomSheetView style={{ flex: 1, padding: 20 }}>
            {children}
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default RideLayout;
