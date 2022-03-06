import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Banner from '../src/components/banner';
import { useScript } from '../src/lib/hook';

const Main: NextPage = () => {
  
  const status = useScript('https://www.google-analytics.com/analytics.js');
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    if(status && !render) setRender(!render);
  },[status]);
  
  return <Banner/>
}

export default Main
