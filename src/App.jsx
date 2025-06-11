import './App.css'
import FoodCard from './components/FoodCard'

import pbcFactoryImg from './images/pbcfactory.jpeg'
import syrianShawarmaImg from './images/syrian-shawarma.webp'
import phoHaTienImg from './images/phohatien.png'
import twistedIndianImg from './images/twisted-indian.jpeg'
import arePitasImg from './images/arepitas.jpg'
import nazsHalalImg from './images/nazs-halal-food.jpg'
import clutchCityImg from './images/clutch-city-cluckers.jpg'
import zakyZaksImg from './images/zaky-zaks.jpg'
import lanZhouImg from './images/lan-zhou-lamen.jpeg'
import iceSssscreaminImg from './images/ice-sssscreamin.webp'

const App = () => {
  return(
    <>
      <h1 className="mainHeader">Best Eats in Greater Tampa Bay Area</h1>
      <div className="food-card-container">
        <FoodCard name="The Twisted Indian" cuisine="Indian" location="Saint Petersburg" image={twistedIndianImg} link="https://thetwistedindian.com/"/>
        <FoodCard name="Syrian Shawarma" cuisine="Middle Eastern" location="Tampa" image={syrianShawarmaImg} link="https://www.syrianshawarmausa.com/"/>
        <FoodCard name="Pho Ha Tien" cuisine="Vietnamese" location="Saint Petersburg" image={phoHaTienImg} link="https://orderphohatien.com/"/>
        <FoodCard name="Arepitas" cuisine="Venezuelan/Lebansese" location="Tampa" image={arePitasImg} link="https://www.arepitas.net/"/>
        <FoodCard name="PBC Factory" cuisine="Indian" location="Tampa" image={pbcFactoryImg} link="https://pbcfactory.com/"/>
        <FoodCard name="Naz's Halal Food" cuisine="Middle Eastern" location="Tampa" image={nazsHalalImg} link="https://nazshalal.com/"/>
        <FoodCard name="Clutch City Cluckers" cuisine="American" location="Tampa" image={clutchCityImg} link="https://clutchcitycluckers.com/"/>
        <FoodCard name="Zaky Zaks" cuisine="Middle Eastern" location="Tampa" image={zakyZaksImg} link="https://zakyzaks.com/"/>
        <FoodCard name="Lan Zhou Lamen" cuisine="Chinese" location="Tampa" image={lanZhouImg} link="https://www.lanzhoulamennoodlehouse.com/"/>
        <FoodCard name="Ice Sssscreamin'" cuisine="Dessert" location="Tampa" image={iceSssscreaminImg} link="https://www.instagram.com/icescreamin_tampa/?hl=en"/>
      </div>
    </>
  )
}

export default App
