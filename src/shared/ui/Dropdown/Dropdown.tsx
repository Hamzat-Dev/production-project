import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import { DropdownDirection } from '../../types/ui';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
disable?:boolean;
content?: ReactNode;
onClick?: ()=>void;
href?:string;
}

interface DropdownProps {
className?: string;
items:DropdownItem[];
trigger:ReactNode;
direction?:DropdownDirection
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};

export function Dropdown(props:DropdownProps) {
    const {
        className,
        items,
        trigger,
        direction = 'bottom left',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [className])}
        >
            <Menu.Button
                className={cls.btn}
            >
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }:{active:boolean}) => (
                        <button
                            disabled={item.disable}
                            type="button"
                            onClick={item.onClick}
                            className={classNames(cls.item, { [cls.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                disabled={item.disable}
                                as={AppLink}
                                to={item.href}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (

                        <Menu.Item
                            disabled={item.disable}
                            as={Fragment}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
}
