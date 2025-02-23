import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-1/6 md:w-[8%] lg:w-[14%] xl:w-[14%] overflow-scroll bg-black text-white  p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">School managment</span>
        </Link>
        <Menu />
      </div>

      {/* RIGHT */}
      <div className="w-5/6 md:w-[92%] lg:w-[84%] xl:w-[86%] text-white  bg-[black] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
