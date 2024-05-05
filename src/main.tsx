import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ConfigProvider} from "antd";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ConfigProvider>
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </ConfigProvider>
    </React.StrictMode>,
)
