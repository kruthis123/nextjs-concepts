export default async function ErrorPage() {
    await fetch('https://invalidurl');
    return <h1>Url was loaded</h1>
}