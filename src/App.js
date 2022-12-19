// ** Router Import
import { useEffect } from 'react'
import Router from './router/Router'
import OneSignal from 'react-onesignal'
import { defineOneSignal } from '@utils'

const App = props => {

    useEffect(() => {
        OneSignal.init({ 
            appId: process.env.REACT_APP_ONESIGNAL_APPID,
            subdomainName: "cms.jarimuawasipemilu"
        })

        OneSignal.setDefaultNotificationUrl("https://cms.jarimuawasipemilu.bawaslu.go.id")

        defineOneSignal(OneSignal)
    })

    return <Router />
}

export default App
