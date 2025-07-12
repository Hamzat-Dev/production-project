import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { Skeleton } from '@/shared/ui/Skeleton';
import { getUserAuthData } from '@/entities/User';

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating = memo(({ profileId, className }: ProfileRatingProps) => {
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: userData?.id ?? '',
    });

    const [rateProfileMutation] = useRateProfile();
    const rating = data?.[0];

    const handleRateProfile = useCallback(async (starsCount:number, feedback?:string) => {
        try {
            await rateProfileMutation({
                rate: starsCount,
                feedback,
                userId: userData?.id ?? '',
                profileId,
            });
        } catch (e) {
            console.log(e);
        }
    }, [userData?.id, profileId, rateProfileMutation]);

    const onCancel = useCallback((starsCount:number) => {
        handleRateProfile(starsCount);
    }, [handleRateProfile]);

    const onAccept = useCallback((starsCount:number, feedback?:string) => {
        handleRateProfile(starsCount, feedback);
    }, [handleRateProfile]);

    if (!userData?.id) {
        return <Skeleton width="100%" height={120} />;
    }
    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <RatingCard
            hasFeedback
            feedbackTitle={t('Оставьте отзыв о данном профиле')}
            title={t('Оцените этот  профиль')}
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
            className={classNames('', {}, [className])}
        />

    );
});

export default ProfileRating;
