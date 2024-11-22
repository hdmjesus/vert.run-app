import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ConfigState {
  config: Record<string, any>
  setConfig: (key: string, value: any) => void
  getConfig: (key: string) => any
  removeConfig: (key: string) => void
  clearConfig: () => void
}

export const useAppStore = create<ConfigState>()(
  persist(
    (set, get) => ({
      config: {},

      setConfig: (key, value) =>
        set(state => ({
          config: {
            ...state.config,
            [key]: value
          }
        })),

      getConfig: key => {
        const state = get()
        return state.config[key]
      },

      removeConfig: key =>
        set(state => {
          const newConfig = { ...state.config }
          delete newConfig[key]
          return { config: newConfig }
        }),

      clearConfig: () => set({ config: {} })
    }),
    {
      name: 'app-config-storage',
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
