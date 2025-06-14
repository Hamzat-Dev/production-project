import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from '../../types/ui';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';

interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?:boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[]
  className?:string;
  value?: string;
  defaultValue?: string;
  readonly?:boolean;
  label?:string;
  direction?:DropdownDirection;
  onChange:(value:string) => void
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};

export function ListBox(props:ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        label,
        direction = 'bottom left',
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}

            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}

            >
                <HListBox.Button
                    className={cls.trigger}
                    disabled={readonly}
                >
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}

                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
                                        },
                                    )}
                                >
                                    {selected}
                                    {item.content}

                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
