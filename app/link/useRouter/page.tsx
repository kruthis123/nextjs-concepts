// Used in Client components to programaticaly change routes

'use client'

import { useRouter } from "next/navigation";

export default function UseRouterPage() {
    const router = useRouter();

    return (
        <button onClick={() => router.push('/dashboard')}>
            Link to Dashboard
        </button>
    );
}