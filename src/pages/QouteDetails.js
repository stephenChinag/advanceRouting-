import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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
	{
		id: "q3",
		author: "chinagorom ",
		text: " hey this is my third qoute ",
	},
];
const QouteDetails = () => {
	const params = useParams();
	const match = useRouteMatch();
	const qoutes = DUMMY_QOUTES.find((qoute) => qoute.id === params.qoutesId);
	if (!qoutes) {
		return <p> not a valid address</p>;
	}
	console.log(match);
	return (
		<div>
			<HighlightedQuote author={qoutes.author} text={qoutes.text} />
			<Route path={match.path} exact>
				<div className="centered linkCenter">
					<Link to={`${match.url}/comments`}> Load Comment</Link>
				</div>
			</Route>

			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</div>
	);
};
export default QouteDetails;
