//để lấy dữ liệu từ API thông qua URL được cung cấp.
export const fetchJobs = async (url) => {
  //để lấy dữ liệu từ API thông qua URL được cung cấp.
  const res = await fetch(url);
  //chuyển đổi phản hồi từ API từ json thành đối tượng js
  const data = await res.json();
  //Trả về dữ liệu đã được chuyển đổi.
  return data;
};

//để lấy dữ liệu từ API thông qua URL được cung cấp.
export const getJobs = async (url) => {
  try {
    //để lấy dữ liệu từ API thông qua URL được cung cấp.
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch jobs: ${res.statusText}`);
    }
    //chuyển đổi phản hồi từ API từ json thành đối tượng js

    const data = await res.json();
    //Trả về dữ liệu đã được chuyển đổi.

    return data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error; // Ném lỗi ra để xử lý ở nơi gọi hàm
  }
};

export const createJob = async (job, url) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(job),
    });
    if (!res.ok) {
      throw new Error(`Failed to create job: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error creating job:", error);
    throw error; // Ném lỗi ra để xử lý ở nơi gọi hàm
  }
};

export const updateJobs = async (job, url) => {
  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    });

    if (!res.ok) {
      throw new Error(`Failed to update jobs: ${res.statusText}`);
    }
  } catch (error) {
    console.error("Error updating jobs:", error);
    throw error; // Ném lỗi ra để xử lý ở nơi gọi hàm
  }
};

export const deleteJobs = async (jobs, setJobs, id, url) => {
  try {
    //thực hiện yêu cầu xóa dữ liệu API với phương thức DELETE
    await fetch(url, { method: "DELETE" });
    //cập nhập state bằng cách lọc bỏ mục đã xóa
    setJobs(jobs.filter((item) => item.id !== id));
  } catch (error) {
    console.error("Error deleting job:", error);
  }
};
