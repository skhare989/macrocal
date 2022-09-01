import { Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import CalorieProgress from "../components/CalorieProgressBar/CalorieProgress";
import Header from "../components/Header";
import MacroTable from "../components/MacroTable";
import { fetchUserById } from "../reducers/userInfoUpdate";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../components/Search";
import "./MainDashboard.css";
import PortionMod from "../components/PortionModifier/PortionMod";

const MainDashboard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.userInfoUpdate;
  });
  useEffect(() => {
    dispatch(fetchUserById(state._id));
  });

  return (
    <div>
      <Header />
      <Heading size="md">Welcome! {state.userName}</Heading>
      <CalorieProgress />
      <div className="main-content-container">
        <div className="macrotable-container">
          <MacroTable />
        </div>
        <div>
          <SearchBar />
          <PortionMod></PortionMod>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
