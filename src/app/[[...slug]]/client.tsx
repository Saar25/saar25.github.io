'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const App = dynamic(() => import('../../components/app/app.tsx').then(({ App }) => App), { ssr: false });

export function ClientOnly() {
    return <App />;
}
