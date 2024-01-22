import { createBoard } from '@wixc3/react-board';
import { StackItem } from '../../../components/stack-item/stack-item';

export default createBoard({
    name: 'StackItem',
    Board: () => <StackItem />,
    isSnippet: true,
});
