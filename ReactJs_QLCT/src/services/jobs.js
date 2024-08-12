
export const getJobs = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch jobs: ${res.statusText}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error; 
  }
};
//để gửi dữ liệu từ API thông qua URL được cung cấp.
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
    throw error; 
  }
};

//cập nhật dữ liệu trên server (API) thông qua một yêu cầu HTTP PUT.
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
    throw error; 
  }
};

export const deleteJobs = async (jobs, setJobs, id, url) => {
  try {
    await fetch(url, { method: "DELETE" });
    setJobs(jobs.filter((item) => item.id !== id));
  } catch (error) {
    console.error("Error deleting job:", error);
  }
};
