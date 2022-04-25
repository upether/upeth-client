import React from 'react';

import PageTemplate from '../components/base/PageTemplate';
import MainGallery from '../components/home/MainGallery';
import DataDisplay from '../components/home/DataDisplay';

export default function Home() {
  return (
    <PageTemplate>
      <MainGallery />
      <DataDisplay />
    </PageTemplate>
  );
}
