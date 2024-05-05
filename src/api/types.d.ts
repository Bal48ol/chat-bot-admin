export interface Statistics {
    messagesCount: number;
    chatsCount: number;
}

export interface Prompt {
  value: string;
  type: string;
}

export interface GptFunction {
  value: string;
  name: string;
}