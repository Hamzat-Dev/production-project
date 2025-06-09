import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Loader } from 'shared/ui/Loader/Loader';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

interface ArticleDetailsCommentsProps {
  className?: string;
  id?:string;
}

export const ArticleDetailsComments = ({ className, id }: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation();
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const comments = useSelector(getArticleComments.selectAll);
    const dispatch = useDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text:string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <VStack
            gap="16"
            max
            className={classNames('', {}, [className])}
        >
            <Text size={TextSize.L} title={t('Комментарии')} />
            <Suspense fallback={<Loader />}>
                <AddCommentForm onSendComment={onSendComment} />
            </Suspense>

            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
};
