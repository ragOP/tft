import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Dropdown from "../Component/Dropdown";

const Investor = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null);

  const toggleDropdown = (menu) => {
    if (menu === currentMenu) {
      setDropdownVisible(false);
      setCurrentMenu(null);
    } else {
      setCurrentMenu(menu);
      setDropdownVisible(true);
    }
  };

  const MenuData = [
    { title: "Our Company", content: "Content 1" },
    { title: "Our Stories", content: "Content 2" },
    { title: "Information Security", content: "Content 3" },
    { title: "Supplier Resources", content: "Content 4" },
  ];

  const CsrMenuData = [
    { title: "CSR Menu 1", content: "CSR Content 1" },
    { title: "CSR Menu 2", content: "CSR Content 2" },
  ];

  const InvestorMenuData = [
    { title: "Investor Menu 1", content: "Investor Content 1" },
    { title: "Investor Menu 2", content: "Investor Content 2" },
  ];

  const NewsroomMenuData = [
    { title: "Newsroom Menu 1", content: "Newsroom Content 1" },
    { title: "Newsroom Menu 2", content: "Newsroom Content 2" },
  ];
  return (
    <>
      <Navbar toggleDropdown={toggleDropdown} />
      {dropdownVisible && (
        <Dropdown
          menus={
            currentMenu === "CSR"
              ? CsrMenuData
              : currentMenu === "Investor"
              ? InvestorMenuData
              : currentMenu === "Newsroom"
              ? NewsroomMenuData
              : MenuData
          }
        />
      )}
      <h1>Investor</h1>
    </>
  );
};

export default Investor;
