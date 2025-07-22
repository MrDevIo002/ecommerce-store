import Button from "@/ui/Button";
import { MonitorSmartphone } from "lucide-react";

function Welcome() {
   return (
      <div className="flex flex-col items-center justify-center gap-4 mb-20">
         <span>Welcom to</span>
         <div className="flex items-center gap-3">
            <MonitorSmartphone />
            <h2 className="text-2xl font-bold">Digital Shop</h2>
         </div>

         <Button to="/products" className="mt-6">
            Go to products
         </Button>
      </div>
   );
}

export default Welcome;
