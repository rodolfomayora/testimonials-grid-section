import React from 'react';
import './assets/styles/style.global.scss';
import { TestimonialsGridSection, AtributionBlock } from './components';

export default function App() {
  return (
    <>
      <main className="App">
        <TestimonialsGridSection />
      </main>
      <AtributionBlock />
    </>
  );
}