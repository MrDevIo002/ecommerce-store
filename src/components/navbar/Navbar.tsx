import Button from "@/ui/Button";
import { MonitorSmartphone, ShoppingCart } from "lucide-react";

function Navbar() {
   return (
      <nav className="sticky top-0 z-[999] mt-12">
         <div className="flex w-full items-center justify-between rounded-4xl bg-white px-12 py-5 shadow-2xl">
            <div className="flex w-[200px] items-center justify-between">
               <MonitorSmartphone />
               <Button variant="round" to="/">
                  Digital Shop
               </Button>
            </div>
            <ShoppingCart />
         </div>
      </nav>
   );
}

export default Navbar;
