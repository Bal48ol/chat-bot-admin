import {Statistics} from "./Statistics.tsx";
import {ClearButton} from "./ClearButton.tsx";
import {Divider, Space, Typography} from "antd";
import {Prompt} from "./Prompt";
import {Functions} from "./Functions.tsx";
const { Title } = Typography;

function App() {

  return (
    <>
      <div>
        <Title level={2}>
          Промпты
        </Title>
        <Space direction={"vertical"}>
          <Prompt type={"system"}/>
        </Space>
      </div>
      <Divider/>
      <Space direction={"vertical"}>
        <Statistics/>
        <div>
          <ClearButton/>
        </div>
      </Space>
      <Divider/>
      <Space direction={"vertical"}>
        <Functions/>
      </Space>
    </>
  )
}

export default App
