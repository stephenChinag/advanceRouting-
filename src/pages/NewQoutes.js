import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
const NewQoutes = () => {
	const { sendRequest, status } = useHttp(addQuote);
	const history = useHistory();
	useEffect(() => {
		if (status === "completed") {
			history.push("/qoutes");
		}
	}, [status, history]);
	const addtoQoutesHandler = (qoutesData) => {
		sendRequest(qoutesData);
	};
	return (
		<QuoteForm
			isLoading={status === "pending"}
			onAddQuote={addtoQoutesHandler}
		/>
	);
};
export default NewQoutes;
