import { classNames } from '@helpers/index';
import Badge from '@components/Badge';
import Link from '@components/Link';
import { useKeyValidate } from '@hooks/useValidateApiKeys';
import { useStripeKeys } from '@hooks/useStripeKeys';
import { useSubscription } from '@hooks/useSubscriptions';
import { mediaScreenTitle } from '@helpers/components';

type Props = {
  onClick?: (props?: any) => void;
  class?: string;
  hide?: boolean;
};

export default function Notifications(props: Props): React.ReactElement | null {
  const { data, count, hasKeys } = useStripeKeys({});
  const { active, isLoading: isSubsLoad } = useSubscription({});
  const {
    hasErrors,
    errorType,
    isLoading: isKeyValidationLoad,
  } = useKeyValidate({
    key: data?.[0]?.restrictedAPIKey,
  });

  if (props.hide) {
    return null;
  }

  return (
    <section className={classNames('flex flex-row gap-2', props.class)}>
      {!active && !isSubsLoad && (
        <Badge
          title={mediaScreenTitle('No Subscription', 'Subscribe')}
          type="warning"
          tooltip="Please subscribe to use the platform!"
        />
      )}
      {(!hasKeys || hasErrors) && !isKeyValidationLoad && active && (
        <Badge
          title={
            (errorType === 'StripeAuthenticationError' &&
              mediaScreenTitle('Invalid Stripe API Key', 'Invalid Key')) ||
            (errorType === 'StripePermissionError' &&
              mediaScreenTitle('API key Permission Error')) ||
            mediaScreenTitle('No Stripe API Key added', 'No API Key')
          }
          type={errorType === 'StripePermissionError' ? 'warning' : 'error'}
          tooltip={
            hasErrors
              ? 'Please update your keys'
              : 'Please add your Stripe keys to use the platform!'
          }
          tooltipPosition="tooltip-bottom"
          description={
            <Link
              href="/dashboard/stripe"
              className="text-xs font-semibold text-indigo-600"
            >
              {hasErrors
                ? mediaScreenTitle('Update keys', 'Update')
                : mediaScreenTitle('Add keys', 'Add')}
            </Link>
          }
        />
      )}
    </section>
  );
}
