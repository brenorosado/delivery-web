import { useCallback, useState } from "react";
import { api } from "../services/api";
import { AxiosError } from "axios";

type useApiProps = {
	route: string;
	method: "get" | "post" | "put" | "patch" | "delete";
};

type Response = {
	data: object;
	status: number;
}

export const useApi = ({ route, method }: useApiProps) => {
	const [loading, setLoading] = useState<boolean>(false);

	const fetch = useCallback(
		async ({ params = {}, payload = {} }) => {
			let response: Response = {
				status: 500,
				data: {}
			};

			try {
				setLoading(true);
                response = await api[method](route, payload, { params });
			} catch (e: unknown) {
                if (e instanceof AxiosError) {
					if (e.response) {
						response.status = e.response.status;
						response.data = e.response.data;
					}
                }
			}

			setLoading(false);
			return response;
		},
		[method, route],
	);

	return { fetch, loading };
};
