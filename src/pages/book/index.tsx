import { useState } from "react";
import { Input, Tab, Tabs } from "@nextui-org/react";
import { FaWallet, FaWhatsapp } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import hybridlash from "../../assets/product/hybridlash.jpg";
import megalash from "../../assets/product/megalash.jpg";
import classiclash from "../../assets/product/classiclash.jpg";
import ombrebrows from "../../assets/product/ombrebrow.jpg";
import volumelash from "../../assets/product/volumelash.jpg";

const services = [
  {
    name: "Classic lash set",
    price: 14000,
    time: "50min",
    image: classiclash,
    info: {
      1: "easy to make",
      2: "massage inclusive",
    },
  },
  {
    name: "Hybrid lash set",
    price: 17000,
    time: "50/1hr",
    image: hybridlash,
    info: {
      1: "easy to make",
      2: "massage inclusive",
    },
  },
  {
    name: "Volume lash set",
    price: 23000,
    time: "1hr-1hr20min",
    image: volumelash,
    info: {
      1: "easy to make",
      2: "massage inclusive",
    },
  },
  {
    name: "Mega volume",
    price: 30000,
    time: "1hr/1hr-30min",
    image: megalash,
    info: {
      1: "easy to make",
      2: "massage inclusive",
    },
  },
  {
    name: "Ombré brows",
    price: 60000,
    time: "1hr",
    image: ombrebrows,
    info: {
      1: "easy to make",
      2: "massage inclusive",
    },
  },
  {
    name: "Microblading",
    price: 60000,
    time: "1hr",
    image: "defaultImageUrl",
    info: {
      1: "easy to make",
      2: "massage inclusive",
    },
  },
  {
    name: "Combo brows",
    price: 70000,
    time: "1hr",
    image: "defaultImageUrl",
    info: {
      1: "easy to make",
      2: "massage inclusive",
    },
  },
];

const BookingSchema = Yup.object().shape({
  name: Yup.string().required("Your name is required"),
  phone: Yup.string().required("Phone number is required"),
  service: Yup.string().required("Service selection is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
});

const ITEMS_PER_PAGE = 6;

const BookMe = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedService] = useState("");

  const handleSubmit = async (values: any) => {
    const { name, phone, service, date, time } = values;

    const whatsappMessage = `Hello, I would like to book the following service:
    \nService: ${service}
    \nName: ${name}
    \nPhone: ${phone}
    \nDate: ${date}
    \nTime: ${time}`;
    const whatsappUrl = `https://wa.me/+2348064774505?text=${encodeURIComponent(whatsappMessage)}`;

    try {
      await axios.post("/api/booking", values);
      console.log("Form data saved successfully");
    } catch (error) {
      console.error("Error saving form data", error);
    }

    window.open(whatsappUrl, "_blank");
  };

  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);
  const currentServices = services.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const selectedServiceDetails = services.find((service) => service.name === selectedService);

  return (
    <div className="w-[95%] md:max-w-[1200px] p-5 mx-auto">
      <div className="w-full text-[1.25rem] bg-blue-300 h-[100%] p-5 rounded-2xl my-10">
        <h1 className="font-bold">What to do next, Customer</h1>
        <p>Find exclusive services from the gallery below</p>

        <Tabs className="mt-6 w-[95%] mx-auto  " aria-label="Service and Contact Tabs">
          <Tab title="Book Service">
            <Formik
              initialValues={{
                name: "",
                phone: "",
                service: "",
                date: "",
                time: "",
              }}
              validationSchema={BookingSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange }) => (
                <Form>
                  <div className="mt-6">
                    <div className="flex md:flex-row justify-between flex-col gap-4">
                      <div className="w-[95%] mx-auto md:w-[32%]">
                        <Field
                          name="name"
                          as={Input}
                          startContent={<FaWallet />}
                          placeholder="Your name"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500" />
                      </div>
                      <div className="w-[95%] mx-auto md:w-[32%]">
                        <Field
                          name="service"
                          as="select"
                          className="w-full border border-gray-300 rounded-lg p-2"
                          value={values.service}
                          onChange={handleChange}
                        >
                          <option value="">Select Service</option>
                          {services.map((serve) => (
                            <option key={serve.name} value={serve.name}>
                              {serve.name}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage name="service" component="div" className="text-red-500" />
                      </div>

                      <div className="w-[95%] mx-auto md:w-[32%]">
                        <Field
                          name="phone"
                          as={Input}
                          startContent={<FaWallet />}
                          placeholder="Your phone number"
                        />
                        <ErrorMessage name="phone" component="div" className="text-red-500" />
                      </div>
                    </div>

                    <div className="flex md:flex-row flex-col gap-4 mt-4">
                      <div className="w-[95%] mx-auto md:w-[32%]">
                        <Field
                          name="date"
                          type="date"
                          className="border border-gray-300 rounded-lg p-2"
                        />
                        <ErrorMessage name="date" component="div" className="text-red-500" />
                      </div>

                      <div className="w-[95%] mx-auto md:w-[32%]">
                        <Field
                          name="time"
                          type="time"
                          className="border border-gray-300 rounded-lg p-2"
                        />
                        <ErrorMessage name="time" component="div" className="text-red-500" />
                      </div>
                      <div className="w-[95%] mx-automd:w-[32%]">
                        <h1>Selected Service:</h1>
                        {selectedServiceDetails ? (
                          <>
                            <p>{selectedServiceDetails.name}</p>
                            <p>Price: N{selectedServiceDetails.price}</p>
                            <p>Time: {selectedServiceDetails.time}</p>
                          </>
                        ) : (
                          <p>No service selected</p>
                        )}
                      </div>
                    </div>

                    <div className="w-[95%] mx-auto md:w-[32%] mt-4">
                      <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-4 rounded-lg"
                      >
                        Submit and Contact on WhatsApp
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </Tab>

          <Tab title="WhatsApp Contact" className="bg-[bg-[#4ef54e]]">
            <div className="flex flex-col items-center mt-6 ">
              <h1 className="font-bold text-[#1da81d]">WhatsApp Connect</h1>
              <a
                href="https://wa.me/+2348064774505"
                className="flex items-center mt-4 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} className="mr-2 text-[#1da81d]" />
                Chat with us on WhatsApp
              </a>
            </div>
          </Tab>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:p-5 gap-4">
        {currentServices.map((service, index) => (
          <div
            key={index}
            className="py-4 md:p-4 w-[95%] md:w-[100%] mx-auto border rounded-lg shadow-sm"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-[200px] mx-auto h-[200px] object-cover mb-4"
            />
            <h2 className="text-lg font-semibold text-center">{service.name}</h2>
            <p className="text-gray-600 text-center">Price: N{service.price}</p>
            <p className="text-gray-600 text-center">Time: {service.time}</p>
            <ol>
              <li className="text-gray-600 text-center"> {service.info[1]}</li>
              <li className="text-gray-600 text-center"> {service.info[2]}</li>
            </ol>

            <button className="mt-2 mx-auto bg-blue-500 text-white px-4 py-2 rounded-lg">Book Now</button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 p-10">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookMe;
