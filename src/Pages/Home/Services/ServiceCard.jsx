import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white text-black px-6 py-10 shadow-md hover:shadow-lg hover:bg-primary transition-all duration-300 rounded-2xl">
      <div className="flex justify-center">
        <div className="flex items-center justify-center gap-4 mb-4 bg-gray-50 w-16 h-16 rounded-full">
          {service.icon}
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold my-5">{service.title}</h3>
        <p className="text-sm text-[#606060]">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
