import styled from "styled-components";
import Title from "../Title";
import Popular from "./Popular";
import Tags from "./Tags";
import Image from "./Image";

const ContainerGallery = styled.div`
    display:flex;
`

const FluidSession = styled.section`
    flex-grow:1;
`

const ContainerImages = styled.ul `
    display:flex;
   
    flex-wrap:wrap;
    gap:24px;
    list-style:none;
`


const Gallery = ({photos = [], onChangePhotoSelected, onChangeAlpha }) => {
    return (
        <>
            <Tags />
            <ContainerGallery>
                <FluidSession>
                    <Title>Navegue pela galeria</Title>
                    <ContainerImages>
                        {photos.map( foto => 
                        <li  key={foto.id}>
                            <Image 
                                photos={foto} 
                                onChangeZoomRequested={onChangePhotoSelected}
                            />
                        </li>
                        )}
                    </ContainerImages>
                  
                </FluidSession>
                <Popular />
            </ContainerGallery>
        </>
    )
}

export default Gallery;