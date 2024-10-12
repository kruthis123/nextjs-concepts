'use client'

export default function Error({ error, reset }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <>
            <h1>Oops something went wrong! Please try again later</h1>
            <br/><br/>
            <button onClick={() => reset()}>Click here to reset</button>
        </>
    );
}