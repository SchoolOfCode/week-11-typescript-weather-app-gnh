import { NextResponse } from "next/server";

export async function handler(req, res) {
    const API_KEY = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    res.status(200).json(data);
   
return NextResponse.json({})
}


// function CurrentWeather() {
//     const [data, setData] = useState({});
  
//     const fetchWeather = async () => {
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`;
//       const res = await fetch(url);
//       const searchData = await res.json();
//       setData(searchData);
//       console.log(searchData);
//     };
  
//     useEffect(() => {
//       //This function is executed after the component mounts
//       fetchWeather();
//       //The empty array means this effect runs only once
//     }, []);