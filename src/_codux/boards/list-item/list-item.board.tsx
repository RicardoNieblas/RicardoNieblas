import { createBoard } from '@wixc3/react-board';
import { ListItem } from '../../../components/list-item/list-item';

export default createBoard({
    name: 'ListItem',
    Board: () => <ListItem />,
    isSnippet: true,
});
