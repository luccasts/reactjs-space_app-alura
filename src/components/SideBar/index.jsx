import styled from "styled-components";
import NavigationItem from "./NavigationItem";



const StylizedList = styled.ul `
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;

`

const SideBar = () => {
    return (
        <aside>
            <nav>
                <StylizedList>
                   <NavigationItem
                    activeIcon="/icones/home-ativo.png"
                    inactiveIcon="/icones/home-inativo.png"
                    active
                   >
                        Inicio
                   </NavigationItem>
                   <NavigationItem
                    activeIcon="/icones/mais-vistas-ativo.png"
                    inactiveIcon="/icones/mais-vistas-inativo.png"
                   >
                        Mais vistas
                   </NavigationItem>

                   <NavigationItem
                    activeIcon="/icones/mais-curtidas-ativo.png"
                    inactiveIcon="/icones/mais-curtidas-inativo.png"
                   >
                        Mais curtidas
                   </NavigationItem>

                   <NavigationItem
                    activeIcon="/icones/novas-ativo.png"
                    inactiveIcon="/icones/novas-inativo.png"
                   >
                        Novas
                   </NavigationItem>

                   <NavigationItem
                    activeIcon="/icones/surpreenda-me-ativo.png"
                    inactiveIcon="/icones/surpreenda-me-inativo.png"
                   >
                        Surpreenda-me
                   </NavigationItem>
                   
                </StylizedList>
            </nav>
        </aside>
    )
}

export default SideBar;