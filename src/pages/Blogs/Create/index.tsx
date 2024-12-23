import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useHandleAddBlog } from "../../../react-query/mutation/blogs";
const { Item } = Form;

const CreateBlogPage = () => {
  const [form] = useForm();

  const { mutate: addBlogToList } = useHandleAddBlog();
  const handleSubmit = (values: { Description: string; Title: string }) => {
    addBlogToList({
      description_en: values.Description,
      title_en: values.Title,
    });
  };

  return (
    <Form form={form} onFinish={handleSubmit} style={{ maxWidth: 600 }}>
      <Item label="Description" name="Description" rules={[{ required: true }]}>
        <Input placeholder="Enter Descriotion" />
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

export default CreateBlogPage;
