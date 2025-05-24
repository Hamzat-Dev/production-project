import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY ='primary',
    INVERTED='inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT ='right',
    LEFT ='left',
    CENTER = 'center',
}
export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
  className?: string;
  title?:string;
  text?:string;
  theme?:TextTheme;
  align?:TextAlign;
  size?:TextSize;
}

type HeaderTegType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTeg: Record<TextSize, HeaderTegType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
        size = TextSize.M,
    } = props;

    const { t } = useTranslation();

    const HeaderTeg = mapSizeToHeaderTeg[size];

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,

    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && (<HeaderTeg className={cls.title}>{title}</HeaderTeg>)}
            {text && (<p className={cls.text}>{text}</p>)}
        </div>
    );
});
