import { Form, Skeleton, Space } from "antd";

const FormsSkeleton = () => {
  return (
    <Form>
      <Space direction="vertical" size="large">
        <Skeleton.Input active size="large" />
        <Skeleton.Input active size="large" />
        <Skeleton.Button active size="small" />
      </Space>
    </Form>
  );
};

export default FormsSkeleton;
