import { create } from 'zustand'
import { useStore } from './userStorage'

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
  changeChat: async (chatId, user) => {
    const currentUser = useStore.getState().currentUser
    console.log('user ', user, ' currentUser ', currentUser)
    if (user.blocked.includes(currentUser.id)) {
      return set({
        chatId,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false
      })
    }

    if (currentUser.blocked.includes(user.id)) {
      return set({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: true
      })
    } else {
      return set({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: false
      })
    }
  },
  changeBlock: () => {
    set((state) => ({
      ...state, isReceiverBlock: !state.isReceiverBlock
    }))
  },
  resetChat: () => {
    set((state) => ({
      ...state, chatId: null, user: null, isCurrentUserBlocked: false, isReceiverBlocked: false
    }))
  }
}))