'use client';

import Button from '@app/components/Button';
import Table from '@app/components/Table';
import Wrapper from '@app/components/Wrapper';
import { useStripeKeys } from '@hooks/stripe-keys';
import { StripeKey } from '../../../types';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import {
  classNames,
  convertToAsterisks,
  getDateDifference,
} from '@helpers/index';
import AddStripeKeyDialog from '@app/components/AddStripeKeyDialog';
import { useKeyValidate } from '@hooks/validate-api-keys';
import { RowSkeleton } from '@app/components/Skeleton';
import { cFetch } from '@lib/cFetcher';
import { mutate } from 'swr';
import { toast } from 'sonner';

const KeyStatus = ({ stripeKey }: { stripeKey: StripeKey }) => {
  const { data, error, isLoading } = useKeyValidate({
    key: stripeKey.restrictedAPIKey,
  });
  // console.log('🔑 key check', error, data);

  return (
    <div className={classNames('px-3 py-3.5 text-sm text-gray-500')}>
      {isLoading && <RowSkeleton />}
      {!isLoading && (
        <div
          className={classNames(
            'flex items-center gap-x-2 justify-start',
            error ? 'text-rose-400' : 'text-green-400'
          )}
        >
          <div
            className={classNames(
              'flex-none rounded-full p-1 shadow-md bg-opacity-25',
              error ? 'bg-rose-400' : 'bg-green-400'
            )}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-current" />
          </div>
          <div className="font-semibold">{error ? 'Error' : 'Valid'}</div>
        </div>
      )}
    </div>
  );
};

export default function Page() {
  const [state, setState] = useState<{
    edit?: string;
    open?: boolean;
    fetching?: boolean;
  }>({});
  const { keys, isLoading } = useStripeKeys({});
  const router = useRouter();
  const nameRef = useRef<HTMLInputElement>(null);
  const keyRef = useRef<HTMLInputElement>(null);
  console.log('StripeKeys', keys, state);

  function redirectToStripe() {
    // router.push('https://docs.stripe.com/keys#obtain-api-keys');
    window.open('https://docs.stripe.com/keys#obtain-api-keys', '_blank');
  }

  function dialogClose() {
    setState((prev) => ({ ...prev, open: false }));
  }

  async function deleteKey(id: string) {
    try {
      // --------------------------------------------------------------------------------
      // 📌  Add Stripe API key to db
      // --------------------------------------------------------------------------------
      setState((prev) => ({ ...prev, fetching: true }));
      console.log('🔑 key', id);

      const { data, status } = await cFetch({
        url: '/api/v1/stripe/keys/delete-key',
        method: 'POST',
        data: { id },
      });

      if (status !== 200 || data?.error) {
        throw new Error(data?.error);
      }

      mutate(`/api/v1/stripe/keys`);
      toast.success(`API key deleted successfully`);
    } catch (err: any) {
      console.error(err);
      toast.error(err.message);
    } finally {
      setState((prev) => ({ ...prev, fetching: false }));
    }
  }

  async function editKey(id: string) {
    try {
      // --------------------------------------------------------------------------------
      // 📌  Add Stripe API key to db
      // --------------------------------------------------------------------------------
      setState((prev) => ({ ...prev, fetching: true }));
      const name = nameRef.current?.value;
      const key = keyRef.current?.value;

      // add 2s delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const { data, status } = await cFetch({
        url: '/api/v1/stripe/keys/edit-key',
        method: 'POST',
        data: { key, name },
      });

      if (status !== 200 || data?.error) {
        throw new Error(data?.error);
      }

      mutate(`/api/v1/stripe/keys`);
      toast.success(`API key updated successfully`);
    } catch (err: any) {
      console.error(err);
      toast.error(err.message);
    } finally {
      setState((prev) => ({ ...prev, fetching: false, edit: undefined }));
    }
  }

  return (
    <Wrapper>
      <AddStripeKeyDialog open={state?.open} setter={dialogClose} />
      <div className="sm:table-cell sm:items-center">
        <div className="sm:table-cell-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Connected Stripe API Keys
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Your team is on the{' '}
            <strong className="font-semibold text-gray-900">Startup</strong>{' '}
            key. You can upgrade or downgrade your plan at any time.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:table-cell-none">
          <Button
            title="Add a new key"
            onClick={() => setState((prev) => ({ ...prev, open: !prev.open }))}
          />
        </div>
      </div>
      <Table
        fetching={isLoading}
        header={[
          { item: 'Key name' },
          { item: 'Key value', class: 'hidden sm:table-cell' },
          { item: 'Status' },
          { item: 'Created At', class: 'hidden sm:table-cell' },
        ]}
        data={keys?.map((key: StripeKey) => {
          const edit = state?.edit === key.id;

          return {
            row: [
              {
                item: (
                  <section>
                    {!edit && <p>{key.name}</p>}
                    {edit && (
                      <input
                        type="text"
                        className="input input-bordered max-w-24"
                        placeholder="Key name"
                        defaultValue={key.name}
                        ref={nameRef}
                      />
                    )}
                  </section>
                ),
                class: 'sm:table-cell-auto min-w-24',
              },
              {
                item: (
                  <section>
                    {!edit && (
                      <p className="blur">
                        {convertToAsterisks(key.restrictedAPIKey!)}
                      </p>
                    )}
                    {edit && (
                      <input
                        type="text"
                        className="input input-bordered max-w-24"
                        placeholder="Key value"
                        defaultValue={key.restrictedAPIKey}
                        ref={keyRef}
                      />
                    )}
                  </section>
                ),
                class: 'hidden sm:table-cell min-w-24',
              },
              { item: <KeyStatus stripeKey={key} /> },
              {
                item: <p>{getDateDifference(key.createdAt!)}</p>,
                class: 'hidden sm:table-cell',
              },
              {
                item: (
                  <Button
                    title={edit ? 'Save' : 'Edit'}
                    style="ghost"
                    class="text-indigo-600"
                    onClick={() => {
                      if (!edit) {
                        setState((prev) => ({ ...prev, edit: key.id }));
                      }
                      if (edit) {
                        editKey(key.id!);
                      }
                    }}
                    fetching={state.fetching && edit}
                    disabled={state.fetching}
                  />
                ),
                class: 'hidden sm:table-cell',
              },
              {
                item: (
                  <Button
                    title="Delete"
                    style="ghost"
                    class="text-indigo-600"
                    type="submit"
                    onClick={() => deleteKey(key.id!)}
                    fetching={state.fetching && edit}
                    disabled={state.fetching}
                  />
                ),
                class: 'hidden sm:table-cell',
              },
            ],
          };
        })}
      />

      <div className="flex flex-col gap-5">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          Restricted API key
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Create a restricted API key
        </h1>

        <div className="card w-fill bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              A restricted API key only allows the level of access that you
              specify.
            </h2>
            <p>To create a restricted API key:</p>

            <section className="flex flex-col gap-2 text-xs font-medium text-slate-500 text-justify">
              <p>Open the API keys page.</p>
              <p>
                You can create a restricted key from scratch or start by cloning
                an existing restricted key.
              </p>
              <p>
                To create a restricted key from scratch, click Create restricted
                key. In this case, the default value for all permissions is
                None. To clone an existing key, in the row for the key you want
                to clone, click the overflow menu (), then select Duplicate
                key…. In this case, the default value for each permission is its
                value in the cloned key.
              </p>
              <p>
                In the Key name field, enter a name. If you cloned an existing
                key, the default name is the cloned key’s name.
              </p>
              <p>
                For each resource you want the new key to access, select the
                permission for this key to allow. If you use Connect, you can
                also select the permission for this key to allow when accessing
                connected accounts. Available permissions are None, Read, or
                Write.
              </p>
              <p>Click Create key.</p>
              <p>
                Stripe sends a verification code to your email address or in a
                text message. (As with any email or text message, it might not
                arrive immediately.) Enter the code in the dialog. If the dialog
                doesn’t continue automatically, click Continue.
              </p>
              <p>
                The dialog displays the new key value. Copy it by clicking it.
              </p>
              <p>Save the key value. You can’t retrieve it later.</p>
              <p>
                In the Add a note field, enter the location where you saved the
                key and click Done.
              </p>
            </section>

            <Button
              title="Stripe API docs"
              style="ghost"
              onClick={redirectToStripe}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
