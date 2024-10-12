export default function DynamicRoutePage({ params } : { params: { user: string }}) {
    const { user } = params;
    return <h1>Hi {user}!</h1>;
}