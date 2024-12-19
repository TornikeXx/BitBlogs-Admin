import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const formatDate = (createdAt: string | null) => {
  if (!createdAt) return "";

  const createdDate = dayjs(createdAt);

  return createdDate.format("HH:mm - DD/MM/YYYY");
};
