"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";

export default function CartIcon() {
  const { itemCount, hydrated } = useCart();
  return (
    <Link href="/cart" aria-label={`Shopping cart, ${hydrated ? itemCount : 0} items`} className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/10 bg-white/70 text-ink transition hover:bg-white">
      <ShoppingBag size={19} />
      {hydrated && itemCount > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-coral px-1 text-[10px] font-bold text-white">{itemCount}</span>}
    </Link>
  );
}
