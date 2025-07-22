import Button from "@/ui/Button";
import { MonitorSmartphone } from "lucide-react";
import Container from "../Container";

function Welcome() {
   return (
      <Container>
         <div className="flex flex-col justify-center items-center gap-4">
            <span>Welcom to</span>
            <div className="flex items-center gap-3">
               <MonitorSmartphone />
               <h2 className="text-2xl font-bold">Digital Shop</h2>
            </div>

            <Button to="/products" className="mt-6">
               Go to products
            </Button>
         </div>
      </Container>
   );
}

export default Welcome;
