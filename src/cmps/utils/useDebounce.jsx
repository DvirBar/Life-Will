import { useEffect, useState } from 'react'

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        const handler = setTimeout(() => {
            setDebounceValue(value)
            setIsLoading(false)
        }, delay)
        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return {
        debounceValue,
        isLoading
    }
}

export default useDebounce