import React from "react";
import { useOutletContext } from "react-router-dom";

function Address() {
  const { formData, setFormData, nextStep, prevStep } = useOutletContext();

  return (
    <>
      <div>
        <h2>Step 2: Address</h2>
      </div>
      <div style={{ paddingBottom: "10px" }}>
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </div>
      <div style={{ paddingBottom: "10px" }}>
        <input
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </div>
      <div>
        <button onClick={() => prevStep("personal-info")}>Back</button>
        <button onClick={() => nextStep("payment-details")}>Next</button>
      </div>
    </>
  );
}

export default Address;
