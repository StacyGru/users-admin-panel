import { type FC } from "react";
import { UserListWidget } from "widgets/user-list-widget";
import Typography from "@mui/material/Typography";
import { USERS_TEXTS } from "shared/config/texts";
import { blue } from "@mui/material/colors";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import { CreateUserButton } from "features/create-user";

interface IProps {}

const UserListView: FC<IProps> = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" sx={{ color: blue[800], fontWeight: "bold" }}>
            {USERS_TEXTS.name}
          </Typography>
          <CreateUserButton />
        </Stack>

        <UserListWidget />
      </Stack>
    </Container>
  );
};

export { UserListView };
