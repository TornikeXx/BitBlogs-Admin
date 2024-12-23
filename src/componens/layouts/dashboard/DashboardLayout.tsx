import { Layout, Menu, MenuProps, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useHandleLogOut } from "../../../react-query/mutation/auth";

const { Header, Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  {
    key: `users`,
    label: `Users`,

    children: [
      {
        key: 0,
        label: <Link to="users">Users</Link>,
      },
    ],
  },
  {
    key: `blogs`,
    label: `Blogs`,

    children: [
      {
        key: 1,
        label: <Link to="blogs">Blogs</Link>,
      },
    ],
  },
];

const AdminLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { mutate: handleLogOut } = useHandleLogOut();

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p className="text-2xl font-semibold text-white">Bit Blogs Admin</p>
        <p
          className="text-2xl font-semibold text-red-600 cursor-pointer"
          onClick={() => handleLogOut()}
        >
          Log Out
        </p>
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: "80vh" }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default AdminLayout;
