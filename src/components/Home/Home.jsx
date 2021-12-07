import Carousel from "../Carousel/Carousel";
import ItemListContainer from "../ItemList/ItemListContainer";
export default function Home() {
  return (
    <>
      <Carousel
        photo1="https://www.longprairiepharmacy.com/wp-content/themes/longprairie/images/slider/5.jpg"
        photo2="https://citizenpharmacy.com/Content/images/slider-2.png"
        photo3="https://www.canadacloudpharmacy.com/tour-big/dispensary-24-1522877629-18156.png"
        photo4="https://assets.conduent.com/wp-content/uploads/jbasa/CNDT_govthcsol_pharmbenfmgmt_597659883_lead.jpg"
        photo5="https://www.mckesson.com/uploadedImages/McKesson.com/Content/About_McKesson/_BTFBH_Body_Components/_Images/BLOG/BLOG-Best-Practices-for-Retail-Pharmacy-Supply-Chain-Management.jpg"
      />
      <ItemListContainer greeting="todos los productos" />
    </>
  );
}
