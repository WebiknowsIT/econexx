"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {getInitials} from "@/utils/helper"
import ProfileSidebar from "./ProfileSidebar";
import Button from "@/components/ui/Button";

// ─── Replace with your real auth/session data ───────────────────────────────
const mockUser = {
  id: 6,
  name: "Monukumar Gautam",
  email: "monukumareng1@gmail.com",
  phone: "9768612444",
  role: "buyer",
  account_type: "resident",
  country: null,
};
// ────────────────────────────────────────────────────────────────────────────



function formatPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
}

function formatMemberId(id) {
  return `USR-${String(id).padStart(6, "0")}`;
}

/* ── Badge ─────────────────────────────────────────────────────────────────── */
function Badge({ children, variant = "purple" }) {
  const cls = {
    orange: "bg-orange-100 text-orange-600 border border-orange-200",
    purple: "bg-purple-50 text-purple-600 border border-purple-200",
  };
  return (
    <span className={`text-[10px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full capitalize ${cls[variant]}`}>
      {children}
    </span>
  );
}

/* ── Info Field Card ────────────────────────────────────────────────────────── */
function FieldCard({ label, value, colSpan, mono, capitalize }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-xl p-4 ${colSpan === 2 ? "col-span-2" : ""}`}>
      <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mb-1.5">{label}</p>
      {mono ? (
        <span className="font-mono text-xs text-purple-400 bg-purple-50 px-2.5 py-1 rounded-md inline-block">
          {value}
        </span>
      ) : (
        <p className={`text-sm font-medium text-slate-700 ${capitalize ? "capitalize" : ""}`}>{value}</p>
      )}
    </div>
  );
}

/* ── Stat Card ──────────────────────────────────────────────────────────────── */
function StatCard({ label, value }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm">
      <p className="text-2xl font-bold text-orange-500 leading-none mb-1.5">{value}</p>
      <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-400">{label}</p>
    </div>
  );
}

/* ── Input Field ────────────────────────────────────────────────────────────── */
function InputField({ label, name, value, onChange, type = "text", disabled = false }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold tracking-widest uppercase text-slate-400">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-medium outline-none transition-all duration-150
          ${disabled
            ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
            : "bg-white border-slate-200 text-slate-700 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 cursor-text"
          }`}
      />
    </div>
  );
}

/* ── Select Field ───────────────────────────────────────────────────────────── */
function SelectField({ label, name, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold tracking-widest uppercase text-slate-400">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-150 cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

/* ── Edit Profile Modal ─────────────────────────────────────────────────────── */
function EditProfileModal({ user, onClose, onSave }) {
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    account_type: user.account_type,
  });
  const [saving, setSaving] = useState(false);
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef(null);

  // Mount check for portal
  useEffect(() => {
    setMounted(true);
    // Prevent background scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // ── Replace with your API call ──────────────────────────────────────
      // const res = await fetch("/api/user/update", {
      //   method: "PUT",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // const data = await res.json();
      await new Promise((r) => setTimeout(r, 900)); // mock delay
      // ───────────────────────────────────────────────────────────────────
      onSave({ ...user, ...form });
      onClose();
    } catch (err) {
      console.error("Failed to save:", err);
    } finally {
      setSaving(false);
    }
  };

  if (!mounted) return null;

  const modal = (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(15, 10, 40, 0.45)", backdropFilter: "blur(4px)" }}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
        style={{ boxShadow: "0 25px 60px rgba(108,72,182,0.18), 0 4px 20px rgba(0,0,0,0.1)" }}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between px-6 py-5 border-b border-slate-100">
          <div>
            <h2 className="text-base font-bold text-slate-800">Edit Profile</h2>
            <p className="text-xs text-slate-400 mt-0.5">Update your personal information</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 text-lg leading-none transition-colors duration-150 shrink-0 mt-0.5"
          >
            ×
          </button>
        </div>

        {/* Form Fields */}
        <div className="px-6 py-5 flex flex-col gap-4">
          <InputField
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <InputField
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
          />
          <InputField
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
          />
          <div className="grid grid-cols-2 gap-3">
            <SelectField
              label="Account Type"
              name="account_type"
              value={form.account_type}
              onChange={handleChange}
              options={[
                { value: "resident", label: "Resident" },
                { value: "non-resident", label: "Non-Resident" },
              ]}
            />
            <InputField
              label="Role"
              name="role"
              value={user.role}
              onChange={() => {}}
              disabled
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-2.5 px-6 py-4 border-t border-slate-100 bg-slate-50">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:bg-slate-100 transition-colors duration-150"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className={`px-6 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-150 flex items-center gap-2
              ${saving
                ? "bg-orange-300 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 shadow-md shadow-orange-200 cursor-pointer"
              }`}
          >
            {saving ? (
              <>
                <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
                  <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Saving…
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

/* ── Main Profile Page ──────────────────────────────────────────────────────── */
export default function ProfilePage() {
  const [user, setUser] = useState(mockUser);
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <ProfileSidebar user={user} />
      <main className="flex-1 p-8 overflow-y-auto overflow-x-hidden relative ">
            
        <div className="mb-7 flex gap-3 justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-800 m-0">My Profile</h1>
            <p className="text-sm text-slate-400 mt-1 mb-0">Manage your personal account information</p>
          </div>
          
          <Button
            onClick={() => setShowEditModal(true)}
            variant="outline"
            className="flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9.5 2.5l2 2L4 12H2v-2L9.5 2.5z" />
            </svg>
            Edit Profile
          </Button>
        </div>

    
       
        <div className="grid grid-cols-2 gap-3.5 mb-5">
          <FieldCard label="Full Name" value={user.name} colSpan={1} />
          <FieldCard label="Email Address" value={user.email} colSpan={1} />
          <FieldCard label="Phone Number" value={formatPhone(user.phone)} />
          <FieldCard label="Account Type" value={user.account_type} capitalize />
          <FieldCard label="Role" value={user.role} capitalize />
          <FieldCard label="Member ID" value={formatMemberId(user.id)} mono />
        </div>
      </main>

      {showEditModal && (
        <EditProfileModal
          user={user}
          onClose={() => setShowEditModal(false)}
          onSave={(updated) => setUser(updated)}
        />
      )}
    </div>
  );
}