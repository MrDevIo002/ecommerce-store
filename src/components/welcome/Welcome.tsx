import { MonitorSmartphone } from "lucide-react";

function Welcome() {
   return (
      <div className="flex flex-col justify-center items-center gap-4">
         <span>Welcom to</span>
         <div className="flex items-center gap-3">
            <MonitorSmartphone />
            <h2 className="text-2xl font-bold">Digital Shop</h2>
         </div>

         <button className="mt-6">Go to products</button>
      </div>
   );
}

export default Welcome;
