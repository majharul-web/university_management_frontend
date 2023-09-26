"use client";
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { sidebarItems } from "@/constant/sidebarItems";
import { USER_ROLE } from "@/constant/role";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const user = USER_ROLE.SUPER_ADMIN;
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1.5rem",
        }}
      >
        PH university
      </div>
      <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline' items={sidebarItems(user)} />
    </Sider>
  );
};

export default Sidebar;
