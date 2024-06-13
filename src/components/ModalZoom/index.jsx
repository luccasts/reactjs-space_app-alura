import styled from "styled-components";
import Image from "../Gallery/Image";
import X from "../../../public/icones/fechar.png"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0,  ${(props) => (props.$alpha ? 0.7 : 0)});
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
`

const StylizedDialog = styled.dialog`
    position:absolute;
    top: 250px;
    background-color:transparent;
    border:none;
    padding:0;
    width:1156px;
    height:660px;



    button {
        position:absolute;
        top:0;
        right:0;
    } 
`

const ModalZoom = ({ photo, alpha = true}) => {
   
    return (
        <>
            {photo && <>
                <Overlay $alpha={alpha}/>
                <StylizedDialog open={!!photo}>
                    <Image
                        photos={photo}
                        expanded={true}
                    />
                    <form method="dialog">
                        <button><img src={X} alt="imagem do X"/></button>
                    </form>
                </StylizedDialog>
            </>

            }
        </>
    )
}

export default ModalZoom;