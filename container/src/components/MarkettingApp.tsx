import { mount } from 'marketting/MarkettingApp';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Location } from 'history';

const MarkettingApp: React.FC = () => {
  const ref = useRef(null);
  const currentLocation = useLocation();
  const navigate = useNavigate();
  const onParentNavigateCb = useRef<(location: Location) => void>();

  useEffect(() => {
    if (!ref.current) return;

    const { onParentNavigate } = mount(ref.current, {
      onNavigate: (update) => {
        const { pathname: nextPathname } = update.location;
        const { pathname } = currentLocation;
        if (pathname === nextPathname) {
          return;
        }

        navigate(nextPathname, { replace: true });
      }
    });

    onParentNavigateCb.current = onParentNavigate;
  }, []);

  useEffect(() => {
    if (onParentNavigateCb.current) {
      onParentNavigateCb.current(currentLocation);
    }
  }, [currentLocation, onParentNavigateCb]);

  return <div ref={ref} />;
};

export default MarkettingApp;
