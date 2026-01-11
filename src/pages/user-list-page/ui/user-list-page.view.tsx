import { type FC } from "react";
import { UserListWidget } from "widgets/user-list-widget";
import Typography from "@mui/material/Typography";
import { USERS_TEXTS } from "shared/config/texts";
import { blue } from "@mui/material/colors";
import { Container } from "@mui/material";

interface IProps {}

const UserListView: FC<IProps> = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h5" sx={{ color: blue[800], fontWeight: "bold", mb: 2 }}>
        {USERS_TEXTS.name}
      </Typography>

      <UserListWidget />
    </Container>
  );
};

export { UserListView };
