import React from "react";

const CourseFooter = () => {
  return (
    <div className="bg-[#006EFE]">
      <div className="w-full max-w-3xl mx-auto text-center flex flex-col gap-y-4.5 justify-center py-16 bg-[#006EFE]">
        <h1 className="text-3xl font-bold text-[#FFFFFF]">Ready to Start Learning?</h1>

        <p className="px-8 w-full text-[#E0E7FF]">
          Join thousands of students already learning with our expert-led
          courses
        </p>

        <button className="w-[233px] bg-white border-[#E5E7EB] text-[#4F46E5] mt-3.5 rounded-md text-lg py-4 mx-auto font-semibold">
          Take a trial lesson
        </button>
      </div>
    </div>
  );
};

export default CourseFooter;
