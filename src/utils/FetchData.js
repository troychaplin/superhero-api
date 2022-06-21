import useSWR from "swr";

const FetchData = () => {
    const Fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, error } = useSWR(
        "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json",
        Fetcher
    );

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default FetchData;
