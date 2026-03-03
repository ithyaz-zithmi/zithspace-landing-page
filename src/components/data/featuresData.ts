import {
  FiUsers,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
  FiUserPlus,
  FiUserCheck,
  FiClock,
  FiCalendar,
  FiTrendingUp,
  FiPieChart,
  FiFileText,
  FiCreditCard,
  FiFolder,
  FiCheckSquare,
  FiShield,
  FiGlobe,
  FiSliders,
  FiLayers,
} from "react-icons/fi";

export interface Feature {
  id: string;
  icon: any;
  title: string;
  description: string;
}

export interface Module {
  id: string;
  name: string;
  icon: any;
  headerTitle: string;
  headerSubtitle: string;
  features: Feature[];
}

export const modules: Module[] = [
  {
    id: "HR",
    name: "HR Management",
    icon: FiUsers,
    headerTitle: "HR Management",
    headerSubtitle: "Manage People with Clarity",
    features: [
      {
        id: "onboarding",
        icon: FiUserPlus,
        title: "Employee Onboarding & Exit",
        description: "Ensure smooth joining and exit processes.",
      },
      {
        id: "employee-mgmt",
        icon: FiUserCheck,
        title: "Employee Management",
        description: "Maintain centralized employee records securely.",
      },
      {
        id: "attendance",
        icon: FiClock,
        title: "Attendance Management",
        description: "Monitor attendance in real time.",
      },
      {
        id: "leave",
        icon: FiCalendar,
        title: "Leave Management",
        description: "Configure leave policies and manage approvals easily.",
      },
      {
        id: "hierarchy",
        icon: FiTrendingUp,
        title: "Hierarchy & Org Structure",
        description: "Define reporting structures clearly.",
      },
      {
        id: "tree-view",
        icon: FiPieChart,
        title: "Tree View",
        description: "Visualize your organization structure instantly.",
      },
    ],
  },
  {
    id: "Finance",
    name: "Finance Management",
    icon: FiDollarSign,
    headerTitle: "Finance Module",
    headerSubtitle: "Stay in Control of Your Finances",
    features: [
      {
        id: "accounts",
        icon: FiFileText,
        title: "Accounts Management",
        description: "Track credits, debits, and net balance with filters.",
      },
      {
        id: "invoice",
        icon: FiCreditCard,
        title: "Invoice Module",
        description:
          "Create, manage, and track invoices with approval options.",
      },
      {
        id: "reimbursement",
        icon: FiFolder,
        title: "Reimbursement Module",
        description: "Manage employee claims with structured approvals.",
      },
      {
        id: "payroll",
        icon: FiCheckSquare,
        title: "Payroll Module",
        description: "Generate payslips and manage salary structures securely.",
      },
    ],
  },
  {
    id: "Work",
    name: "Work Management",
    icon: FiBriefcase,
    headerTitle: "Work Module",
    headerSubtitle: "Plan Smart. Execute Better.",
    features: [
      {
        id: "project",
        icon: FiBriefcase,
        title: "Project Management",
        description: "Ensure smooth joining and exit processes.",
      },
      {
        id: "ticket",
        icon: FiLayers,
        title: "Ticket Management",
        description: "Maintain centralized employee records securely.",
      },
      {
        id: "timesheet",
        icon: FiClock,
        title: "Timesheet Management",
        description: "Monitor attendance in real time.",
      },
      {
        id: "updates",
        icon: FiFileText,
        title: "Updates (EOD/BOD)",
        description: "Configure leave policies and manage approvals easily.",
      },
      {
        id: "shift",
        icon: FiSettings,
        title: "Shift Timing Allocation",
        description: "Define reporting structures clearly.",
      },
      {
        id: "document",
        icon: FiFolder,
        title: "Document Hub",
        description: "Visualize your organization structure instantly.",
      },
    ],
  },
  {
    id: "Admin",
    name: "Admin Management",
    icon: FiSettings,
    headerTitle: "Admin Module",
    headerSubtitle: "Control Access. Manage System.",
    features: [
      {
        id: "rbac",
        icon: FiShield,
        title: "RBAC (Role-Based Access Control)",
        description: "Assign roles and control user permissions securely.",
      },
      {
        id: "client",
        icon: FiGlobe,
        title: "Client Management",
        description: "Manage client profiles and pricing models easily.",
      },
      {
        id: "settings",
        icon: FiSliders,
        title: "General Settings",
        description: "Configure company and system preferences in one place.",
      },
      {
        id: "dashboard",
        icon: FiLayers,
        title: "Dashboard Settings",
        description: "Customize dashboards with key metrics and reports.",
      },
    ],
  },
];
