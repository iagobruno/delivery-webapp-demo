import { useState, useLayoutEffect, useEffect, useCallback, useMemo } from 'react'
import { convertArrayIntoObject } from './functions'
import { menu } from '../data'

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

export function useMenuFilter<Key extends string>(
  filterList: Key[]
) {
  const [filters, setFilters] = useState<Record<Key, string | boolean | null>>(
    () => convertArrayIntoObject(filterList, null) as any
  )

  const filteredMenu = useMemo(() => {
    let menuClone = [...menu]

    // Filtrar por tipo
    if (filters['kind']) {
      menuClone = menuClone.filter(plate => plate.kind === filters['kind'])
    }

    // Ordenar por preço
    if (filters['price']) {
      if (filters['price'] === 'cheap') {
        menuClone = menuClone.sort((a: any, b: any) => {
          return (a.priceEstimate || a.price || Infinity) - (b.priceEstimate || b.price || Infinity)
        })
      }
      if (filters['price'] === 'expensive') {
        menuClone = menuClone.sort((a: any, b: any) => {
          return (b.priceEstimate || b.price || 0) - (a.priceEstimate || a.price || 0)
        })
      }
    }

    // Filtrar por pratos com desconto
    if (filters['withDiscount']) {
      menuClone = menuClone.filter(plate => typeof plate.discount !== 'undefined')
    }

    // Filtrar por pratos personalizáveis
    if (filters['customizable']) {
      menuClone = menuClone.filter(plate => typeof plate.fields !== 'undefined')
    }

    return menuClone
  }, Object.values(filters))


  function setFilter(key: string, newValue: string | boolean) {
    if (filters[key] === newValue) {
      setFilters(filters => ({
        ...filters,
        [key]: null,
      }))
      return;
    }

    setFilters(filters => ({
      ...filters,
      [key]: newValue
    }))
  }

  function clearFilters() {
    setFilters(convertArrayIntoObject(filterList) as any)
  }

  return {
    filteredMenu,
    filters,
    setFilter,
    clearFilters
  };
}