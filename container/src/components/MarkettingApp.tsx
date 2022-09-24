import { mount } from 'marketting/MarkettingApp';
import { useEffect, useRef } from 'react';

export const MarkettingApp: React.FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
