import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { GardenItem } from "../types/GardenItem";
import { Garden } from "../components/Garden";

export const Route = createFileRoute("/garden")({
    component: RouteComponent,
});

function RouteComponent() {
    const [garden, setGarden] = useState<GardenItem[]>();

    useEffect(() => {
        const fetchGarden = async () => {
            try {
                const userId = import.meta.env.VITE_USER_ID;
                if (!userId) {
                    throw new Error("Missing VITE_USER_ID in .env");
                }
                const query = new URLSearchParams({ userId });
                const response = await fetch(`/api/garden?${query}`);
                const result = await response.json();
                setGarden(JSON.parse(JSON.stringify(result)));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchGarden();
    }, []);
    return (
        <div>
            <h1>My Garden</h1>
            {garden ? (
                <pre>
                    <Garden garden={garden} />
                </pre>
            ) : (
                "Loading..."
            )}
        </div>
    );
}
