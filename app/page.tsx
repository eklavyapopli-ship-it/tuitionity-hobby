import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
<>
<div className="h-screen w-full place-content-center place-items-center flex bg-white">
<div className="flex gap-10">
  <Link href="/privacy-policy" className="bg-black cursor-pointer text-white py-3 px-2">
Privacy Policy
</Link>
  
<Link href="/terms-of-service" className="bg-black cursor-pointer text-white py-3 px-2">
Terms Of Service
</Link>
</div>

</div>
</>
  );
}
