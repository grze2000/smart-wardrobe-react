import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface LayoutStore {
  isNavigationOpended: boolean
  toggleNavigation: () => void
}

export const useLayout = create<LayoutStore>()(
  devtools(
    persist((set) => ({
      isNavigationOpended: false,
      toggleNavigation: () => {
        set((state) => ({
          isNavigationOpended: !state.isNavigationOpended,
        }))
      },
    }), {
      name: 'layout-storage',
    }),
  ),
)
