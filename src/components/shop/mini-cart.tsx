"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { colors } from "@/constants/colors";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";

interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MiniCart({ isOpen, onClose }: MiniCartProps) {
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  const handleRemoveItem = (id: number, name: string) => {
    removeFromCart(id);
    toast("Item removed", {
      description: `${name} has been removed from your cart.`,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
          >
            <div className="flex flex-col h-full">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-semibold">Your Cart</h3>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag
                      className={`h-16 w-16 text-[${colors.primary}] mb-4 opacity-50`}
                    />
                    <h4 className="text-lg font-medium mb-2">
                      Your cart is empty
                    </h4>
                    <p className="text-gray-500 mb-4">
                      Looks like you haven't added any items to your cart yet.
                    </p>
                    <Button
                      className={`bg-[${colors.primary}] hover:bg-[${colors.primaryDark}]`}
                      onClick={onClose}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {cartItems.map((item) => (
                      <motion.li
                        key={item.id}
                        className="flex gap-4 border-b pb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <div
                          className={`relative h-20 w-20 bg-[${colors.backgroundLight}] rounded-md shrink-0`}
                        >
                          <img
                            src={
                              item.image ||
                              "/placeholder.svg?height=100&width=100"
                            }
                            alt={item.name}
                            className="object-contain p-2"
                            style={{ width: "100%", height: "100%" }} // Adjust to fill its container
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className={`text-[${colors.primary}] font-bold`}>
                            ${item.price.toFixed(2)}
                          </p>
                          <div className="flex items-center mt-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="mx-2 w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="ml-auto text-gray-500 hover:text-red-500"
                              onClick={() =>
                                handleRemoveItem(item.id, item.name)
                              }
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="border-t p-4">
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-bold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    Shipping and taxes calculated at checkout
                  </p>
                  <div className="space-y-2">
                    <Button
                      className={`w-full bg-[${colors.primary}] hover:bg-[${colors.primaryDark}]`}
                    >
                      Checkout
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={onClose}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
