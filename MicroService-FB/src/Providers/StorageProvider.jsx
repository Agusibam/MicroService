import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
import { storage } from "../firebase"
import { doc, deleteDoc, onSnapshot, collection, addDoc } from "firebase/firestore"; 
import { v4 } from "uuid"
import { db } from "../firebase";



export const uploadfile = async (file, fileType, carpet) =>{

    const storageRef =   ref(storage, fileType + "/" + carpet + "/" + v4() )
    
    
    const data = await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    const name = data.metadata.name
    const update = data.metadata.updated
    const fullPath = data.metadata.fullPath
    
    
    try {
        await addDoc(collection(db, carpet), { name, update, url, fullPath})
    } catch (error) {
        console.log(error)
    }
        
    
    
    return data

}




export const deleteFunc= (id, user) =>{
    deleteDoc(doc(db, user, id ))}


export const deleteImagen= async (path) =>{
    const ImgRef = ref(storage, path)
    await deleteObject(ImgRef)
}

export const RecibeImages = (SetImages, user) => {
    onSnapshot(collection(db, user), (querySnapshot)=>{
        const Images= []
            querySnapshot.forEach((doc) => {
            const Key = doc.id;
            const url = doc.data().url;
            const name = doc.data().name;
            const update = doc.data().update;
            const path = doc.data().fullPath;
            Images.push({ id:Key, url: url, name: name, update: update, fullPath: path})
            });
            SetImages(Images)
            })  
   }