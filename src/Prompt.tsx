import {usePrompt} from "./query/usePrompt";
import {Space, Spin, Input, Button, Typography} from "antd";
import {useCallback, useEffect, useState} from "react";
const {TextArea} = Input;
const { Title } = Typography;

export const Prompt = ({type}: {type: string}) => {
  const {data, isLoading, update} = usePrompt(type);
  const [value, setValue] = useState<string>();
  
  useEffect(() => {
    setValue(data?.value)
  }, [data]);
  
  const updateValue = useCallback(async (value: string) => {
    await update(value);
  }, [update])

  return (
    <Space direction={"vertical"}>
      <Title level={3}>
        {data?.type}
      </Title>
      {
        isLoading && (
          <Spin/>
        )
      }
      {
        data && (
          <Space direction={"vertical"}>
            <TextArea value={value} onChange={(e) => setValue(e.target.value)} rows={10} style={{width: "50vw"}}/>
          </Space>
        )
      }
      <Button disabled={value === data?.value} type={"primary"} onClick={() => updateValue(value ?? "")}>Сохранить</Button>
    </Space>
  )
}