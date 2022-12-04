import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { CaretLeftFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { getJobDetailService } from "../../redux/services/detailServices";
import Head from "next/head";
import Image from "next/image";

const JobDetailPage = () => {
    const router = useRouter()
    const jobID = router.query.job_id
    const dispatch = useDispatch()
    const { data, loading, error } = useSelector((state) => state.jobDetail)

    useEffect(() => {
        dispatch(getJobDetailService(jobID))
    }, [jobID])
    return (
        <div className="flex flex-col h-screen p-4">
            <Head>
                <title>Job Detail : {data.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="flex flex-row justify-start items-center cursor-pointer" onClick={() => router.back()}>
                <CaretLeftFilled /> Back
            </div>
            <div className="flex flex-col border-b-2 border-b-gray-500 py-4">
                <div>
                    {data.type} / {data.location}
                </div>
                <div className="text-3xl">
                    {data.title}
                </div>
            </div>
            <div className="flex flex-row gap-1">
                <div className="flex flex-col py-4">
                    <div dangerouslySetInnerHTML={{ __html: data.description }} className='flex flex-col gap-4' />
                </div>
                <div className="flex flex-col">
                    <Image src={data.company_logo} alt='company-logo' width={200} height={200} />
                    <div>
                        <a href={data.company_url}>Go to Company Page</a>
                    </div>
                    <div className="bg-yellow-500 text-black border-2 border-black p-4 flex flex-col gap-4 my-4" dangerouslySetInnerHTML={{ __html: data.how_to_apply }}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDetailPage