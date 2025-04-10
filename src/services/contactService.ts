import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Save contact message to Firestore
 * @param formData Contact form data
 * @returns Promise containing the document reference
 */
export const saveContactMessage = async (formData: ContactFormData) => {
  try {
    const docRef = await addDoc(collection(db, "contactMessages"), {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
      status: 'new',
      createdAt: new Date().toISOString()
    });
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error saving contact message:", error);
    throw error;
  }
}; 