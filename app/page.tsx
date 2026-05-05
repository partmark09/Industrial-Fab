import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NexusBrand from "./components/NexusBrand";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Advantages from "./components/Advantages";
import Cases from "./components/Cases";
import Clients from "./components/Clients";
import About from "./components/About";
import Quality from "./components/Quality";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ManufacturingBusiness',
  name: 'NexusFab',
  description: 'Full-cycle contract metal manufacturing: laser cutting, CNC machining, welding, surface treatment. 210,000 m² production area, 125,000 t/year, 65 countries.',
  areaServed: ['UA', 'EU', 'Worldwide'],
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 500 },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Metal Manufacturing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CNC Machining Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CNC Milling and Turning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sheet Metal Fabrication' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Metal Laser Cutting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Metal Bending Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Robotic Welding' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Powder Coating & Surface Treatment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tube Cutting and Bending' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Metal Assembly and Integration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structural Steel Fabrication' } },
    ],
  },
  knowsAbout: [
    'contract metal manufacturing', 'custom metal fabrication', 'precision CNC machining',
    'sheet metal fabrication', 'laser cutting metal parts', 'robotic welding',
    'powder coating', 'galvanizing', 'chrome plating', 'tube fabrication',
    'agricultural machinery fabrication', 'energy equipment fabrication',
    'defense industry metal components', 'industrial machinery components',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Industries />
        <NexusBrand />
        <Services />
        <Advantages />
        <Cases />
        <Clients />
        <About />
        <Quality />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
