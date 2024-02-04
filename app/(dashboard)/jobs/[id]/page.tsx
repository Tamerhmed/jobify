import EditJobForm from '@/components/EditJobForm';
import { getSingleJobAction } from '@/utils/actions';
import {
	QueryClient,
	dehydrate,
	HydrationBoundary,
} from '@tanstack/react-query';

export default async function page({params}: {params: {id: string}}) {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['job', params.id],
        queryFn: ()=> getSingleJobAction(params.id),
    })

	return <HydrationBoundary state={dehydrate(queryClient)}>
        <EditJobForm jobId={params.id}/>
    </HydrationBoundary>;
}
