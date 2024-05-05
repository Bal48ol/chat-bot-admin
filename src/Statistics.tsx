import {useStatistics} from "./query/useStatistics.ts";
import {Space, Spin, Typography} from "antd";
const { Title } = Typography;

export const Statistics = () => {
  const {data, isLoading} = useStatistics();

  return (
    <>
      {
        <Title level={3}>
          Статистика
        </Title>
      }
      {
        isLoading && (
          <Spin/>
        )
      }
      {
        data && (
          <Space direction={"vertical"}>
            <div>
              <Typography>Всего сообщений: {data.messagesCount}</Typography>
            </div>
            <div>
              <Typography>Всего чатов: {data.chatsCount}</Typography>
            </div>
          </Space>
        )
      }
    </>
  );
}