"use client";
import React from "react";
import connectDB from "@/db/connectDB";
import { useState } from "react";


const Register = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setLoading(false);
    alert(result.message);
  }

  return (
    <div className="pt-[50px] gap-6 flex flex-col items-center justify-center text-white p-4 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center w-full">
        {/* Name */}
        <div className="w-1/3 flex flex-col gap-2">
          <label className="block mb-1 text-xl">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile */}
        <div className="w-1/3 flex flex-col gap-2">
          <label className="block mb-1 text-xl">Mobile No.</label>
          <input
            type="tel"
            name="mobile"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="w-1/3 flex flex-col gap-2">
          <label className="block mb-1 text-xl">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* College Name */}
        <div className="w-1/3 flex flex-col gap-2">
          <label className="block mb-1 text-xl">College Name</label>
          <input
            type="text"
            name="collegeName"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* College Address */}
        <div className="w-1/3 flex flex-col gap-2">
          <label className="block mb-1 text-xl">College Address</label>
          <textarea
            name="collegeAddress"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* College ID */}
        <div className="w-1/3 flex flex-col gap-2">
          <label className="block mb-1 text-xl">College ID</label>
          <input
            type="text"
            name="collegeId"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* POR */}
        <div className="w-1/3 flex flex-col gap-2">
          <label className="block mb-1 text-xl">POR (Position of Responsibility)</label>
          <select
            name="por"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {/* POR Details */}
        <div className="w-1/3 flex flex-col gap-2">
          <label className="block mb-1 text-xl">If yes, which POR?</label>
          <input
            type="text"
            name="porDetails"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Fest Name */}
        <div className="w-1/3 flex flex-col gap-2">
          <label className="block mb-1 text-xl">Fest Name</label>
          <input
            type="text"
            name="festName"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Fest Footfall */}
        <div className="w-1/3 flex flex-col gap-2">
          <label className="block mb-1 text-xl">Fest Footfall</label>
          <input
            type="number"
            name="festFootfall"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Team Members */}
        <div className="w-1/3 flex flex-col gap-2">
          <label className="block mb-1 text-xl">No. of Members in the Team</label>
          <input
            type="number"
            name="teamMembers"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Instagram */}
        <div className="w-1/3 flex flex-col gap-2">
          <label className="block mb-1 text-xl">Fest Instagram Page Link</label>
          <input
            type="url"
            name="instagramLink"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Website */}
        <div className="w-1/3 flex flex-col gap-2">
          <label className="block mb-1 text-xl">Website Link (if any)</label>
          <input
            type="url"
            name="websiteLink"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Brochure */}
        <div className="w-1/3 flex flex-col gap-2">
          <label className="block mb-1 text-xl">Fest Brochure (Drive Link)</label>
          <input
            type="url"
            name="brochureLink"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Collaboration */}
        <div className="w-1/3 flex flex-col gap-2">
          <label className="block mb-1 text-xl">
            What kind of collaboration are they looking for?
          </label>
          <textarea
            name="collaborationType"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-1/3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Register;
