import React, { FC } from 'react'
import { io, Socket } from 'socket.io-client'
import { selectInitApp, setInitApp } from '../redux/actions/common/commonSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
// defining the context with empty socket object
export type WebSocketType = {
  socket: Socket
}

export const SocketContext = React.createContext<WebSocketType>({} as WebSocketType)

type Props = {
  children: JSX.Element
}

export const WebSocketProvider: FC<Props> = ({ children }) => {
  const [socket, setSocket] = React.useState<Socket>({} as Socket)
  const dispatch = useAppDispatch()

  const initApp = useAppSelector(selectInitApp)

  React.useEffect(() => {
    const socketUrl = process.env.REACT_APP_API_SOCKET_URL || 'https://super.lotusbook360.live'
    const newSocket: Socket = io(socketUrl, {
      transports: ['websocket', 'polling'],
      autoConnect: true,
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
      timeout: 20000
    })
    
    newSocket.on('connect', () => {
      console.log('✅ Connected to API Socket:', socketUrl)
      dispatch(setInitApp(true))
    })
    
    newSocket.on('connect_error', (error: Error) => {
      console.warn('❌ API Socket connection error:', error.message)
    })
    
    
    setSocket(newSocket)
  }, [])

  // React.useEffect(() => {
  //   const newSocket: Socket = io(process.env.REACT_APP_API_SOCKET_URL!, {
  //     transports: ['websocket'],
  //   })

  //   setSocket(newSocket)
  // }, [initApp])

  return (
    <SocketContext.Provider value={{ socket }}>
      {Object.keys(socket).length > 0 && children}
    </SocketContext.Provider>
  )
}

// defining a useWebsocket hook for functional components
export const useWebsocket = () => React.useContext(SocketContext)
