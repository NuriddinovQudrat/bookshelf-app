import { QueryCache, QueryClient, MutationCache } from "@tanstack/react-query";
import { toast } from "react-toastify";

const mutationCache = new MutationCache({
  onError: res => {
    const error: any = res;
    console.log("mutation error", error);
    toast.error(
      error?.response?.data?.message ??
        error?.response?.statusText ??
        error?.message ??
        "An Error Occured!",
    );
  },
});

const queryCache = new QueryCache({
  onError: res => {
    const error: any = res;
    console.log("query error", error);
    toast.error(
      error?.response?.data?.message ??
        error?.response?.statusText ??
        error?.message ??
        "An Error Occured!",
    );
  },
});

export const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
