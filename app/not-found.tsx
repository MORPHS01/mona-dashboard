import Link from "next/link";
// import ElectrobayIcon from '@/public/logo/electrobay-icon'

function NotFound() {
  return (
    <main className="flex justify-center items-center w-full h-screen text-center">
      <section>
        <h1 className="text-6xl font-bold flex items-center justify-center">
          404
        </h1>
        <h1 className="text-4xl font-bold text-monaOrange">Page Not Found</h1>
        <p className="mt-4 text-lg">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/transactions"
          className="mt-8 text-monaOrange/80 hover:underline"
        >
          Go back to transactions
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
