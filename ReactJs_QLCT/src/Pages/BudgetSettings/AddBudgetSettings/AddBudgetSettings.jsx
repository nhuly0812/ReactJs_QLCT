import { Link, useNavigate } from "react-router-dom";
import InputBudgetSettings from "./InputBudgetSettings/InputBudgetSettings";
import { useState } from "react";
import { createJob } from "../../../services/jobs";

function AddBudgetSettings({ jobs, setJobs }) {
  const [job, setJob] = useState({});
  const navigate = useNavigate();

  const addBudget = async () => {
    // Gửi dữ liệu job mới đến server để thêm vào danh sách ngân sách
    const data = await createJob(job, "http://localhost:5000/budgetSettings");
  // Cập nhật danh sách ngân sách với job mới được thêm
    setJobs([...jobs, data]);
    navigate("/tableBudgetSettings"); // Điều hướng đến trang /tableBudgetSettings sau khi thêm
  };

  return (
    <div className="flex flex-col bg-white shadow-xl w-[500px] h-[500px] justify-center items-center rounded-3xl">
      <h1 className="font-bold text-2xl text-[#308BEB] mb-5">ADD BUDGET</h1>
      <InputBudgetSettings setJob={setJob} />
      <Link to={"/tableBudgetSettings"}>
        <button
          className="border-2 px-3 py-2 w-[350px] mt-5 rounded-lg bg-[#308BEB] text-white flex justify-center shadow-md hover:bg-[#2677c7]"
          onClick={addBudget}
        >
          ADD
        </button>
      </Link>
    </div>
  );
}

export default AddBudgetSettings;
