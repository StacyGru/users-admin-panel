import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import type { ITableColumn, TSortDirection } from "shared/ui/table";
import Stack from "@mui/material/Stack";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import React, { useState } from "react";
import { USERS_TEXTS } from "shared/config/texts";
import { Tooltip } from "@mui/material";
import { FilterPopup } from "shared/ui/table/ui/filter-popup";
import { blue } from "@mui/material/colors";

interface TableHeadCellProps<T> {
  column: ITableColumn<T>;
  sortDirection: TSortDirection;
  onSortChange?: (column: keyof T, direction: TSortDirection) => void;
}

const TableHeadCell = <T,>({ column, sortDirection, onSortChange }: TableHeadCellProps<T>) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const toggleSort = () => {
    if (!onSortChange) return;

    let nextSort: TSortDirection = null;

    if (sortDirection === null) {
      nextSort = "asc";
    } else if (sortDirection === "asc") {
      nextSort = "desc";
    } else {
      nextSort = null;
    }

    onSortChange(column.name, nextSort);
  };

  const openFilter = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const closeFilter = () => setAnchorEl(null);

  return (
    <TableCell
      sx={{
        fontWeight: "bold",
        color: blue[800],
        "&:hover .action-button": { opacity: 1 }
      }}
    >
      <Stack direction="row" alignItems="center" spacing="15px">
        <span>{column.title}</span>

        <Stack direction="row">
          {column.sortable && (
            <Tooltip title={USERS_TEXTS.columnActions.sort}>
              <IconButton
                className="action-button"
                size="small"
                onClick={toggleSort}
                sx={{
                  opacity: sortDirection ? 1 : 0,
                  color: sortDirection ? "primary.main" : "text.secondary"
                }}
              >
                {sortDirection === "desc" ? (
                  <ArrowDownwardIcon fontSize="small" />
                ) : (
                  <ArrowUpwardIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>
          )}

          {column.filterable && (
            <>
              <Tooltip title={USERS_TEXTS.columnActions.filter}>
                <IconButton
                  className="action-button"
                  size="small"
                  onClick={openFilter}
                  sx={{
                    opacity: column.isFilterActive ? 1 : 0,
                    color: column.isFilterActive ? "primary.main" : "text.secondary"
                  }}
                >
                  <FilterAltOutlinedIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              {column.renderFilter?.() && (
                <FilterPopup anchorEl={anchorEl} onClose={closeFilter}>
                  {column.renderFilter()}
                </FilterPopup>
              )}
            </>
          )}
        </Stack>
      </Stack>
    </TableCell>
  );
};

export { TableHeadCell };
