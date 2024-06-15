import Image from "next/image";
import Link from "next/link";
import ProductCard from "./componets/ProductCard/ProductCard";

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </div>
  );
}
