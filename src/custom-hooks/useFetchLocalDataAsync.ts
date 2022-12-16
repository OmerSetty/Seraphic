import { useEffect, useState, useCallback } from 'react';
import { useInterval } from './useInterval';

export default function useFetchLocalDataAsync(filename: string) {
  const [data, setData] = useState<{ [key: string]: any }>({})
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      const importedEventData = await import(`../data/${filename}`);
      setData({ ...importedEventData.eventData });
    } catch (err: any) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [filename]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useInterval(async () => { fetchData() }, 3000);

  return { data, error, loading }
} 