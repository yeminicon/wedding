import React from "react";
import { Field } from "formik";

interface ServiceSelectFieldProps {
  services: { name: string; price: number }[];
}

const ServiceSelectField: React.FC<ServiceSelectFieldProps> = ({ services }) => {
  return (
    <Field name="service" as="select" className="w-full border border-gray-300 rounded-lg p-2">
      <option value="">Select Service</option>
      {services.map((service) => (
        <option key={service.name} value={service.name}>
          {service.name}
        </option>
      ))}
    </Field>
  );
};

export default ServiceSelectField;
