import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
    const { t } = useTranslation('adminPanel');

    return (
        <Page>
            {t('Админ Панель')}
        </Page>
    );
};

export default AdminPanelPage;
