"use client";
import { Card } from "@/components/ui/card";
import { Application } from "@/type";
import {
  Briefcase,
  CheckCircle2,
  Clock,
  DollarSign,
  Eye,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface AppliedJobsProps {
  applications: Application[];
}

const AppliedJobs: React.FC<AppliedJobsProps> = ({ applications }) => {
  const getStatusConfig = (status: string) => {
    switch (status.toLowerCase()) {
      case "hired":
        return {
          icon: CheckCircle2,
          color: "text-green-600 dark:bg-green-900/30",
          bg: "bg-green-100 dark:bg-green-900/30",
          border: "border-green-200 dark:border-green-800",
        };
      case "rejected":
        return {
          icon: XCircle,
          color: "text-red-600 dark:bg-red-900/30",
          bg: "bg-red-100 dark:bg-red-900/30",
          border: "border-red-200 dark:border-red-800",
        };
      default:
        return {
          icon: Clock,
          color: "text-yellow-600 dark:bg-yellow-900/30",
          bg: "bg-yellow-100 dark:bg-yellow-900/30",
          border: "border-yellow-200 dark:border-yellow-800",
        };
    }
  };
 return (
  <div className="max-w-6xl mx-auto px-4 py-10">

    <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 
    bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl shadow-xl rounded-2xl">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
            <Briefcase size={20} />
          </div>
          <h1 className="text-2xl font-bold">Applied Jobs</h1>
        </div>

        <p className="text-sm opacity-90">
          {applications.length} applications submitted
        </p>
      </div>

      {/* BODY */}
      <div className="p-6">

        {applications && applications.length > 0 ? (
          <div className="space-y-5">

            {applications.map((a) => {
              const statusConfig = getStatusConfig(a.status);
              const StatusIcon = statusConfig.icon;

              return (
                <div
                  key={a.application_id}
                  className="group p-5 rounded-xl border 
                  bg-white dark:bg-gray-900 
                  hover:shadow-2xl hover:-translate-y-1 
                  transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">

                    {/* LEFT */}
                    <div className="flex-1 space-y-3">

                      <h3 className="text-lg md:text-xl font-semibold 
                      group-hover:text-purple-600 transition">
                        {a.job_title}
                      </h3>

                      <div className="flex flex-wrap gap-3 items-center">

                        {/* SALARY */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                        bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium">
                          <DollarSign size={14} />
                          ₹ {a.job_salary}
                        </div>

                        {/* STATUS */}
                        <div
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-medium
                          ${statusConfig.bg} ${statusConfig.border}`}
                        >
                          <StatusIcon
                            size={14}
                            className={statusConfig.color}
                          />
                          <span className={statusConfig.color}>
                            {a.status}
                          </span>
                        </div>

                      </div>
                    </div>

                    {/* BUTTON */}
                    <Link href={`/jobs/${a.job_id}`}>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg 
                      bg-gradient-to-r from-purple-600 to-indigo-600 text-white 
                      text-sm font-medium shadow-md hover:shadow-lg 
                      hover:scale-105 transition">
                        <Eye size={16} />
                        View
                      </button>
                    </Link>

                  </div>
                </div>
              );
            })}

          </div>
        ) : (

          /* EMPTY STATE */
          <div className="flex flex-col items-center justify-center py-16 text-center">

            <div className="h-20 w-20 rounded-full bg-gray-200 dark:bg-gray-800 
            flex items-center justify-center mb-4">
              <Briefcase size={30} className="text-gray-600 dark:text-gray-300" />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              No Applications Yet
            </h3>

            <p className="text-sm opacity-70 mb-6">
              Start applying to jobs and track your progress here.
            </p>

            <Link href="/jobs">
              <button className="px-6 py-2 rounded-lg bg-purple-600 text-white 
              hover:bg-purple-700 transition shadow-md">
                Browse Jobs
              </button>
            </Link>

          </div>
        )}

      </div>
    </Card>
  </div>
);
};

export default AppliedJobs;
