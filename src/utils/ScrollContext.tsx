import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from 'react'

interface ScrollContextProps {
  scroll: number
  setScroll: React.Dispatch<React.SetStateAction<number>>
  isVisible: boolean
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined)

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(true)
  const [scroll, setScroll] = useState<number>(0)
  const onScroll = useCallback(() => {
    const currentScroll = Math.round(window.scrollY)
    setScroll(currentScroll)
    if (currentScroll > scroll) {
      // Скролл вниз
      setIsVisible(false)
    } else {
      // Скролл вверх
      setIsVisible(true)
    }
  }, [scroll])
  useEffect(() => {
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <ScrollContext.Provider value={{ scroll, setScroll, isVisible }}>
      {children}
    </ScrollContext.Provider>
  )
}

export const useScroll = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}
