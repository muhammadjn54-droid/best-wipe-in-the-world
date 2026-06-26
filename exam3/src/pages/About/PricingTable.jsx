import React from "react";

export default function PricingTable() {
  const features = [
    { name: "Real estate advertising", complete: true, partial: true },
    { name: "Search for tenants", complete: true, partial: true },
    { name: "Conclusion of a lease agreement", complete: true, partial: true },
    { name: "Getting paid", complete: true, partial: true },
    { name: "Key handover", complete: true, partial: true },
    { name: "Payment processing", complete: true, partial: true },
    { name: "Dealing with repair requests", complete: true, partial: true },
    { name: "DEWA connection (electricity/water)", complete: true, partial: true },
    {
      name: "Registration of the rental agreement Ejari",
      complete: true,
      partial: true,
    },
    { name: "Separate administrator", complete: true, partial: true },
    { name: "Detailed inspection of the object", complete: false, partial: true },
    { name: "Property preparation before arrival", complete: false, partial: true },
    { name: "Reporting", complete: false, partial: true },
    { name: "Repair Request Management", complete: false, partial: true },
    { name: "Repair management", complete: false, partial: true },
  ];

  return (
    <section className=" py-20 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="grid grid-cols-3 bg-[#F5C842] text-black text-sm font-medium">
          <div className="px-6 py-4">
            Included in the package
          </div>

          <div className="text-center py-4">
            Complete management
          </div>

          <div className="text-center py-4">
            Partial control
          </div>
        </div>

        <div>
          {features.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 items-center text-white text-sm ${
                index % 2 === 0
                  ? "bg-[#2B2B2B]"
                  : "bg-[#232323]"
              }`}
            >
              <div className="px-6 py-3 font-medium">
                {item.name}
              </div>

              <div className="text-center text-[#F5C842] text-lg font-bold">
                {item.complete && "✓"}
              </div>

              <div className="text-center text-[#F5C842] text-lg font-bold">
                {item.partial && "✓"}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}