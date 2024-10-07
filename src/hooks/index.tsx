import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../apis/books";
import { QUERY_KEYS } from "../constants/query-keys";
import { getMySelf } from "../apis/auth/myself";

export const useBooks = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_BOOKS],
    queryFn: getAllBooks,
  });
};

export const useMyself = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_MYSELF],
    queryFn: getMySelf,
  });
};
