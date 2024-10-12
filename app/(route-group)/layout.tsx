import React from "react";

export default function RouteGroupLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>This is the route group layout page shared by all children of route-group</h1>
            <br/><br/>
            {children}
        </>
    );
}