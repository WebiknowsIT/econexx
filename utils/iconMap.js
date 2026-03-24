import {
  Search,
  ClipboardCheck,
  Wallet,
  BarChart2,
  ShieldCheck,
  Zap,
  FileBarChart,
  UserCheck,
  Headphones,
  Star,
  HelpCircle, // fallback
} from "lucide-react";

// ✅ Central Icon Map
const ICONS = {
  Search,
  ClipboardCheck,
  Wallet,
  BarChart2,
  ShieldCheck,
  Zap,
  FileBarChart,
  UserCheck,
  Headphones,
  Star,
};

// ✅ Get Icon safely
export const getIcon = (name) => {
  return ICONS[name] || HelpCircle;
};
