import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';
import { VStack } from '../../../../shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" className={cls.header} />
                    <Skeleton width={100} height={16} className={cls.username} />
                </div>
                <Skeleton width="100%" height={50} className={cls.text} />
            </VStack>
        );
    }
    if (!comment) {
        return null;
    }

    return (
        <VStack gap="8" max className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar ? <Avatar src={comment.user.avatar} size={30} /> : null}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
});
