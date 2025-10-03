export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} TrendySales. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-3">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
    );
  }
  