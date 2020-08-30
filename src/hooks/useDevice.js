import { useState, useLayoutEffect } from 'react';
import { debounce } from 'debounce';

const useDevice = (mobileBreakpoint = 768) => {
  const [mobile, setMobile] = useState(window.innerWidth <= mobileBreakpoint);
  const [desktop, setDesktop] = useState(window.innerWidth > mobileBreakpoint);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= mobileBreakpoint) {
        setMobile(true);
        setDesktop(false);
      } else {
        setMobile(false);
        setDesktop(true);
      }
    };

    const debounced = debounce(handleResize, 500);

    window.addEventListener('resize', debounced);
    return () => {
      window.removeEventListener('resize', debounced);
    };
  }, [mobileBreakpoint]);

  return {
    mobile,
    desktop,
  };
};

export default useDevice;
