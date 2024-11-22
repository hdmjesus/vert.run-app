import { z } from 'zod'
import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import DatePicker from 'react-native-date-picker'

import Toast from 'react-native-toast-message'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegiterAcivitySchema } from '@/src/validations/activities'
import { MultiSelect } from '../ui/MultiSelect'
import { ThemedText } from '../ui/ThemedText'
import { Input } from '../ui/Input'
import { activityData } from '@/src/constants/activities'

export const AddNewActivityForm = () => {
  const { control, handleSubmit, setValue } = useForm({
    resolver: zodResolver(RegiterAcivitySchema),
    defaultValues: {
      name: '',
      type: '',
      sport_type: '',
      start_date_local: '',
      elapsed_time: 0,
      description: '',
      distance: 0,
      trainer: '',
      commute: ''
    }
  })

  const onSubmit = async (data: z.infer<typeof RegiterAcivitySchema>) => {}
  const [startDate, setStartDate] = useState(new Date())
  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <View>
        <ThemedText
          type='subtitle'
          style={{
            marginBottom: 10
          }}
        >
          Add a manual activity
        </ThemedText>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          enabled
        >
          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  keyboardType='default'
                  label='Name'
                  styleInput={{
                    height: 35
                  }}
                />
              </>
            )}
            name='name'
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView behavior='position' enabled>
          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  label='Elevation (m)'
                  keyboardType='numeric'
                  styleInput={{
                    height: 35
                  }}
                />
              </>
            )}
            name='commute'
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView behavior='position' enabled>
          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  label='Description'
                  keyboardType='default'
                  value={value}
                  onChangeText={onChange}
                  styleInput={{
                    height: 35
                  }}
                />
              </>
            )}
            name='description'
          />
        </KeyboardAvoidingView>

        <KeyboardAvoidingView behavior='position' enabled>
          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  label='Distance (Km)'
                  keyboardType='numeric'
                  styleInput={{
                    height: 35
                  }}
                />
              </>
            )}
            name='distance'
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView behavior='position' enabled>
          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <MultiSelect
                  label='Activity type'
                  containerStyle={{
                    width: '100%',
                    height: 35,
                    padding: 10
                  }}
                  // selectedValues={value ? [value] : []}
                  multiple={false}
                  options={activityData}
                  // onValuesChange={(values: any) => {
                  //   if (values.length > 0) {
                  //     onChange(values[0])
                  //   }
                  // }}
                />
              </>
            )}
            name='sport_type'
          />{' '}
        </KeyboardAvoidingView>

        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <MultiSelect
                label='Effort type'
                containerStyle={{
                  width: '100%',
                  height: 35,
                  padding: 10
                }}
                // selectedValues={value ? [value] : []}
                multiple={false}
                // options={dataProfessions}
                // onValuesChange={(values: any) => {
                //   if (values.length > 0) {
                //     onChange(values[0])
                //   }
                // }}
              />
            </>
          )}
          name='trainer'
        />

        {/* <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <Input
                keyboardType='numeric'
                label='Date'
                styleInput={{
                  height: 35
                }}
              />
            </>
          )}
          name='start_date_local'
        /> */}
      </View>
    </ScrollView>
  )
}
