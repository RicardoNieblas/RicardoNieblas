import classNames from 'classnames';
import styles from './stack-item.module.scss';

export interface StackItemProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const StackItem = ({ className }: StackItemProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles['stack-item']}>Text</span>
        </div>
    );
};
