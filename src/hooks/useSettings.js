import api from "../../api";
import MockData from "../data";
import useSWR from "swr";

export function useFetch(url) {
  const { data, error } = useSWR(url, async url => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  });

  return { data, error };
}

export const useSettings = () => {
  const { data, error } = useFetch(MockData);
  return {
    settings: data,
    isError: error && !data
  };
};

export const useMockData = () => {
  const data = MockData;
  return {
    settings: data,
    isError: !data
  };
};
