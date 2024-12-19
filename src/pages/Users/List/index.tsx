import { useQuery } from "@tanstack/react-query";
import { getAdmin } from "../../../supabase/admin";
import { Button, Table } from "antd";
import { mapOverAdminsInfo } from "../../../utils/mapOverAdmins";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const UsersListPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-admin"],
    queryFn: getAdmin,
  });
  console.log(data);
  const { Column } = Table;

  // @ts-expect-error data typeing
  const mappedUser = mapOverAdminsInfo(data);

  const navigate = useNavigate();
  const handleNavigateToUpdate = (id: string | number) => {
    navigate(`/user/${id}`);
  };
  const handleNavigateToAddAdmin = () => {
    navigate("/add-user");
  };
  return (
    <Table
      loading={isLoading}
      title={() => (
        <Button
          type="primary"
          onClick={handleNavigateToAddAdmin}
          icon={<PlusOutlined />}
        >
          Create
        </Button>
      )}
      bordered
      dataSource={mappedUser}
    >
      <Column title="Email" dataIndex="email" />
      <Column title="Created At" dataIndex="createdAt" />
      <Column title="Phone" dataIndex="phone" />
      <Column
        title="Actions"
        render={(_, record) => {
          return (
            <EditOutlined
              onClick={() => {
                handleNavigateToUpdate(record.id);
              }}
            />
          );
        }}
      />
    </Table>
  );
};

export default UsersListPage;
