import React from 'react';
import { Route, Link } from "react-router-dom";
const menus = [
	{
		name:'TRANG CHỦ',
		to:'/',
		exact: true
	},
	{
		name:'QUẢN LÝ TASK',
		to:'/detail',
		exact: false
	},
];
const MenuLink =({ label, to, activeOnlyWhenExact}) => {
	// console.log( label, to, activeOnlyWhenExact);
	return (
		<Route
			path={to}
			exact={activeOnlyWhenExact}
			children={({match})=>{
				// console.log(match);
				var active = match ? 'active' : '';
				return(
					<li className={active}>
						<Link to={to}>
							{label}
						</Link>
					</li>

				)
			}}
		/>
	)
}
class Header extends React.Component {
    showMenus = (menus)=>{
		let result = null;
		if(menus.length > 0){
			result = menus.map((menu, index) =>{
				return (
					<MenuLink
						key={index}
						label={menu.name}
						to={menu.to}
						activeOnlyWhenExact={menu.exact} 
					/>
				)
			})
		}
		return result;
    }
    render() {
        return (
            <nav className="nav justify-content-center">
				{this.showMenus(menus)}
            </nav>
        );
    }
}

export default Header;
