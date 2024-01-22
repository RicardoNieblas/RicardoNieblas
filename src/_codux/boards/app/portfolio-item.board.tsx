import { createBoard } from '@wixc3/react-board';
import { PortfolioItem } from '../../../components/portfolio-item/portfolio-item';

export default createBoard({
    name: 'PortfolioItem',
    Board: () => <PortfolioItem />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
