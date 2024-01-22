import classNames from 'classnames';
import styles from './list-item.module.scss';

export interface ListItemProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ListItem = ({ className }: ListItemProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ol className={styles.list}>
                <li className={styles['list-item']}>
                    <div className={styles['list-div']}></div>
                    <p className={styles['list-date']}>
                        <span className={styles['list-text']}>Year</span>
                        <h3 className={styles['list-title']}>Title</h3>
                        <div className={styles['list-time']}>Time</div>
                    </p>
                    <p className={styles['list-description']}>This is a paragraph.</p>
                </li>
            </ol>
        </div>
    );
};
