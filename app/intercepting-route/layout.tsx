import Link from 'next/link';
import React from 'react';

export default function InterceptingRouteLayoutPage({ children, auth }: {
    children: React.ReactNode;
    auth: React.ReactNode;
}) {
    return (
        <>
            <div>{auth}</div>
            <div>{children}</div>
        </>
    );
}