async function fetchSomething() {
    try {
        const res = await fetch('https://httpbin.org/get');
        return res.json();
    } catch (e) {
        return undefined
    }
}

export default async function RedirectPage() {
    const fetchResponse = await fetchSomething();
    return <h1>Content Loaded</h1>;
}