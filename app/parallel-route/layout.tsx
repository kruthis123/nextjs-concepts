import React from "react";

export default function ParallelRouteLayout({ children, route1, route2 }: {
    children: React.ReactNode;
    route1: React.ReactNode;
    route2: React.ReactNode;
}) {
    return (
        <>
            {children}
            <br/>
            {route1}
            <br/>
            {route2}
        </>
    );
}