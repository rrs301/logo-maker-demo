import Image from "next/image";
import ControlPanel from "./_components/ControlPanel";

export default function Home() {
  return (
   <div className="grid grid-cols-1 md:grid-cols-6">
        <div className="col-span-2">
          <ControlPanel/>
        </div>
        <div className="col-span-3">
          
          </div>
          <div className="bg-green-50">
            kl
          </div>
    </div>
  );
}
