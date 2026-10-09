"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { whatsappLinkWithMessage } from "@/lib/site-config";

const FREE_DELIVERY_THRESHOLD = 499;
const DELIVERY_FEE = 50;

export default function CartPage() {
  const { items, subtotal, hydrated, setQuantity, removeItem } = useCart();
  const quantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;
  const remainingForFreeDelivery = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  const checkoutMessage = [
    "Hi Snaxsa! I'd like to place this order:",
    ...items.map((item) => `${item.name} (${item.weight}) × ${item.quantity} — ₹${item.price * item.quantity}`),
    `Subtotal: ₹${subtotal}`,
    `Delivery: ${delivery === 0 ? "Free" : `₹${delivery}`}`,
    "Taxes and fees: Included",
    `Total: ₹${total}`,
  ].join("\n");
  const checkoutHref = whatsappLinkWithMessage(checkoutMessage);

  if (!hydrated) return <main className="min-h-[70vh] px-5 pb-20 pt-36 text-center text-ink-soft">Loading your cart…</main>;

  return (
    <main className="min-h-[70vh] bg-[#fffaf4] px-5 pb-20 pt-32 md:px-8 md:pt-40">
      <div className="mx-auto max-w-5xl">
        <Link href="/flavours" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft transition hover:text-coral"><ArrowLeft size={16} /> Continue shopping</Link>
        <div className="mt-5 flex items-center gap-3"><ShoppingBag className="text-[#8d512d]" /><h1 className="font-display text-3xl font-extrabold text-[#351522] sm:text-4xl">Your Cart <span className="text-lg font-semibold text-[#947d71]">({items.reduce((sum, item) => sum + item.quantity, 0)})</span></h1></div>

        {items.length === 0 ? (
          <div className="mt-10 rounded-[2rem] border border-[#eadfd4] bg-white p-10 text-center shadow-sm">
            <p className="font-display text-2xl font-bold text-[#351522]">Your cart is waiting for a crunch.</p>
            <p className="mt-2 text-sm text-[#765e58]">Choose a flavour and pack size to add your first jar.</p>
            <Link href="/flavours" className="mt-6 inline-flex rounded-full bg-[#681b34] px-6 py-3 text-sm font-bold text-white hover:bg-[#812443]">Explore flavours</Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="space-y-3">
              {items.map((item) => (
                <article key={item.key} className="flex flex-wrap items-center gap-4 rounded-3xl border border-[#eadfd4] bg-white p-4 shadow-sm sm:flex-nowrap sm:p-5">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#f8efe6]"><Image src={item.image} alt={`${item.name} ${item.weight} jar`} fill sizes="96px" className="object-contain p-1" /></div>
                  <div className="min-w-0 flex-1"><h2 className="font-display text-lg font-bold text-[#351522]">{item.name}</h2><p className="mt-1 text-sm text-[#856f66]">{item.weight} jar · ₹{item.price} each</p><p className="mt-2 font-semibold text-[#681b34]">₹{item.price * item.quantity}</p></div>
                  <div className="flex items-center gap-2 rounded-full border border-[#eadfd4] p-1">
                    <button type="button" onClick={() => setQuantity(item.key, item.quantity - 1)} aria-label={`Decrease ${item.name} ${item.weight} quantity`} className="grid h-8 w-8 place-items-center rounded-full hover:bg-[#f8efe6]"><Minus size={14} /></button>
                    <span className="min-w-5 text-center text-sm font-bold">{item.quantity}</span>
                    <button type="button" onClick={() => setQuantity(item.key, item.quantity + 1)} aria-label={`Increase ${item.name} ${item.weight} quantity`} className="grid h-8 w-8 place-items-center rounded-full hover:bg-[#f8efe6]"><Plus size={14} /></button>
                  </div>
                  <button type="button" onClick={() => removeItem(item.key)} aria-label={`Remove ${item.name} ${item.weight} from cart`} className="grid h-9 w-9 place-items-center rounded-full text-[#9b746c] hover:bg-[#fff0ec] hover:text-[#a43d45]"><Trash2 size={17} /></button>
                </article>
              ))}
            </div>
            <aside className="h-fit rounded-3xl border border-[#eadfd4] bg-white p-6 shadow-sm">
              <h2 className="font-display text-xl font-bold text-[#351522]">Order summary</h2>
              <div className="mt-5 space-y-3 border-t border-[#efe6dd] pt-4 text-sm">
                <div className="flex justify-between"><span className="text-[#765e58]">Sub total</span><span className="font-semibold text-[#351522]">₹{subtotal}</span></div>
                <div className="flex justify-between"><span className="text-[#765e58]">Qty</span><span className="font-semibold text-[#351522]">{quantity} {quantity === 1 ? "item" : "items"}</span></div>
                <div className="flex justify-between"><span className="text-[#765e58]">Taxes and Fee</span><span className="font-semibold text-[#351522]">Included</span></div>
                <div className="flex justify-between"><span className="text-[#765e58]">Delivery Charges</span><span className="font-semibold text-[#351522]">{delivery === 0 ? "Free" : `₹${delivery}`}</span></div>
              </div>
              <div className="mt-4 flex justify-between border-t border-[#efe6dd] pt-4 text-base"><span className="font-bold text-[#351522]">Total</span><span className="font-display text-xl font-extrabold text-[#681b34]">₹{total}</span></div>
              <div aria-live="polite" className="mt-4 rounded-2xl bg-[#fff3e5] p-3 text-xs leading-relaxed text-[#765e58]">
                {remainingForFreeDelivery > 0 ? <>Add <strong className="text-[#681b34]">₹{remainingForFreeDelivery}</strong> more to your cart to enjoy free delivery on orders of ₹499 or more.</> : <strong className="text-[#52744c]">You’ve unlocked free delivery!</strong>}
              </div>
              <a href={checkoutHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#681b34] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#681b34]/15 transition hover:-translate-y-0.5 hover:bg-[#812443]">Check Out</a>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
