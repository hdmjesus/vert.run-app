import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface AuthStore {
  token: string | null
  setToken: (token: string) => void
  getToken: () => string | null
  removeToken: () => void
  clearToken: () => void
}

export const useAuthStorage = create<AuthStore>()(
  persist(
    (set, get) => ({
      token: null,

      setToken: token => set({ token }),

      getToken: () => {
        const state = get()
        return state.token
      },

      removeToken: () => set({ token: null }),

      clearToken: () => set({ token: null })
    }),
    {
      name: 'auth-storage', // El nombre en el que se guarda el estado
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
