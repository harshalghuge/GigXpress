import {
  Award,
  CheckCircle,
  DollarSign,
  Star,
  TrendingUp,
} from "lucide-react";

export const volunteerStats = [
  {
    label: "Total Earnings",
    value: "Rs 25,400",
    icon: DollarSign,
    color: "from-green-500 to-green-600",
    change: "+Rs 4.2k",
  },
  {
    label: "Completed Gigs",
    value: "18",
    icon: CheckCircle,
    color: "from-blue-500 to-blue-600",
    change: "+3",
  },
  {
    label: "Trust Score",
    value: "4.8",
    icon: Star,
    color: "from-yellow-500 to-yellow-600",
    change: "+0.2",
  },
  {
    label: "Skill Badges",
    value: "8",
    icon: Award,
    color: "from-purple-500 to-purple-600",
    change: "+2",
  },
];

export const completedGigs = [
  {
    id: 1,
    title: "New Year Party Staff",
    organizer: "Elite Events",
    date: "2025-01-01",
    earned: "Rs 2,000",
    rating: 5,
    review: "Excellent work! Very professional and punctual.",
  },
  {
    id: 2,
    title: "Corporate Conference",
    organizer: "Tech Solutions Ltd",
    date: "2024-12-20",
    earned: "Rs 1,800",
    rating: 4.5,
    review: "Great job! Would hire again.",
  },
];

export const portfolioBadges = [
  {
    name: "Event Pro",
    icon: "[EP]",
    color: "bg-blue-100 text-blue-700",
    earned: "2024-12-15",
  },
  {
    name: "Reliable Worker",
    icon: "[RW]",
    color: "bg-yellow-100 text-yellow-700",
    earned: "2024-11-20",
  },
  {
    name: "Top Rated",
    icon: "[TR]",
    color: "bg-purple-100 text-purple-700",
    earned: "2025-01-10",
  },
  {
    name: "Marketing Expert",
    icon: "[ME]",
    color: "bg-green-100 text-green-700",
    earned: "2024-10-05",
  },
  {
    name: "Quick Learner",
    icon: "[QL]",
    color: "bg-orange-100 text-orange-700",
    earned: "2024-09-12",
  },
  {
    name: "Team Player",
    icon: "[TP]",
    color: "bg-indigo-100 text-indigo-700",
    earned: "2024-08-30",
  },
];

export const progressLevels = [
  { level: "Beginner", gigs: "0-5", current: false },
  { level: "Volunteer", gigs: "6-15", current: false },
  { level: "Regular", gigs: "16-30", current: true },
  { level: "Professional", gigs: "31-50", current: false },
  { level: "Expert", gigs: "51+", current: false },
];

export const earningCards = [
  {
    label: "Total Earnings",
    val: "Rs 25,400",
    sub: "+18% from last month",
    icon: DollarSign,
    color: "from-green-500 to-green-600",
  },
  {
    label: "Pending",
    val: "Rs 3,200",
    sub: "2 gigs in escrow",
    icon: CheckCircle,
    color: "from-blue-500 to-blue-600",
  },
  {
    label: "This Month",
    val: "Rs 4,200",
    sub: "3 completed gigs",
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-600",
  },
];
