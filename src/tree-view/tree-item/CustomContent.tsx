import { TreeItemContentProps, useTreeItem } from "@mui/lab";
import { Box, Grid, Typography } from "@mui/material";
import clsx from "clsx";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import { CustomPropsType } from "../../App";

const CustomContent = React.forwardRef(
  (props: TreeItemContentProps & CustomPropsType, ref) => {
    const {
      classes,
      className,
      label,
      nodeId,
      icon: iconProp,
      expansionIcon,
      subtitle,
      hasChildren
    } = props;
    const {
      disabled,
      expanded,
      selected,
      focused,
      handleExpansion,
      handleSelection,
      preventSelection
    } = useTreeItem(nodeId);
    const handleMouseDown = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      preventSelection(event);
    };

    const handleExpansionClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      handleExpansion(event);
    };

    const handleSelectionClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      handleSelection(event);
    };
    const handleClick = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!hasChildren) {
        return handleSelectionClick(evt);
      }
      return handleExpansionClick(evt);
    };
    return (
      <Box
        display="flex"
        sx={{
          flexDirection: "column",
          borderTop: 1
        }}
        className={classes.root}
      >
        <Box display="flex" sx={{ alignItems: "center" }}>
          <Box
            className={classes.iconContainer}
            sx={{
              cursor: "pointer",
              opacity: disabled ? 0.38 : 1
            }}
            onClick={handleExpansionClick}
          >
            {expansionIcon}
          </Box>
          <Box
            ref={ref as React.Ref<HTMLDivElement>}
            className={clsx(className, {
              [classes.expanded]: expanded,
              [classes.selected]: selected,
              // [classes.focused]: focused,
              [classes.disabled]: disabled
            })}
            onClick={handleClick}
            sx={{
              minHeight: 45
            }}
          >
            {iconProp && (
              <div className={classes.iconContainer}>{iconProp}</div>
            )}
            <Typography component="div" className={classes.label}>
              {label}
            </Typography>
          </Box>
        </Box>
        {subtitle && (
          <Box display="flex">
            <InfoIcon />

            {subtitle}
          </Box>
        )}
      </Box>
    );
  }
);

export default CustomContent;
