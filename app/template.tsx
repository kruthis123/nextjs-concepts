// This is injected between Layout and Page
// It does not maintain same instance of component across routes unlike Layout
// State is not preserved across routes unlike Layout

export default function Template({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
}