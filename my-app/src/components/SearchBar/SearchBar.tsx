import { useState } from "react";

export default function SearchBar() {
    const[city, setCity] = useState("");

    function handleSubmit() {
        //when the city is submitted by the user
        //updates the name
    }

return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name" />
        <button
        type="submit">Submit city name</button>
    </form>
    <p>Output:{city}</p>
    </>
)
}

