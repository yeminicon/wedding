import React from "react";

const GiftAndSponsor = () => {
  return (
    <div className="w-[95%] md:max-w-[1000px] mx-auto my-10 bg-white shadow-lg rounded-lg p-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
        Gift to the Couple & Sponsor the Wedding
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Your love and support mean the world to us. If you'd like to give us a wedding gift or sponsor our big day, please find the details below. We appreciate your generosity and kindness!
      </p>

      {/* Bank Details Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Bank Details</h2>
        <p className="text-gray-700 mb-2">
          <strong>Bank Name:</strong> Guaranty Trust Bank
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Account Number:</strong> 0538679106
        </p>
        <p className="text-gray-700">
          <strong>Account Name:</strong> Akinyele Adeyemi
        </p>
      </div>

      {/* Send Gift Options */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Send Gift Through</h2>
        <ul className="list-disc list-inside text-gray-700">
          {/* <li>
            <strong>Cash App:</strong> $AkinyeleAdeyemi
          </li>
          <li>
            <strong>PayPal:</strong>{" "}
            <a
              href="https://paypal.me/akinyele"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 underline"
            >
              paypal.me/akinyele
            </a>
          </li>
          <li>
            <strong>Zelle:</strong> akinyele@example.com
          </li> */}
          <li>
            <strong>Physical Gifts:</strong> Please contact us at{" "}
            <a
              href="mailto:weddingplanner@example.com"
              className="text-pink-500 underline"
            >
              08144616094
            </a>{" "}
            for delivery details.
          </li>
        </ul>
      </div>

      {/* Sponsor Information */}
      <div>
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Sponsor the Wedding</h2>
        <p className="text-gray-700 mb-4">
          If you'd like to sponsor a part of the wedding, please get in touch with us to discuss the details. Your contributions, big or small, are greatly appreciated and will make our day even more special.
        </p>
        <p className="text-gray-700">
          <strong>Contact:</strong>{" "}
          <a
            href="mailto:sponsor@example.com"
            className="text-pink-500 underline"
          >
            sponsor@example.com
          </a>{" "}
          or call us at <strong>+1 234-567-8910</strong>.
        </p>
      </div>
    </div>
  );
};

export default GiftAndSponsor;
