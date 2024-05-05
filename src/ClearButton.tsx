import {Button, message} from "antd";
import {clearAsync} from "./api/api.ts";
import {useStatistics} from "./query/useStatistics.ts";

export const ClearButton = () => {
  const {invalidate} = useStatistics();
  const [messageApi] = message.useMessage();
  const clear = async () => {
    await clearAsync();
    await invalidate();
    await messageApi.info('История очищена');
  }
  
  return (
    <Button danger onClick={() => clear()}>Очистить</Button>
  )
}