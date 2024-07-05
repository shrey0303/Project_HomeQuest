import { FC } from "react";
import  {Location}  from "@/types";
import { FiMapPin } from "react-icons/fi";

type Props = {
  location: Location;
};



const Location: FC<Props> = ({ location }) => {

  const handlechange = () => {
    const address = encodeURIComponent(location.address + ',' + location.district.name + ',' + location.province.name);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(mapUrl, '_blank');
  };
  return (
    <div className="bg-bgColor-soft rounded-lg border border-borderColor p-4">
      <div className="flex items-center mb-3">
        <h3 className="text-2xl font-semibold">Location</h3>
        <FiMapPin className="ml-3 cursor-pointer" size={25} onClick={handlechange} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl">
          Province:<strong className="ml-1">{location.province.name}</strong>
        </p>
        <p className="text-xl">
          District:<strong className="ml-1">{location.district.name}</strong>
        </p>
        <p className="text-xl">
          Address:<strong className="ml-1">{location.address}</strong>
        </p>
      </div>
    </div>
  );
};

export default Location;
