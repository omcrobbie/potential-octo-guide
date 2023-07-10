import { TreeItemProps, TreeItem } from "@mui/lab";
import CustomContent from "./CustomContent";

interface CustomTreeItemProps extends TreeItemProps {
  customProps?: any;
}

const CustomTreeItem = ({ customProps, ...props }: CustomTreeItemProps) => (
  <TreeItem
    ContentComponent={CustomContent}
    ContentProps={customProps as any}
    {...props}
  />
);

export default CustomTreeItem;
