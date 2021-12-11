import { Box, Typography } from "@mui/material"
import { User } from "../interfaces"

type ListDetailProps = {
  item: User
}

const ListDetails = ({ item: user }: ListDetailProps) => (
  <Box>
    <Typography variant="h1" component="h1">Добро пожаловать, {user.name}!</Typography>
    <Typography>ID: {user.id}</Typography>
  </Box>
)

export default ListDetails
