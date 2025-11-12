import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 hover:text-gray-700"
            >
              🏠 Accueil
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/products"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Produits
            </Link>
            <Link
              href="/products/new"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              + Nouveau Produit
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
