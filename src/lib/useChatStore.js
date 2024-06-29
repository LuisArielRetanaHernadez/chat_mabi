import { create } from 'zustand'
import { useStore } from './userStorage'

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
  changeChat: async (chatId, user) => {
    const currentUser = useStore.getState().currentUser


    if (currentUser.blocked.includes(user.id)) {
      return set({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: true
      })
    }
  },
  changeBlock: () => {
    set((state) => ({
      ...state, isReceiverBlock: !state.isReceiverBlock
    }))
  }
}))