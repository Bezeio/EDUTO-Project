import React, { useState, FormEvent } from 'react';

interface FormData {
  // Định nghĩa các trường bạn muốn thêm vào form, ví dụ:
  // username: string;
  // email: string;
}

const Home: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({});

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Logic để xử lý dữ liệu form
    console.log(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Thêm các trường input vào đây */}
        {/* Ví dụ:
        <input
          type="text"
          name="username"
          value={formData.username || ''}
          onChange={handleChange}
        />
        */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
