export default function Footer() {
    return (
      <footer className="py-6 bg-black border-t border-gray-800 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SuperStore. All rights reserved.
      </footer>
    );
  }