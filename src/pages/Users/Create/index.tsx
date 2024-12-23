import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useCreateUser } from "../../../react-query/mutation/admin";
const { Item } = Form;

const CreateUserPage = () => {
  const [form] = useForm();

  const { mutate } = useCreateUser();

  const handleSubmit = (values: { Email: string; Password: string }) => {
    mutate({
      email: values.Email,
      password: values.Password,
    });
  };

  return (
    <Form form={form} onFinish={handleSubmit} style={{ maxWidth: 600 }}>
      <Item label="Email" name="Email" rules={[{ required: true }]}>
        <Input placeholder="Enter Email" />
      </Item>

      <Item label="Password" name="Password" rules={[{ required: true }]}>
        <Input placeholder="Enter Password" />
      </Item>

      <Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default CreateUserPage;
