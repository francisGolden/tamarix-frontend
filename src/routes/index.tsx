import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { GardenItem } from '../types/GardenItem';
import { Garden } from '../components/Garden';

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  const [garden, setGarden] = useState<GardenItem[]>();

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
      <h1>Tamarix</h1>
      <h3>Welcome Home!</h3>
      {garden ? 
        <pre>
          <Garden garden={garden} />
        </pre> 
        : 'Loading...'
      }
    </main>
  )
}
