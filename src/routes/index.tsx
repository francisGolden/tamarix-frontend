import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

type Plant = {
  user: {
    id: string
    username: string
    new: boolean
  }
  plantIdentifier: string
  seedIdentifier: string
  harvestTimestamp: string
  quantity: number
  id: string
}


function HomeComponent() {
  const [garden, setGarden] = useState<Plant[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = import.meta.env.VITE_USER_ID;
        if (!userId) {
          throw new Error('Missing VITE_USER_ID in .env');
        }
        const query = new URLSearchParams({ userId });
        const response = await fetch(`/api/garden?${query}`);
        const result = await response.json();
        setGarden(JSON.parse(JSON.stringify(result)));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h3>Welcome Home!</h3>
      {garden ? <pre><ul>
        {garden.map((item: Plant) => {
          return <li key={item.id}>{item.plantIdentifier} x{item.quantity}</li>
        })}
        </ul></pre> : 'Loading...'}
    </main>
  )
}
