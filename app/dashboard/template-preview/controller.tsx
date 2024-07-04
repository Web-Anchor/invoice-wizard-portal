'use client';

import Wrapper from '@app/components/Wrapper';
import { Spinner } from '@app/components/Skeleton';
import { useBuildChargeTemplate } from '@hooks/useTemplates';
import { useSearchParams } from 'next/navigation';
import PageHeadings from '@app/components/PageHeadings';

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id')!;
  const chargeid = searchParams.get('chargeid')!;
  const { html, isLoading } = useBuildChargeTemplate({ id, chargeid });

  //  Minimum width = 1200 pixels * 0.707 ≈ 848 pixels

  return (
    <Wrapper>
      <Spinner hidden={!isLoading} />
      {!isLoading && html && (
        <div
          className={`w-full h-full max-w-4xl mx-auto p-4 min-h-[1200px] min-w-[848px]`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}

      {!html && !isLoading && (
        <PageHeadings
          title="Invoice Template Not Found"
          description="No template found for the selected invoice. Please save the template to view it here."
          slogan="Create, Save, and Preview Your Invoice Template."
        />
      )}
    </Wrapper>
  );
}
