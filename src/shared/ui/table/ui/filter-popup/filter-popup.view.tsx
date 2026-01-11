import { Popover } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";

interface UserFilterPopupProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  children?: React.ReactNode;
}

const FilterPopup: React.FC<UserFilterPopupProps> = (props) => {
  return (
    <Popover open={Boolean(props.anchorEl)} anchorEl={props.anchorEl} onClose={props.onClose}>
      <Stack spacing={2} sx={{ p: 1.5, width: 300 }}>
        {props.children}
      </Stack>
    </Popover>
  );
};

export { FilterPopup };
