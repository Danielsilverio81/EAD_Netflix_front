"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return null; // Este componente não renderiza nada visível
};

export default AOSInitializer;