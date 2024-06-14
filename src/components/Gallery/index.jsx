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


const Gallery = ({photos = [], onChangePhotoSelected, onChangeFavorite, handleCategory }) => {
    return (
        <>
            <Tags handleCategory={(search) => handleCategory(search)} />
            <ContainerGallery>
                <FluidSession>
                    <Title>Navegue pela galeria</Title>
                    <ContainerImages>
                        {photos.map( photo => 
                        <li  key={photo.id}>
                            <Image 
                                onChangeFavorite={onChangeFavorite}
                                photo={photo} 
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