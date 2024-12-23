import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { mapOverBlogs } from "../../../utils/mapOverBlogs";
import { useGetBlogs } from "../../../react-query/query/blogs";

const BlogsListPage = () => {
  const { data, isLoading } = useGetBlogs();
  const { Column } = Table;
  // @ts-expect-error data typeing
  const mappedBlog = mapOverBlogs(data);

  const navigate = useNavigate();
  const handleNavigateToUpdate = (id: string | number) => {
    navigate(`/blog/${id}`);
  };
  const handleNavigateToAddBlog = () => {
    navigate("/add-blog");
  };
  return (
    <Table
      loading={isLoading}
      title={() => (
        <Button
          type="primary"
          onClick={handleNavigateToAddBlog}
          icon={<PlusOutlined />}
        >
          Create
        </Button>
      )}
      bordered
      dataSource={mappedBlog}
    >
      <Column title="Created at" dataIndex="created_at" />
      <Column title="Description" dataIndex="description_en" />
      <Column title="Title" dataIndex="title_en" />
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

export default BlogsListPage;
