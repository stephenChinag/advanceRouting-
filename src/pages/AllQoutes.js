import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import {} from "../lib/api";
const DUMMY_QOUTES = [
	{
		id: "q1",
		author: "steph",
		text: "learning react is fun",
	},
	{
		id: "q2",
		author: "stephen",
		text: "learning react is great",
	},
];

const AllQoutes = () => {
	return <QuoteList quotes={DUMMY_QOUTES} />;
};
export default AllQoutes;
