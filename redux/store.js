import { configureStore } from '@reduxjs/toolkit'
import jobListReducer from './reducers/listReducer'
import jobDetailReducer from './reducers/detailReducer'

export default configureStore({
    reducer: {
        jobList: jobListReducer,
        jobDetail: jobDetailReducer
    },
})