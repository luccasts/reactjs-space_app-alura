import styled from "styled-components";
import Image from "../Gallery/Image";
import X from "../../../public/icones/fechar.png"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
`

const StylizedDialog = styled.dialog`
   
    position:absolute;
    top: 250px;

    width:1156px;
    background-color:transparent;
    border:none;
    padding:0;
    
`
const StylizedButton = styled.button`
        position:absolute;
        top: 20px;
        right: 20px;
        background-color:transparent;
        border:none;
`

const ModalZoom = ({ photo, onChangeClose, onChangeFavorite}) => {
   
    return (
        <>
            {photo && <>
                <Overlay/>
                <StylizedDialog open={!!photo} onClose={onChangeClose}>
                    <Image
                        photo={photo}
                        expanded={true}
                        onChangeFavorite={onChangeFavorite}
                    />
                    <form method="dialog">
                        <StylizedButton><img src={X} alt="imagem do X"/></StylizedButton>
                    </form>
                </StylizedDialog>
            </>

            }
        </>
    )
}

export default ModalZoom;