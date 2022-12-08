import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
const QouteDetails = () => {
	const params = useParams();
	console.log(params);
	return (
		<div>
			<h1>Qoute Details</h1>
			<h1>{params.qoutesId}</h1>
			<Route path={`/qoutes/${params.qoutesId}/comments`}>
				<Comments />
			</Route>
		</div>
	);
};
export default QouteDetails;
