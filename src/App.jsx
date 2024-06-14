import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import bannerImage from "../public/images/banner.png";
import Gallery from "./components/Gallery";
import photos from "./photos.json"
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";
const GradientBackground = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width:100%;
    height:100%;
`
  
const AppContainer = styled.div `
  width:1440px;
  margin:0 auto;
  max-width:100%;
`
const MainContainer = styled.main `
  display:flex;
  gap:24px;
`

const GalleryContent = styled.section`
  display:flex;
  flex-direction:column;
  flex-grow:1;
  gap:32px;
`

function App() {

  const [photosGallery, setPhotosGallery] = useState(photos)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [search, setSearch] = useState()
  const [category, setCategory] = useState(photos)


  const handleSearch = (v) => {
    console.log(v)
    if(v === ""){
      setPhotosGallery(photos)
      setSearch(photos)
    }else {
      setSearch(photos.filter((photo) => photo.titulo === v ))
      setPhotosGallery(search)
    }
  }

  const handleCategory = (v) => {
    if(v === 0) {
      setCategory(photos)
      setPhotosGallery(category)
    }else {
      setCategory(photos.filter((s) => s.tagId === v))
      setPhotosGallery(category)
    }
  
  };

  
  const onChangeFavorite = (photo) => {
    if(photo.id  === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorita: !selectedPhoto.favorita
      })
    }
    setPhotosGallery(photosGallery.map(photoGallery => {
      return {
        ...photoGallery,
        favorita: photoGallery.id === photo.id ? !photo.favorita : photoGallery.favorita
      }
    }))
  }
  return (
   <GradientBackground>
    <GlobalStyles/>
    <AppContainer>
      <Header handleSearch={(v) => handleSearch(v)}/>
      <MainContainer>
        <SideBar/>
        <GalleryContent>
          <Banner texto="A galeria mais completa de fotos do espaço!" backgroundImage={bannerImage}/>
          <Gallery handleCategory={(v) =>handleCategory(v)} onChangeFavorite={onChangeFavorite} onChangePhotoSelected={photo => setSelectedPhoto(photo)} photos={photosGallery}/>
        </GalleryContent>
      </MainContainer>
      <ModalZoom 
        onChangeClose={() => setSelectedPhoto(null)}  
        photo={selectedPhoto}
        onChangeFavorite={onChangeFavorite}
      />
    </AppContainer>
    <Footer/>
    
   </GradientBackground> 
  )
}

export default App
