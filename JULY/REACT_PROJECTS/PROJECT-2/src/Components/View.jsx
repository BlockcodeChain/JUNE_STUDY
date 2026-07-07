import { students } from "./data";
import {
  Eye,
  Pencil,
  Trash2,
  Mail,
  GraduationCap,
  Hash,
  Award,
} from "lucide-react";

const View = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-10 py-8 mt-10">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Student Management
        </h1>

        <p className="text-gray-500 mt-1">
          Total Students:{" "}
          <span className="font-semibold text-blue-600">
            {students.length}
          </span>
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 duration-300 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-24 relative">
              <div className="absolute left-1/2 -bottom-8 -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center text-2xl font-bold text-blue-600 shadow-lg">
                  {student.name.charAt(0)}
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="pt-12 px-5 pb-5">
              <h2 className="text-xl font-bold text-center text-gray-800">
                {student.name}
              </h2>

              <p className="text-center text-sm text-gray-500 mt-1">
                Roll No : {student.rollNo}
              </p>

              {/* Status */}
              <div className="flex justify-center mt-4">
                <span
                  className={`px-4 py-1 rounded-full text-xs font-semibold ${
                    student.marks >= 50
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {student.marks >= 50 ? "Passed" : "Failed"}
                </span>
              </div>

              {/* Details */}
              <div className="mt-6 space-y-4 text-sm">

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-gray-500">
                    <GraduationCap size={16} />
                    Department
                  </div>

                  <span className="font-semibold text-gray-800">
                    {student.department}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Hash size={16} />
                    Semester
                  </div>

                  <span className="font-semibold text-gray-800">
                    {student.semester}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Award size={16} />
                    Marks
                  </div>

                  <span
                    className={`font-bold ${
                      student.marks >= 50
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {student.marks}
                  </span>
                </div>

                <div className="flex gap-2">
                  <Mail
                    size={16}
                    className="text-gray-500 mt-1 flex-shrink-0"
                  />

                  <p className="text-gray-600 break-all">
                    {student.email}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-3 gap-2 mt-6">

                <button className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg transition">
                  <Eye size={18} />
                  <span className="hidden md:inline">View</span>
                </button>

                <button className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg transition">
                  <Pencil size={18} />
                  <span className="hidden md:inline">Edit</span>
                </button>

                <button className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition">
                  <Trash2 size={18} />
                  <span className="hidden md:inline">Delete</span>
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View;