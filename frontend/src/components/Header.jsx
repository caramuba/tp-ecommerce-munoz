import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { productsCart, useCartStore } from "../store/useCartStore";

const Header = () => {
  const location = useLocation();
  const { getTotalItems, toggleCart } = productsCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-green-950 h-20 border-b sticky top-0 z-50">
      <div className="max-w-7x1 max-h-2 ms-auto px-3 flex justify-between items-center">
        <div className="flex flex-col">
          <Link
            to="/"
            className="text-decoration-none hover: opacity-80 transition-opacity"
          >
            <h1 className="text-xl font-bold text bg-green-500 rounded-md px-2 mt-16 flex justify-center items-center">
              Cogo-House
            </h1>
            <p className="text-xs text-green-300 hidden md:block py-2">
              La tienda del jardinero.
            </p>
          </Link>
        </div>

        <nav className="hidden mt-8 md:flex">
          {}
          <ul className="flex space-x-12">
            {}
            <li>
              <Link
                to="/"
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === "/"
                    ? "bg-green-600 text-white"
                    : "text-green-100 hover:text-green-300"
                }`}
              >
                Inicio
              </Link>
            </li>
            {}
            <li>
              <Link
                to="/products"
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === "/products"
                    ? "bg-green-600 text-white"
                    : "text-green-100 hover:text-green-300"
                }`}
              >
                Productos
              </Link>
            </li>
          </ul>
        </nav>

        {}
        <div className="flex items-center">
          <button
            className="relative mt-8 flex items-center space-x-1.5 bg-green-600 hover:bg-green-500 text-green-100 px-3 py-1 rounded-md text-sm font-medium transition-colors"
            onClick={toggleCart}
            aria-label={`Abrir carrito (${totalItems} items)`}
          >
            {}
            <span className="text-base">🛒</span>

            {}
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems} {}
              </span>
            )}

            {}
            <span className="hidden sm:block">
              Carrito
              {}
              {totalItems > 0 && ` (${totalItems})`}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
