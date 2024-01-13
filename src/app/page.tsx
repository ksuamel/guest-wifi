import ToastHandler from "@/components/organism/ToastHandler";
import WifiDetails from "@/components/organism/WifiDetails";
import Link from "next/link";

export default function Home() {
  return (
    <main className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="absolute top-0 right-0 p-4">
        <Link href="/scan" className="text-gray-700 underline mr-4">
          Scan
        </Link>
      </div>
      <div className="text-white flex min-h-screen flex-col items-center justify-center p-16">
        <WifiDetails />
      </div>
      <ToastHandler />
    </main>
  );
}
