import React from "react";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import { Route, Routes } from "react-router-dom";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { UserContext } from "../../Context/UserContext";
import NotFound from "../NotFound";
import Head from "../Helper/Head";

const User = () => {
  const context = React.useContext(UserContext);
  const user = context.data.username;

  return (
    <section className="container">
      <Head title='Minha conta' />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={user} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
