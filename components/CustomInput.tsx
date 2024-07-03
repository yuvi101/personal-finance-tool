import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { Form } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up')

interface CustomInput {
    //control: Control<z.infer<typeof formSchema>>,
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
  }

const CustomInput = ({control, name, label, placeholder}: CustomInput) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className='form-item'>
                <FormLabel className='form-label'>
                    {label}
                </FormLabel>
                <div className='flex w-full flex-col'>
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            className='input-class'
                            type={name === 'password' ? 'password' :
                                'test'
                            }
                            {...field}
                        />
                    </FormControl>
                    <FormMessage className='text-12 lg:text-14 form-message mt-2'/>
                </div>
            </div>
        )}
    />
        
  )
}

export default CustomInput