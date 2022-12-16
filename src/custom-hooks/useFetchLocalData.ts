import { useEffect, useState, useCallback } from 'react';

export default function useFetchLocalData(filename: string) {
  const [data, setData] = useState<{ [key: string] : any }>({})
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      const importedAgentData = await import(`../data/${filename}`);
      setData({ ...importedAgentData.agentData });
    } catch (err: any) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [filename]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, fetchData }

}  