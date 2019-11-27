import { useLayoutEffect, useEffect, useCallback } from 'react'

/**
 * @see https://usehooks.com/useLockBodyScroll/
 */
export function useLockBodyScroll() {
  useLayoutEffect(() => {
   // Get original body overflow
   const originalStyle = window.getComputedStyle(document.body).overflow
   // Prevent scrolling on mount
   document.body.style.overflow = 'hidden'

   // Re-enable scrolling when component unmounts
   return () => {
     document.body.style.overflow = originalStyle
   }
  }, [])
}

/**
 * @see https://usehooks.com/useKeyPress/
 */
export function useKeyPress(key: string, callback: () => void) {
  const handler = useCallback((event: KeyboardEvent) => {
    if (event.key === key) callback()
  }, [])

  useEffect(() => {
    window.addEventListener('keyup', handler);

    return () => {
      window.removeEventListener('keyup', handler);
    }
  }, [key])
}