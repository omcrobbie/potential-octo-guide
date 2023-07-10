import React from "react";
import { TreeData } from "../App";
import CustomTreeItem from "./tree-item/CustomTreeItem";

export const renderTreeData = (data: TreeData[] = []) => {
  return data.map((item) => (
    <React.Fragment key={item.id}>
      <CustomTreeItem
        nodeId={item.id}
        label={item.name}
        disabled={item.disabledButton}
        customProps={{
          ...item.customProps,
          hasChildren: !!item.children?.length
        }}
      >
        {renderTreeData(item?.children)}
      </CustomTreeItem>
    </React.Fragment>
  ));
};
