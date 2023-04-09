import { useState, useEffect } from 'react'
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'

// create a custom hook that will return a collection of documents.
// first, create a useState hook that will hold the documents after fetching them. card
// second, create a useEffect hook that will fetch the documents from the database.
// third, return the documents from the custom hook.
// create a reference to a collection then use the onSnapshot method  to get the data.
export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null)

  useEffect(() => {
    let ref = collection(db, c) // create a reference to a collection

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id })
      })
      setDocuments(results)
    })

    return () => unsub()
  }, [c])

  return { documents }
}
