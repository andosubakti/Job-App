import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Head from "next/head";
import { Input, Checkbox, Button, Spin } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { getJobListService } from '../redux/services/listServices'
import moment from 'moment';
import useScroll from "../utils/hooks/useScroll";
import { resetDataJobListAction } from "../redux/actions/listActions";

const JobListPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const scroll = useScroll()
    const isLoggedIn = Cookies.get('isLoggedIn') === 'true'
    const { data, loading, error } = useSelector((state) => state.jobList)
    const [page, setPage] = useState(1)
    const [description, setDescription] = useState('')
    const [fullTimeOnly, setFullTimeOnly] = useState(false)
    const [location, setLocation] = useState('')
    const params = {
        page: page,
        description: description,
        location: location,
        full_time: fullTimeOnly
    }

    const onChange = (e) => {
        setFullTimeOnly(e.target.checked);
    };

    const onClickSearch = () => {
        dispatch(resetDataJobListAction())
        setPage(1)
        dispatch(getJobListService(params))
    }

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/')
        }
    }, [])

    useEffect(() => {
        if (scroll.isReachBottom && !loading && !error) {
            setPage(page + 1)
        }
    }, [scroll])

    useEffect(() => {
        dispatch(getJobListService(params))
    }, [page])

    return (
        <>
            <Head>
                <title>Job List</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="flex flex-row justify-center items-center w-full h-full gap-4 p-4">
                <Input addonBefore="Job Description" placeholder="" style={{ maxWidth: '400px' }} onChange={(e) => setDescription(e.target.value)} />
                <Input addonBefore="Location" placeholder="" style={{ maxWidth: '400px' }} onChange={(e) => setLocation(e.target.value)} />
                <Checkbox onChange={onChange}>Full Time Only</Checkbox>
                <Button type="primary" onClick={() => onClickSearch()} style={{ background: '#4287f5' }} icon={<SearchOutlined />}>
                    Search
                </Button>
            </div>
            <div className="flex flex-col p-4">
                <div className="text-3xl font-bold border-b-2 border-b-slate-500 pt-2 pb-4">
                    Job List
                </div>
                {
                    loading && <Spin tip="Loading" size="large">
                        <div className="content" />
                    </Spin>
                }
                {
                    data.length > 1 && (
                        data.map((item, index) => {
                            return (
                                <div onClick={() => router.push(`/detail/${item.id}`)} className="flex flex-row justify-between border-b-2 border-b-slate-500 py-2 cursor-pointer" key={index}>
                                    <div className="flex flex-col">
                                        <div>
                                            {item?.title}
                                        </div>
                                        <div>
                                            {item?.company} - <span className="text-green-500">{item?.type}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <div>
                                            {item?.location}
                                        </div>
                                        <div className="text-gray-500">
                                            {moment(new Date(item?.created_at)).fromNow()}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )
                }
            </div>
        </>
    );
}

export default JobListPage