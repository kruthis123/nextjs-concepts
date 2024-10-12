import { redirect } from "next/navigation";

async function fetchSomething() {
    try {
        const res = await fetch('https://invalidurl');
        if (!res.ok) return undefined;
        return res.json();
    } catch (e) {
        return undefined
    }
}

export default async function RedirectPage() {
    const fetchResponse = await fetchSomething();
    if (!fetchResponse) {
        redirect('/dashboard');
    }
}