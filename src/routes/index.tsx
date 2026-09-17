import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { GardenItem } from "../types/GardenItem";
import { Garden } from "../components/Garden";

export const Route = createFileRoute("/")({
    component: HomeComponent,
        head: () => ({
        meta: [{ title: "Tamarix" }],
    })
});

function HomeComponent() {
    return (
        <main>
            <h1>Tamarix</h1>
            <h3>Welcome Home!</h3>
        </main>
    );
}
