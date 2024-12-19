import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import {
  getSingleUserInAdmin,
  updateUserInAdmin,
} from "../../../supabase/admin";
import { useParams } from "react-router-dom";
import FormsSkeleton from "../../../componens/FormsSkeleton/FormsSkeleton";
const { Item } = Form;

type InitialValues = { email: string; phone: string };

const UpdateAdminPage = () => {
  const { id } = useParams();
  const [form] = useForm();
  const handleSubmit = (values: { email: string; phone: string }) => {
    updateUserInAdmin(id as string, values);
  };
  const { data, isLoading } = useQuery({
    queryKey: ["single-user", id],
    queryFn: () => {
      if (id) {
        return getSingleUserInAdmin(id);
      }
      return null;
    },
  });
  if (isLoading) {
    return <FormsSkeleton />;
  }
  const initialValues = { email: data?.email, phone: data?.phone };

  return (
    <Form<InitialValues>
      initialValues={initialValues}
      form={form}
      onFinish={handleSubmit}
      style={{ maxWidth: 600 }}
    >
      <Item label="Phone Number" name="phone" rules={[{ required: true }]}>
        <Input placeholder="Enter Phone Number" />
      </Item>

      <Item label="Email" name="email" rules={[{ required: true }]}>
        <Input placeholder="Enter Email" />
      </Item>

      <Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default UpdateAdminPage;
