import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
const MainNavigation = () => {
	return (
		<div className={styles.header}>
			<div className={styles.logo}> Nice Step</div>
			<nav className={styles.nav}>
				<ul>
					<li>
						<NavLink to="/qoutes" activeClassName={styles.active}>
							AllQoutes
						</NavLink>
					</li>
					<li>
						<NavLink to="/new-qoute" activeClassName={styles.active}>
							{" "}
							NewQoutes{" "}
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};
export default MainNavigation;
