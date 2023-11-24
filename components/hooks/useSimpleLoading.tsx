import { useState, useEffect } from 'react';

const useSimpleLoading = (delay = 0) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return loading;
};

export default useSimpleLoading;
