import { SidebarProps } from "../../../types/sidebar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { ROUTER } from "../../../constants/router";

export const MENU_OPTIONS: SidebarProps[] = [
  {
    path: ROUTER.BOOKS,
    title: "Books",
    Icon: MenuBookIcon,
  },
];
