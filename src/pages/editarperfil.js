import Button from "../components/button.js";
import Select from "../components/select.js";

export const EditarPerfil = (props) => {
	const template = `
	<header>
		<nav>
			<li>
				<select id="select" onchange="changeSelect()">
					${Select({name:'Mural', id:'mural', class:'class-mural', value:'mural'})}
					${Select({name:'Editar Perfil', id:'editar-perfil', class:'class-editar-perfil', value:'editar', selected:'selected'})}
				</select>
			</li>
			<li>Logo</li>
			<li>Logout</li>
		</nav>
	</header>
	${props.template}
	`;

	return template;

}


// const test = () => {
// 	if (document.getElementById('select').value === "mural") {
// 		window.location.hash = "mural";
// 	} else if (document.getElementById("select").value === "editar") {
// 		window.location.hash = "editar";
// 	} else {
// 		logout();
// 	}
// }

//  Bio será colocada em editar perfil
//  ${Post({ id:'bio', placeholder:'Escreva sobre você', rows:'5', cols:'8'})}
