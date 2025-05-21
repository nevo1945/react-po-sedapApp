import React from 'react';
import ProductCard from '../components/ProductCard';

// --- Data JSON Dummy ---
// Di aplikasi nyata, data ini akan diambil dari API
const dummyProducts = [
  { id: 1, name: "Rendang Daging Sapi Istimewa", price: 75850, imageUrl: "/img/rendang15.jpg", description: "Rendang empuk khas Padang." },
  { id: 2, name: "Nasi Goreng Kampung Spesial", price: 28450, imageUrl: "/img/nasigorengkampung.webp", description: "Nasi Goreng Kampung Spesial." },
  { id: 3, name: "Soto Ayam Lamongan Gurih", price: 20500, imageUrl: "/img/soto12.webp", description: "Kuah soto bening yang segar dengan suwiran ayam." },
  { id: 4, name: "Ayam Bakar Bumbu Rujak", price: 30499, imageUrl: "/img/ayambakar15.webp", description: "Ayam bakar pedas manis dengan bumbu rujak meresap." },
];


const TopProductsSection = () => {
  return (
    <section id="top-products" className="py-16 lg:py-24 bg-gray-50"> {/* Latar belakang sedikit berbeda */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Resep Paling Populer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat resep-resep yang paling sering dicoba dan disukai oleh pengguna Sedap lainnya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Ganti dummyProducts dengan 'products' jika fetch data */}
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProductsSection;