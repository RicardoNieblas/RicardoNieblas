import classNames from 'classnames';
import styles from './portfolio-item.module.scss';
import { StackItem } from '../stack-item/stack-item';

export interface PortfolioItemProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const PortfolioItem = ({ className }: PortfolioItemProps) => {
    return (
        <a className={styles.link}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
                className={styles['link-image']}
            />
            <div className={styles['link-description']}>
                <h3 className={styles['description-title']}>Heading 3</h3>
                <p className={styles['description-stack']}>
                    <StackItem />
                    <StackItem />
                    <StackItem />
                </p>
            </div>
        </a>
    );
};
