import { BLOGS_ROUTES } from "./blog";
import { USERS_ROUTES } from "./user";

export const ADMIN_ROUTES = [...USERS_ROUTES, ...BLOGS_ROUTES];
