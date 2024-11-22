import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ConfigState {
  user: Record<string, any>
  setConfig: (key: string, value: any) => void
  getConfig: (key: string) => any
  removeConfig: (key: string) => void
  clearConfig: () => void
}

export const useUserStorage = create<ConfigState>()(
  persist(
    (set, get) => ({
      user: {},

      setConfig: (key, value) =>
        set(state => ({
          user: {
            ...state.user,
            [key]: value
          }
        })),

      getConfig: key => {
        const state = get()
        return state.user[key]
      },

      removeConfig: key =>
        set(state => {
          const newConfig = { ...state.user }
          delete newConfig[key]
          return { user: newConfig }
        }),

      clearConfig: () => set({ user: {} })
    }),
    {
      name: 'user-config-storage',
      storage: {
        getItem: async name => {
          const item = await AsyncStorage.getItem(name)
          return item ? JSON.parse(item) : null
        },
        setItem: async (name, value) => {
          await AsyncStorage.setItem(name, JSON.stringify(value))
        },
        removeItem: async name => {
          await AsyncStorage.removeItem(name)
        }
      }
    }
  )
)
