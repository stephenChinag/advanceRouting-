import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
const sortQuotes = (quotes, ascending) => {
	return quotes.sort((quoteA, quoteB) => {
		if (ascending) {
			return quoteA.id > quoteB.id ? 1 : -1;
		} else {
			return quoteA.id < quoteB.id ? 1 : -1;
		}
	});
};
const QuoteList = (props) => {
	const history = useHistory();
	const location = useLocation();

	const queryParameter = new URLSearchParams(location.search);
	const isSorting = queryParameter.get("sort") === "asc";
	const changeSortingHandler = () => {
		history.push({
			pathname: location.pathname,
			search: `?sort=${isSorting ? "desc" : "asc"}`,
		});
	};
	const sortedQuotes = sortQuotes(props.quotes, isSorting);
	console.log(location);
	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={changeSortingHandler}>
					sorting {isSorting ? "Decending" : "Acending"}
				</button>
			</div>
			<ul className={classes.list}>
				{sortedQuotes.map((quote) => (
					<QuoteItem
						key={quote.id}
						id={quote.id}
						author={quote.author}
						text={quote.text}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default QuoteList;
