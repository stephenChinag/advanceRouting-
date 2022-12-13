import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQoutes = () => {
	const history = useHistory();
	const addtoQoutesHandler = (qoutesData) => {
		console.log(qoutesData);
		history.push("/qoutes");
	};
	return <QuoteForm onAddQuote={addtoQoutesHandler} />;
};
export default NewQoutes;
