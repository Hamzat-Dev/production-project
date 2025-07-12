import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country)=>void
  readonly?:boolean;
}

const options = [

    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Ukraine, content: Country.Ukraine },

];
export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    const { t } = useTranslation();
    return (
        <ListBox
            readonly={readonly}
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            items={options}
            value={value}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            direction="top right"
        />

    // <Select
    //     label={t('Укажите страну')}
    //     options={options}
    //     className={classNames('', {}, [className])}
    //     value={value}
    //     onChange={onChangeHandler}
    //     readonly={readonly}
    // />
    );
});
