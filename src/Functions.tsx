import { Space, Spin, Typography} from "antd";
import {useFunctions} from "./query/useFunctions.ts";
import {Prompt} from "./Prompt.tsx";
const { Title } = Typography;
export const Functions = () => {
  const {data, isLoading} = useFunctions();
  
  return (
      <Space direction={"vertical"}>
        <Title level={2}>
          Функции
        </Title>
        {
          isLoading && (
            <Spin/>
          )
        }
        {
          data?.length && (
            data.map(x => <Prompt type={x.name}/>)
          )
        }
      </Space>
  )
}