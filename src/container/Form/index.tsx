import { useForm } from 'react-hook-form';
import Button from '../../components/button';
import { Link } from 'react-router-dom';

export default function MyForm() {
  const { register, handleSubmit } = useForm();
  const addCard=(data:{})=>{
    console.log(data)
  }
    return (
            <div className={`myForm`}>
              <div className='myform'>
                <div className='flex myform_title'>
                <p>New Flashcard</p>
                </div>
                <form action="" onSubmit={handleSubmit(addCard)}>
                    <div><input type="text" title='title'       
                    {...register('title')} placeholder='Enter title'/></div>
                    <div><textarea  title='definition'       
                    {...register('definition')} placeholder='Enter definition'/></div>
                    <div className='myform_buttons'> 
                       <Link to={'/'}><Button clickable='Cancel'/></Link>
                       <Button clickable='Save' />
                    </div>
                </form>
              </div>
            </div>
    )
  }
  