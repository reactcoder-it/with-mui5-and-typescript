import { List as MuiList, ListItem as MuiListItem } from '@mui/material'
import { User } from '../interfaces'
import ListItem from './ListItem'

type Props = {
  items: User[]
}

const List = ({ items }: Props) => {
  return (
    <MuiList>
      {items.map(item => (
        <MuiListItem key={item.id}>
          <ListItem data={item} />
        </MuiListItem>
      ))}
    </MuiList>
  )
}

export default List
