import {GptFunction, Prompt, Statistics} from "./types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getFunctionsAsync = async () => {
  const url = `${API_BASE_URL}/functions`;
  const response = await fetch(url);
  return await response.json() as GptFunction[];
}

export const getStatisticsAsync = async () => {
  const url = `${API_BASE_URL}/statistics`;
  const response = await fetch(url);
  return await response.json() as Statistics;
}

export const clearAsync = async () => {
  const url = `${API_BASE_URL}/clear`;
  await fetch(url, {
    method: "POST"
  });
}

export const getPrompt = async (type: string) => {
  const url = `${API_BASE_URL}/prompt?type=${type}`;
  const response = await fetch(url, {
    method: "GET"
  });
  return await response.json() as Prompt;
}

export const updatePrompt = async (type: string, value: string) => {
  const url = `${API_BASE_URL}/prompt?type=${type}`;
  const body = {
    value: value
  };
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
  });
}