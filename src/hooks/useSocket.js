import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

export const useSocket = (onDataUpdate) => {
  const socketRef = useRef(null);
  const onDataUpdateRef = useRef(onDataUpdate);
  
  // Keep the latest onDataUpdate function reference
  useEffect(() => {
    onDataUpdateRef.current = onDataUpdate;
  }, [onDataUpdate]);
  
  useEffect(() => {
    // Create socket connection
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    socketRef.current = io(apiUrl, {
      transports: ['websocket', 'polling'],
      timeout: 10000,
    });
    
    const socket = socketRef.current;
    
    // Connection event handlers
    socket.on('connect', () => {
      console.log('🔗 Connected to server:', socket.id);
    });
    
    socket.on('disconnect', (reason) => {
      console.log('🔗 Disconnected from server:', reason);
    });
    
    socket.on('connect_error', (error) => {
      console.error('❌ Socket connection error:', error);
    });
    
    // Listen for data updates using ref to always get latest function
    socket.on('data-updated', (data) => {
      console.log('📡 Received real-time update');
      if (onDataUpdateRef.current) {
        onDataUpdateRef.current(data);
      }
    });
    
    // Cleanup on unmount
    return () => {
      if (socket) {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('connect_error');
        socket.off('data-updated');
        socket.disconnect();
      }
    };
  }, []); // No dependencies to prevent re-connections
  
  return socketRef.current;
};