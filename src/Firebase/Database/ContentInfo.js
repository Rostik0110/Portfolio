import Firebase from "firebase";

const getContentInfo = async () =>{
    const ref = Firebase.database().ref('/ContentInfo');
    const snapshot = await ref.once('value');
    
    return snapshot.val();
}

export default {
  getContentInfo
}
