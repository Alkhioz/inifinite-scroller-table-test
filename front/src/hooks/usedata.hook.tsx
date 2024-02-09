import { useMutation } from "@tanstack/react-query"
import { getDataService } from "../services/getdata.service";

type useDataType = {
    page:number;
    maxNumber:number;
}
export const useData = () => {
    const {
        mutate,
        data,
        isError,
        isPending
    } = useMutation<any,any,any>({
        mutationFn: async (body: useDataType)=>{
            return getDataService(body.page, body.maxNumber);
        }
    });
    const fetch  = async (body: useDataType) => {
        return mutate(body);
    }
    return {
        fetch,
        data,
        isError,
        isPending
    };
}