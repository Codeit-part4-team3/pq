import { Socket, io } from 'socket.io-client';
import { create } from 'zustand';

const SOCKET_SERVER_URL = 'https://api.pqsoft.net:3000';

interface EventState {
  socket: Socket | null;
  isEventActive: boolean | null;
  initializeSocket: () => void;
  disconnectSocket: () => void;
}

export const useEventStore = create<EventState>((set, get) => ({
  socket: null,
  isEventActive: null,

  initializeSocket: () => {
    try {
      const socket = io(SOCKET_SERVER_URL);
      socket.on('event_status', (status) => {
        set({ isEventActive: status });
        console.log('Event status updated:', status);
      });
      set({ socket });
    } catch (err) {
      console.error('Socket initialization failed:', err);
    }
  },

  disconnectSocket: () => {
    const { socket } = get();
    if (socket) {
      socket.off('event_status');
      socket.disconnect();
      set({ socket: null });
    }
  },
}));

export default useEventStore;
