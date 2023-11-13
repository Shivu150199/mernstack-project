import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { app } from '../firebase'

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user)
  const fileName = useRef(null)
  const [file, setFile] = useState(undefined)
  const [filePerc, setFilePerc] = useState(0)
  const [fileUploadError, setFileUploadError] = useState(false)
  const [formData, setFormData] = useState({})
  console.log(formData)
  console.log(filePerc)
  // console.log(file)
  // firebase storage
  //  allow read;
  //     allow write: if
  //     request.resource.size < 2*1024*1024 &&
  //     request.resource.contentType.matches('image/.*');
  useEffect(() => {
    if (file) {
      handleFileUpload(file)
    }
  }, [file])

  const handleFileUpload = (file) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // console.log('upload is ' + progress)
        setFilePerc(Math.round(progress))
      },
      (error) => {
        setFileUploadError(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        )
      }
    )
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          type="file"
          ref={fileName}
          hidden
          accept="image/.*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <img
          onClick={() => fileName.current.click()}
          src={formData.avatar||currentUser.avatar}
          alt=""
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <p>
          {fileUploadError ? (
            <span className="text-red-700">Error Image upload</span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className='text-slate-700'>{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image successfully uploaded</span>
          ) : (
            ''
          )}
        </p>
        <input
          type="text"
          className="border p-3 rounded-lg mt-2"
          placeholder="username"
          id="username"
        />
        <input
          type="text"
          className="border p-3 rounded-lg mt-2"
          placeholder="email"
          id="email"
        />
        <input
          type="text"
          className="border p-3 rounded-lg mt-2"
          placeholder="password"
          id="password"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  )
}

export default Profile
