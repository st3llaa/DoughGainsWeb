"use client"; // required for Leaflet in app directory

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // <-- Import here
import L from "leaflet";
// Fix default marker icon issues with Leaflet in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const markets = [
  {
    name: "Ocean Beach Farmers Market",
    schedule: "Wednesdays · 4–8 PM",
    location: "4900 Newport Ave, San Diego",
    note: "Beachside evenings, sunset crowds, community energy",
    lat: 32.7509,
    lng: -117.2519,
  },
  {
    name: "Little Italy Mercato",
    schedule: "Saturdays · 8 AM–2 PM",
    location: "W Date St & Kettner Blvd, San Diego",
    note: "Early mornings, food lovers, bustling atmosphere",
    lat: 32.7200,
    lng: -117.1670,
  },
];

export default function FindUsPage() {
  return (
    <main className="bg-stone-900 px-6 py-24 text-stone-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-semibold mb-6">Find Us</h1>

        <p className="text-lg text-stone-300 mb-16 max-w-2xl">
          We pop up weekly at San Diego farmers markets. Come say hi,
          grab something fresh, and fuel your weekend.
        </p>

        <div className="space-y-16 mb-16">
          {markets.map((market) => (
            <section key={market.name} className="border-b border-stone-700 pb-10">
              <h2 className="text-2xl font-medium mb-2">{market.name}</h2>
              <p className="mb-1 text-stone-200">{market.schedule}</p>
              <p className="mb-2 text-stone-300">{market.location}</p>
              <p className="text-stone-400 text-sm">{market.note}</p>
            </section>
          ))}
        </div>

        {/* ================= MAP ================= */}
        <div className="h-96 w-full rounded-lg overflow-hidden border border-stone-700">
          <MapContainer
            center={[32.7350, -117.21]} // center between both markets
            zoom={12}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {markets.map((market) => (
              <Marker key={market.name} position={[market.lat, market.lng]}>
                <Popup>
                  <strong>{market.name}</strong>
                  <br />
                  {market.schedule}
                  <br />
                  {market.location}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </main>
  );
}
