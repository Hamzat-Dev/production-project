import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY ='primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT ='right',
    LEFT ='left',
    CENTER = 'center',
}

interface TextProps {
  className?: string;
  title?:string;
  text?:string;
  theme?:TextTheme;
  align?:TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
    } = props;

    const { t } = useTranslation();
    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && (<p className={cls.title}>{title}</p>)}
            {text && (<p className={cls.text}>{text}</p>)}
        </div>
    );
});
