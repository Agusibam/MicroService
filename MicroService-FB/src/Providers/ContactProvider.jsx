import { doc, deleteDoc, onSnapshot, collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase";



export const addOrEditLinks = async (linkObjet) => {
    await addDoc(collection(db, 'contact'), {linkObjet})
    console.log(`new task ready`)
}


export const deleteFunc= (id) =>{
    deleteDoc(doc(db, 'contact', id ))}

export const RecibeContacts = (SetCards) => {
    onSnapshot(collection(db, "contact"), (querySnapshot)=>{
        
        const cards= []
            querySnapshot.forEach((doc) => {
            const Email = doc.data().linkObjet.Email;
            const Text = doc.data().linkObjet.Textarea;
            const Key = doc.id;
            const Name = doc.data().linkObjet.Name;
        
            cards.push({ id:Key, email: Email, text: Text, name: Name})
            });
            SetCards(cards)
            })  
    }
    