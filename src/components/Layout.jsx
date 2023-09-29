import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';

import Section from './Section';

export const Layout = () => {
  return (
    <div>
      <AppBar />

      <main>
        <Suspense fallback={null}>
          <Section>
            <Outlet />
          </Section>
        </Suspense>
      </main>
    </div>
  );
};
