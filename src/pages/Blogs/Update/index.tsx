import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import { Blog, getBlogById, updateBlog } from "../../../supabase/blogs";
import FormsSkeleton from "../../../componens/FormsSkeleton/FormsSkeleton";
const { Item } = Form;

type InitialValues = { Description: string; Title: string };

const UpdateBlogPage = () => {
  const queryClient = useQueryClient();
  const [form] = useForm();
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const blogId = id ?? "";

  const { mutate } = useMutation({
    mutationKey: ["update-blog"],
    mutationFn: (params: { id: string; payload: Partial<Blog> }) =>
      updateBlog(params),
    onSuccess: () => {
      navigate("/blogs");
      queryClient.invalidateQueries({ queryKey: ["single-blog"] });
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ["single-blog", id],
    queryFn: () => {
      if (id) {
        return getBlogById(id);
      }
      return null;
    },
  });
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
