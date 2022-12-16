import { useEffect, useState } from 'react';
import { useInterval } from './useInterval';
import useFetchLocalData from './useFetchLocalData';

export default function useFetchLocalDataAsync(filename: string) {
  // const { data, error, loading, fetchData } = useFetchLocalData(filename);
  const [data, setData] = useState<{ [key: string] : any }>({})
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  async function fetchData() {
    try {
      setLoading(true)
      const importedEventData = await import(`../data/${filename}`);
      setData({ ...importedEventData.eventData });
    } catch (err: any) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useInterval(async () => {fetchData()}, 3000);

  return { data, error, loading }

} 