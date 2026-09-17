import { GardenItem } from "../types/GardenItem"

export const Garden = (props: { garden: GardenItem[] }) => {
    return (
    <ul>
        {props.garden.map(item => {
            return <li key={item.plantIdentifier}>{item.plant.name} x{item.quantity}</li>
        })}
    </ul>)
}