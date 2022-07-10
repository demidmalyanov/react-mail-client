import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-transparent flex flex-row justify-between my-2">
      <img
        src="https://avatars.mds.yandex.net/get-lpc/1220100/22997c2f-f01d-490c-a00e-3785294c5995/fallback"
        className="h-[35px] w-[120px]"
        alt="logo"
      />
      <p>{localStorage.getItem("email")}</p>
    </div>
  );
};

export default Header;
