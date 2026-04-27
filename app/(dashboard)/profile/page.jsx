"use client";

import { useState, useEffect } from "react";
import {getInitials} from "@/utils/helper"
import ProfileSidebar from "./ProfileSidebar";
import Button from "@/components/ui/Button";


import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from '@/store/action/authActions';
import Link from "next/link";


import CustomPopup from "@/components/ui/Popup/CustomPopup";
import ExploreCards from "./Explorecards";

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
    secondary: "bg-secondary-100 text-secondary-600 border border-secondary-200",
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
            : "bg-white border-slate-200 text-slate-700 focus:border-secondary-400 focus:ring-2 focus:ring-secondary-100 cursor-text"
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
        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 outline-none focus:border-secondary-400 focus:ring-2 focus:ring-secondary-100 transition-all duration-150 cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

/* ── Edit Profile Form ─────────────────────────────────────────────────────── */
function EditProfileForm({ form, onChange, user }) {
  return (
    <div className="flex flex-col gap-4">
      <InputField
        label="Full Name"
        name="name"
        value={form.name}
        onChange={onChange}
      />
      <InputField
        label="Email Address"
        name="email"
        value={form.email}
        onChange={onChange}
        type="email"
      />
      <InputField
        label="Phone Number"
        name="phone"
        value={form.phone}
        onChange={onChange}
        type="tel"
      />
      <div className="grid grid-cols-2 gap-3">
        <SelectField
          label="Country"
          name="country"
          value={form.country}
          onChange={onChange}
          options={[
            { value: "India", label: "India" },
            { value: "USA", label: "USA" },
            { value: "UK", label: "UK" },
            // Add more countries as needed
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
  );
}

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { userProfile, loading, error } = useSelector((state) => state.auth);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "India",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const user = userProfile || {};

  useEffect(() => {
    if (user && user.id) {
      setEditForm({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        country: user.country || "India",
      });
    }
  }, [user?.id]);

  const handleEditChange = (e) => {
    setEditForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSaveProfile = async () => {
    setSaving(true);
    try {
      const result = await dispatch(updateProfile(editForm));
      if (result.meta.requestStatus === 'fulfilled') {
        // Refresh profile data
        dispatch(getProfile());
        setShowEditPopup(false);
      } else {
        throw new Error(result.payload || "Failed to update profile");
      }
    } catch (err) {
      console.error("Failed to save:", err);
      // Optionally show error toast or something
    } finally {
      setSaving(false);
    }
  };

  // Handle loading state
  if (loading) {
    return (
      <div className="flex min-h-screen bg-slate-50 font-sans items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-secondary-100 rounded-full">
            <svg className="animate-spin w-6 h-6 text-secondary-500" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" />
              <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.75" />
            </svg>
          </div>
          <p className="text-slate-600 font-medium">Loading profile...</p>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="flex min-h-screen bg-slate-50 font-sans items-center justify-center">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-red-100 rounded-full">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4v2m0-10a8 8 0 100 16 8 8 0 000-16z" />
            </svg>
          </div>
          <p className="text-slate-800 font-medium mb-2">Failed to load profile</p>
          <p className="text-slate-600 text-sm mb-4">{error}</p>
          <Button
            onClick={() => dispatch(getProfile())}
            className="bg-secondary-500 hover:bg-secondary-600 text-white"
          >
            Retry
          </Button>
        </div>
      </div>
    );
  }

  // Handle no data state
  if (!user || !user.id) {
    return (
      <div className="flex min-h-screen bg-slate-50 font-sans items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 font-medium">No profile data available. Please log in again.</p>
        </div>
      </div>
    );
  }



  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <ProfileSidebar user={user} />
      <main className="flex-1 p-8 overflow-y-auto overflow-x-hidden relative ">

       <ExploreCards />

        <div className="mb-7 flex gap-3 justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-800 m-0">My Profile</h1>
            <p className="text-sm text-slate-400 mt-1 mb-0">Manage your personal account information</p>
          </div>
          
          <Button
            size="sm"
            onClick={() => setShowEditPopup(true)}
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
          <FieldCard label="Full Name" value={user.name || "—"} colSpan={1} />
          <FieldCard label="Email Address" value={user.email || "—"} colSpan={1} />
          <FieldCard label="Phone Number" value={user.phone ? formatPhone(user.phone) : "—"} />
          <FieldCard label="Country" value={user.country || "India"} capitalize />
          <FieldCard label="Role" value={user.role || "—"} capitalize />
          <FieldCard label="Member ID" value={user.id ? formatMemberId(user.id) : "—"} mono />
        </div>

       


      </main>

      {showEditPopup && (
        <CustomPopup
          title="Edit Profile"
          subTitle="Update your personal information"
          popupBody={<EditProfileForm form={editForm} onChange={handleEditChange} user={user} />}
          popupFooter={
            <div className="flex items-center justify-end gap-2.5">
              <button
                onClick={() => setShowEditPopup(false)}
                className="px-5 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:bg-slate-100 transition-colors duration-150"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProfile}
                disabled={saving}
                className={`px-6 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-150 flex items-center gap-2
                  ${saving
                    ? "bg-secondary-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-secondary-500 to-secondary-400 hover:from-secondary-600 hover:to-secondary-500 shadow-md shadow-secondary-200 cursor-pointer"
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
          }
          close={() => setShowEditPopup(false)}
          size="w-full max-w-md"
          closeOnOutsideClick={true}
        />
      )}
    </div>
  );
}