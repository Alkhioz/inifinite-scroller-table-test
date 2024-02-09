import { useMutation } from "@tanstack/react-query"

export const useData = () => {
    const {
        mutate,
        data,
        isError,
        isPending
    } = useMutation<any>({
        mutationFn: async (body:any)=>{
            return body;
        }
    });
    const fetch  = async (body:any) => {
        return mutate(body);
    }
    return {
        fetch,
        data,
        isError,
        isPending
    };
}