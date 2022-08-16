import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';


const products = [
    {id: 1,image:"https://images.pexels.com/photos/7723623/pexels-photo-7723623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Surgical Gloves",category:'generals',description:"Medical gloves are disposable gloves used during medical examinations and procedures to help prevent cross-contamination between caregivers and patients. Medical gloves are made of different polymers including latex, nitrile rubber, polyvinyl chloride and neoprene; they come unpowdered, or powdered with corn starch to lubricate the gloves, making them easier to put on the hands."},
    {id: 2,image:"https://images.pexels.com/photos/3786119/pexels-photo-3786119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Surgical Syringes",category:'gadgets',description:"A syringe is a simple reciprocating pump consisting of a plunger (though in modern syringes, it is actually a piston) that fits tightly within a cylindrical tube called a barrel. The plunger can be linearly pulled and pushed along the inside of the tube, allowing the syringe to take in and expel liquid or gas through a discharge orifice at the front (open) end of the tube. The open end of the syringe may be fitted with a hypodermic needle, a nozzle or tubing to direct the flow into and out of the barrel. Syringes are frequently used in clinical medicine to administer injections, infuse intravenous therapy into the bloodstream, apply compounds such as glue or lubricant, and draw/measure liquids."},
    {id: 3,image:"https://images.pexels.com/photos/6519837/pexels-photo-6519837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Defibrillator",category:'gadgets',description:"Defibrillation is a treatment for life-threatening cardiac arrhythmias, specifically ventricular fibrillation (V-Fib) and non-perfusing ventricular tachycardia (V-Tach). A defibrillator delivers a dose of electric current (often called a counter-shock) to the heart. Although not fully understood, this process depolarizes a large amount of the heart muscle, ending the arrhythmia. Subsequently, the body's natural pacemaker in the sinoatrial node of the heart is able to re-establish normal sinus rhythm. A heart which is in asystole (flatline) cannot be restarted by a defibrillator, but would be treated by cardiopulmonary resuscitation (CPR)."},
    {id: 4,image:"https://images.pexels.com/photos/7089393/pexels-photo-7089393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Medical Gown",category:'generals',description:"Medical gowns are hospital gowns worn by medical professionals as personal protective equipment (PPE) in order to provide a barrier between patient and professional. Whereas patient gowns are flimsy often with exposed backs and arms, PPE gowns, as seen below in the cardiac surgeon photograph, cover most of the exposed skin surfaces of the professional medics."},
    {id: 5,image:"https://images.pexels.com/photos/6753425/pexels-photo-6753425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title:"Stethoscope",category:'generals',description:"The stethoscope is an acoustic medical device for auscultation, or listening to internal sounds of an animal or human body. It typically has a small disc-shaped resonator that is placed against the skin, and one or two tubes connected to two earpieces. A stethoscope can be used to listen to the sounds made by the heart, lungs or intestines, as well as blood flow in arteries and veins. In combination with a manual sphygmomanometer, it is commonly used when measuring blood pressure."}
];

const ItemContainer =({ info })=>{
const [data,setData] = useState([]);

const { categoryId } = useParams();

useEffect(() => {
const getData = new Promise(resolve => {
    setTimeout(() => {
        resolve(products)
    }, 1000);
});
    if (categoryId) {
        getData.then(res => setData(res.filter(product=>product.category === (categoryId))));
    } else {
        getData.then(res => setData(res));
    }

}, [categoryId])

    return(
        <div className="list-products">
        <ItemList className="card" data={data}/>
        </div>
    );
}
export default ItemContainer;