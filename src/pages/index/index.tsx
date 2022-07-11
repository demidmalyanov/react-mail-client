import React from "react";
import { useNavigate } from "react-router-dom";
import { shouldInit } from "../../data/initData";

const IndexPage: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    navigate("/inbox");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="bg-white rounded-lg p-4 w-[20%] mx-auto mt-[200px]">
        <form onSubmit={handleSubmit}>
          <p>Введите ваш email</p>

          <input
            type="email"
            placeholder="Введитe email"
            value={email}
            onChange={handleEmailChange}
            className="shadow my-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="w-full bg-yellow-300 hover:bg-yellow-400 rounded-lg p-2 text-sm"
          >
            Войти
          </button>
        </form>
      </div>
    </>
  );
};

export default IndexPage;
