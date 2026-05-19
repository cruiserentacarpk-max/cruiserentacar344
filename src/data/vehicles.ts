import hondaBrv from "@/assets/cars/honda-br-v.jpg";
import landCruiser from "@/assets/cars/toyota-land-cruiser.jpg";
import prado from "@/assets/cars/toyota-prado.jpg";
import fortuner from "@/assets/cars/toyota-fortuner.jpg";
import revo from "@/assets/cars/toyota-hilux-revo.jpg";
import sportage from "@/assets/cars/kia-sportage.jpg";
import sonata from "@/assets/cars/hyundai-sonata.jpg";
import tucson from "@/assets/cars/hyundai-tucson.jpg";
import city25 from "@/assets/cars/honda-city-2025.jpg";
import yaris26 from "@/assets/cars/toyota-yaris-2026.jpg";
import yaris23 from "@/assets/cars/toyota-yaris-2023.jpg";
import civicX from "@/assets/cars/honda-civic-x.jpg";
import civic11 from "@/assets/cars/honda-civic-11.jpg";
import alto from "@/assets/cars/suzuki-alto.jpg";
import cultus from "@/assets/cars/suzuki-cultus.jpg";
import chr from "@/assets/cars/toyota-c-hr.jpg";
import coaster from "@/assets/cars/toyota-coaster.jpg";
import hiace from "@/assets/cars/toyota-hiace.jpg";
import grandCabin from "@/assets/cars/hyundai-grand-cabin.jpg";
import mercC200 from "@/assets/cars/mercedes-c200.jpg";
import taycan from "@/assets/cars/porsche-taycan.jpg";
import i8 from "@/assets/cars/bmw-i8.jpg";
import audiA6 from "@/assets/cars/audi-a6.jpg";
import bentley from "@/assets/cars/bentley-continental-gt.jpg";
import havalH6 from "@/assets/cars/haval-h6.jpg";

export type DriveOption = "self-drive" | "with-driver";

export type Vehicle = {
  slug: string;
  name: string;
  category: "economic" | "luxury" | "vans";
  seats: number;
  transmission: "Automatic" | "Manual";
  fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  year: number;
  luggage: string;
  drive: DriveOption[];
  features: string[];
  tagline: string;
  image: string;
};

export const vehicles: Vehicle[] = [
  // Economic
  { slug: "honda-br-v", name: "Honda BR-V", category: "economic", seats: 7, transmission: "Automatic", fuel: "Petrol", year: 2023, luggage: "4 bags", drive: ["self-drive", "with-driver"], features: ["AC", "Airbags", "Bluetooth", "GPS"], tagline: "Family-ready 7-seater for any journey", image: hondaBrv },
  { slug: "toyota-land-cruiser", name: "Toyota Land Cruiser", category: "economic", seats: 7, transmission: "Automatic", fuel: "Petrol", year: 2022, luggage: "6 bags", drive: ["self-drive", "with-driver"], features: ["4WD", "AC", "Airbags", "Sunroof", "GPS"], tagline: "The legendary SUV. Built for everywhere.", image: landCruiser },
  { slug: "toyota-prado", name: "Toyota Prado", category: "economic", seats: 7, transmission: "Automatic", fuel: "Petrol", year: 2022, luggage: "5 bags", drive: ["self-drive", "with-driver"], features: ["4WD", "AC", "Leather", "Sunroof"], tagline: "Refined off-road luxury", image: prado },
  { slug: "toyota-fortuner", name: "Toyota Fortuner", category: "economic", seats: 7, transmission: "Automatic", fuel: "Petrol", year: 2023, luggage: "5 bags", drive: ["self-drive", "with-driver"], features: ["4WD", "AC", "Airbags", "GPS"], tagline: "Bold presence, unstoppable drive", image: fortuner },
  { slug: "toyota-hilux-revo", name: "Toyota Hilux Revo", category: "economic", seats: 5, transmission: "Automatic", fuel: "Diesel", year: 2022, luggage: "Open bed", drive: ["self-drive", "with-driver"], features: ["4WD", "AC", "Airbags"], tagline: "Tough. Reliable. Anywhere.", image: revo },
  { slug: "kia-sportage", name: "Kia Sportage", category: "economic", seats: 5, transmission: "Automatic", fuel: "Petrol", year: 2024, luggage: "4 bags", drive: ["self-drive", "with-driver"], features: ["AC", "Airbags", "Panoramic Roof", "GPS"], tagline: "Modern crossover. Smart drive.", image: sportage },
  { slug: "hyundai-tucson", name: "Hyundai Tucson", category: "economic", seats: 5, transmission: "Automatic", fuel: "Petrol", year: 2023, luggage: "4 bags", drive: ["self-drive", "with-driver"], features: ["AC", "Airbags", "Panoramic Roof", "Cruise", "GPS"], tagline: "Bold design, refined drive", image: tucson },
  { slug: "hyundai-sonata", name: "Hyundai Sonata", category: "economic", seats: 5, transmission: "Automatic", fuel: "Petrol", year: 2023, luggage: "3 bags", drive: ["self-drive", "with-driver"], features: ["AC", "Leather", "Bluetooth", "Sunroof"], tagline: "Elegant executive sedan", image: sonata },
  { slug: "honda-city-2025", name: "Honda City 2025", category: "economic", seats: 5, transmission: "Automatic", fuel: "Petrol", year: 2025, luggage: "3 bags", drive: ["self-drive", "with-driver"], features: ["AC", "Airbags", "Touchscreen"], tagline: "Sharp. Efficient. New.", image: city25 },
  { slug: "toyota-yaris-2026", name: "Toyota Yaris 2026", category: "economic", seats: 5, transmission: "Automatic", fuel: "Petrol", year: 2026, luggage: "3 bags", drive: ["self-drive", "with-driver"], features: ["AC", "Airbags", "Bluetooth"], tagline: "Smooth city ride", image: yaris26 },
  { slug: "toyota-yaris-2023", name: "Toyota Yaris 2023", category: "economic", seats: 5, transmission: "Automatic", fuel: "Petrol", year: 2023, luggage: "3 bags", drive: ["self-drive", "with-driver"], features: ["AC", "Airbags", "Bluetooth"], tagline: "Reliable comfort", image: yaris23 },
  { slug: "honda-civic-x", name: "Honda Civic X", category: "economic", seats: 5, transmission: "Automatic", fuel: "Petrol", year: 2021, luggage: "3 bags", drive: ["self-drive", "with-driver"], features: ["AC", "Sunroof", "Leather"], tagline: "Sporty sedan icon", image: civicX },
  { slug: "honda-civic-11", name: "Honda Civic 11th Generation", category: "economic", seats: 5, transmission: "Automatic", fuel: "Petrol", year: 2024, luggage: "3 bags", drive: ["self-drive", "with-driver"], features: ["AC", "Sunroof", "Leather", "Cruise"], tagline: "Bold next-gen styling", image: civic11 },
  { slug: "suzuki-alto", name: "Suzuki Alto", category: "economic", seats: 4, transmission: "Automatic", fuel: "Petrol", year: 2023, luggage: "1 bag", drive: ["self-drive", "with-driver"], features: ["AC", "Airbags"], tagline: "Easy. Light. Efficient.", image: alto },
  { slug: "suzuki-cultus", name: "Suzuki Cultus", category: "economic", seats: 5, transmission: "Automatic", fuel: "Petrol", year: 2023, luggage: "2 bags", drive: ["self-drive", "with-driver"], features: ["AC", "Airbags"], tagline: "Compact city favorite", image: cultus },
  { slug: "toyota-c-hr", name: "Toyota C-HR", category: "economic", seats: 5, transmission: "Automatic", fuel: "Petrol", year: 2022, luggage: "3 bags", drive: ["self-drive", "with-driver"], features: ["AC", "GPS", "Sunroof"], tagline: "Striking crossover", image: chr },
  { slug: "haval-h6", name: "Haval H6", category: "economic", seats: 5, transmission: "Automatic", fuel: "Petrol", year: 2024, luggage: "4 bags", drive: ["self-drive", "with-driver"], features: ["Panoramic Roof", "360 Camera", "Leather", "ADAS"], tagline: "Next-gen SUV with futuristic luxury", image: havalH6 },

  // Vans & Buses
  { slug: "toyota-coaster", name: "Toyota Coaster", category: "vans", seats: 28, transmission: "Manual", fuel: "Petrol", year: 2022, luggage: "Roof + rear", drive: ["self-drive", "with-driver"], features: ["AC", "Reclining Seats", "Curtains"], tagline: "Group travel done right", image: coaster },
  { slug: "toyota-hiace", name: "Toyota HiAce", category: "vans", seats: 13, transmission: "Manual", fuel: "Petrol", year: 2023, luggage: "Large", drive: ["self-drive", "with-driver"], features: ["AC", "Reclining Seats", "GPS"], tagline: "Premium van for any trip", image: hiace },
  { slug: "hyundai-grand-cabin", name: "Toyota HiAce Grand Cabin", category: "vans", seats: 13, transmission: "Manual", fuel: "Petrol", year: 2023, luggage: "Large", drive: ["self-drive", "with-driver"], features: ["AC", "Sunroof", "Reclining Seats"], tagline: "Spacious luxury van", image: grandCabin },

  // Luxury
  { slug: "mercedes-c200", name: "Mercedes-Benz C200", category: "luxury", seats: 5, transmission: "Automatic", fuel: "Petrol", year: 2023, luggage: "3 bags", drive: ["self-drive", "with-driver"], features: ["Leather", "Ambient Light", "GPS", "Premium Audio"], tagline: "The benchmark of executive class", image: mercC200 },
  { slug: "porsche-taycan", name: "Porsche Taycan", category: "luxury", seats: 4, transmission: "Automatic", fuel: "Petrol", year: 2023, luggage: "2 bags", drive: ["with-driver"], features: ["Sport Mode", "Premium Audio", "Leather"], tagline: "Pure Porsche performance", image: taycan },
  { slug: "bmw-i8", name: "BMW i8", category: "luxury", seats: 4, transmission: "Automatic", fuel: "Petrol", year: 2020, luggage: "1 bag", drive: ["with-driver"], features: ["Butterfly Doors", "Sport Mode"], tagline: "A supercar from the future", image: i8 },
  { slug: "audi-a6", name: "Audi A6", category: "luxury", seats: 5, transmission: "Automatic", fuel: "Petrol", year: 2023, luggage: "3 bags", drive: ["with-driver"], features: ["Leather", "Virtual Cockpit", "GPS", "Premium Audio"], tagline: "Sophisticated German engineering", image: audiA6 },
  { slug: "bentley-continental-gt", name: "Bentley Continental GT", category: "luxury", seats: 4, transmission: "Automatic", fuel: "Petrol", year: 2022, luggage: "2 bags", drive: ["with-driver"], features: ["Handcrafted Leather", "Massage Seats", "Premium Audio", "GPS"], tagline: "The pinnacle of grand touring", image: bentley },
];

export const getVehicle = (slug: string) => vehicles.find(v => v.slug === slug);
export const featuredVehicles = vehicles.slice(0, 8);
