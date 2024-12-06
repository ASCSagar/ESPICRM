import React from "react";
import { Settings, User } from "lucide-react";

const activities = [
  {
    icon: <User className="text-primary-500" size={20} />,
    label: "New User Registered",
    time: "2 mins ago",
  },
  {
    icon: <Settings className="text-accent-500" size={20} />,
    label: "System Update Completed",
    time: "1 hour ago",
  },
];

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-heading font-bold text-primary-800 mb-6">
        Dashboard
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-shadow">
          <h3 className="text-xl font-semibold text-primary-700 mb-4">
            Recent Activity
          </h3>
          <ul className="space-y-2">
            {activities.map((activity, index) => (
              <li className="flex items-center justify-between" key={index}>
                <div className="flex items-center space-x-3">
                  {activity.icon}
                  <span className="text-sm text-neutral-700">
                    {activity.label}
                  </span>
                </div>
                <span className="text-xs text-neutral-500">
                  {activity.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
