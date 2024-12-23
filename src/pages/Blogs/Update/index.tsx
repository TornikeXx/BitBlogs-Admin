import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useParams } from "react-router-dom";
import FormsSkeleton from "../../../componens/FormsSkeleton/FormsSkeleton";
import { useGetBlogById } from "../../../react-query/query/blogs";
import { useUpdateBlog } from "../../../react-query/mutation/blogs";
const { Item } = Form;

type InitialValues = { Description: string; Title: string };

const UpdateBlogPage = () => {
  const [form] = useForm();

  const { id } = useParams<{ id: string }>();
  const blogId = id ?? "";

  const { mutate } = useUpdateBlog();

  const { data, isLoading } = useGetBlogById(id as string);

  if (isLoading) {
    return <FormsSkeleton />;
  }
  console.log(data);
  const initialValues = {
    Description: data.description_en,
    Title: data.title_en,
  };

  const handleSubmit = (values: { Description: string; Title: string }) => {
    mutate({
      id: blogId,
      payload: {
        title_en: values.Title,
        description_en: values.Description,
      },
    });
  };

  return (
    <Form<InitialValues>
      initialValues={initialValues}
      form={form}
      onFinish={handleSubmit}
      style={{ maxWidth: 600 }}
    >
      <Item label="Description" name="Description" rules={[{ required: true }]}>
        <Input placeholder="Enter Description" />
      </Item>

      <Item label="Title" name="Title" rules={[{ required: true }]}>
        <Input placeholder="Enter Title" />
      </Item>

      <Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default UpdateBlogPage;
