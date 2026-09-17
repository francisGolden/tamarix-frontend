import { GardenItem } from "../types/GardenItem"

export const Garden = (props: { garden: GardenItem[] }) => {
    const garden = props.garden;
    return (
    <ul>
        {garden.map(item => {
            return <li key={item.plantIdentifier}>{item.plant.name} x{item.quantity}</li>
        })}
    </ul>)
}