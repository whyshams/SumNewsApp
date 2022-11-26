import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Form({ _id }) {
  const [formData, setFormData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    let response
    setFormData(data)
    try {
      response = await fetch('/api/createComment', {
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json',
      })
      setIsSubmitting(false)
      setHasSubmitted(true)
    } catch (err) {
      setFormData(err)
    }
  }

  if (isSubmitting) {
    return <h3>Submitting comment…</h3>
  }
  if (hasSubmitted) {
    return (
      <>
        <h3>Thanks for your comment,{formData.name}!</h3>
        <ul>
          <li>
                     
            Your comment will be displayed once the editor approves.
          </li>
        </ul>
      </>
    )
  }

  return (
    <div className='bg-black rounded m-4 text-center'>
        <h2 className='pt-4 pb-4'>Have a say?</h2>

<form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg  d-block"
      disabled
    >
      <input {...register('_id')} type="hidden" name="_id" value={_id} />
      <label className="mb-5 d-block">
       
        <input
          name="name"
          {...register('name', { required: true })}
          className="btn-matt form-input mt-1 block w-full rounded border py-2 px-3 shadow"
          placeholder="Your Name"
        />
      </label>
      <label className="mb-4 block">
        
        <input
          name="email"
          type="email"
          {...register('email', { required: true })}
          className="btn-matt form-input mt-1 block w-full rounded border py-2 px-3 shadow"
          placeholder="your@email.com"
        />
      </label>
      <label className="mb-3 d-block">
        
        <textarea
          {...register('comment', { required: true })}
          name="comment"
          className="btn-matt form-textarea mt-1 block w-full rounded  border mb-2 shadow"
          rows="8"
          
          placeholder="Enter Your Comment."
        ></textarea>
       
      </label>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <div className='d-flex justify-content-center align-items-center'>
      <input
        type="submit"
        className="mb-5 rounded font-bold btn btn-light button"
      />
      </div>
      
    </form>
    </div>
    
  )}