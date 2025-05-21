import React, { useState } from "react";
import members from "../../../Data/members.json";

const MemberCheckSection = () => {
  const [emailInput, setEmailInput] = useState("");
  const [foundMember, setFoundMember] = useState(null);
  const [error, setError] = useState("");

  const handleCheckMember = (e) => {
    e.preventDefault();

    if (!emailInput || !/\S+@\S+\.\S+/.test(emailInput)) {
      setError("❌ Email tidak valid!");
      setFoundMember(null);
      return;
    }

    const match = members.find(
      (m) => m.email.toLowerCase() === emailInput.trim().toLowerCase()
    );

    if (match) {
      setFoundMember(match);
      setError("");
    } else {
      setError("❌ Email tidak terdaftar sebagai member.");
      setFoundMember(null);
    }
  };

  const renderCard = () => {
    if (!foundMember) return null;

    let cardColor = "";
    let badge = "";

    switch (foundMember.tipe_member) {
      case "silver":
        cardColor = "border-gray-400 bg-gray-100";
        badge = "🥈";
        break;
      case "gold":
        cardColor = "border-yellow-500 bg-yellow-100";
        badge = "🥇";
        break;
      case "platinum":
        cardColor = "border-blue-400 bg-blue-100";
        badge = "💎";
        break;
      default:
        break;
    }

    return (
      <div className={`p-4 border-2 rounded-xl mt-4 shadow ${cardColor}`}>
        <h3 className="text-xl font-semibold">
          Selamat datang, {foundMember.nama}! {badge}
        </h3>
        <p>
          Anda adalah member <strong>{foundMember.tipe_member.toUpperCase()}</strong>.
        </p>
      </div>
    );
  };

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">🔍 Cek Keanggotaan Member</h2>
        <form onSubmit={handleCheckMember} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Masukkan email Anda"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Cek Member
          </button>
        </form>

        {error && <p className="text-red-600 mt-3 font-semibold">{error}</p>}

        {renderCard()}
      </div>
    </section>
  );
};

export default MemberCheckSection;
