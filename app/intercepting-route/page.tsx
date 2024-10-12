// Interception not working :(

import Link from 'next/link';

export default function InterceptingRoutePage() {
    return (
        <>
            <Link href='/intercepting-route/login' passHref>Intercepted Login Page should appear on click</Link>
        </>
    )
}