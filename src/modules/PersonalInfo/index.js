import React from "react";
import { useOutletContext } from "react-router-dom";

function PersonalInfo() {
  const { formData, setFormData, nextStep } = useOutletContext();

  return (
    <>
      <div>
        <h2>Step 1: Personal Info</h2>
      </div>
      <div style={{ paddingBottom: "10px" }}>
        <input
          type="text"
          placeholder="FirstName"
          value={formData.firstname}
          onChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
        />
      </div>
      <div style={{ paddingBottom: "10px" }}>
        <input
          type="text"
          placeholder="LastName"
          value={formData.lastname}
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
        />
      </div>
      <button onClick={() => nextStep("address")}>Next</button>
    </>
  );
}

export default PersonalInfo;
